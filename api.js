const Promise = require('bluebird')
const request = require('request-promise')
const linkparser = require('parse-link-header')
const Bottleneck = require('bottleneck')
const R = require('ramda')

require('dotenv').config()

const token = process.env.CANVAS_API_TOKEN
const canvasInstance = process.env.CANVAS_INSTANCE
const accountId = process.env.ACCOUNT_ID

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

const getAllPages = (url, result = []) =>
  request({
    'method': 'GET',
    'uri': url,
    'json': true,
    'resolveWithFullResponse': true,
    'headers': {
      'Authorization': 'Bearer ' + token
    }
  }).then(response => {
    result = [...result, ...response.body]
    const links = linkparser(response.headers.link)
    return links.next ? getAllPages(links.next.url, result) : result
  })

const getAllSubaccounts = accountId => getAllPages(canvasInstance + `/api/v1/accounts/${accountId}/sub_accounts?`)
const getAllCourses = deptIds =>
  Promise.all(deptIds.map(deptId => getAllPages(canvasInstance + `/api/v1/accounts/${deptId}/courses?`)))
const getAllStudents = courseIds =>
  Promise.all(courseIds.map(courseId => getAllPages(canvasInstance + `/api/v1/courses/${courseId}/users`)))

limiter.schedule(() => getAllSubaccounts(accountId)
  .then(result => result.map(x => x.id))
  .then(deptIds => getAllCourses(deptIds))
  .then(result => R.flatten(result))
  .then(courses => courses.map(course => course.id))
  .then(courseIds => getAllStudents(courseIds))
  .then(courses => courses.filter(students => students.length > 100))
  .then(coursesWithMoreThan100Students => console.log(coursesWithMoreThan100Students))
  .catch(err => console.log(err))
)
