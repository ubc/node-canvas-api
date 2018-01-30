const Promise = require('bluebird')
const request = require('request-promise')
const linkparser = require('parse-link-header')
const R = require('ramda')
require('dotenv').config()

const token = process.env.CANVAS_API_TOKEN
const canvasInstance = process.env.CANVAS_INSTANCE

const fetchAll = (url, result = []) =>
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
    return links.next ? fetchAll(links.next.url, result) : result
  })

const buildOptions = options => {
  if (options) return options.join('&')
  else return ''
}

const getAllSubaccounts = accountId =>
  fetchAll(canvasInstance + `/api/v1/accounts/${accountId}/sub_accounts?`)

const getAllCourses = (deptIds, ...options) =>
  Promise.all(deptIds.map(deptId =>
    fetchAll(canvasInstance + `/api/v1/accounts/${deptId}/courses?` + buildOptions(options))))

const getAllStudents = (courseIds, ...options) =>
  Promise.all(courseIds.map(courseId =>
    fetchAll(canvasInstance + `/api/v1/courses/${courseId}/users?` + buildOptions(options))))

const getAllEmailsInCourse = (accountId, deptName, courseCode) =>
  getAllSubaccounts(accountId)
    .then(depts => depts.map(({ id, name }) => ({ id, name })))
    .then(depts => depts.find(dept => dept.name === deptName))
    .then(dept => getAllCourses([dept.id]))
    .then(courses => R.flatten(courses))
    .then(courses => courses.find(course => course.course_code === courseCode))
    .then(course => getAllStudents([course.id], 'include[]=email', 'enrollment_type[]=student'))
    .then(students => R.flatten(students))
    .then(students => console.log(students))

module.exports.getAllSubaccounts = getAllSubaccounts
module.exports.getAllCourses = getAllCourses
module.exports.getAllStudents = getAllStudents
module.exports.getAllEmailsInCourse = getAllEmailsInCourse
