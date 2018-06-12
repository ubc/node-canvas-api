const request = require('request-promise')
const { buildOptions } = require('../util')
const { getOptions } = require('../options')
const linkparser = require('parse-link-header')

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN
const token = process.env.CANVAS_API_TOKEN

const requestObj = url => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
})

const fetchAll = (url, result = []) =>
  request(requestObj(url))
    .then(response => {
      result = [...result, ...response.body]
      const links = linkparser(response.headers.link)
      return links.next ? fetchAll(links.next.url, result) : result
    }).catch(err => console.log(err))

const fetch = url => request(requestObj(url))
  .then(response => response.body)

module.exports = {
  getAccounts: () => fetchAll(canvasDomain + `/accounts`),
  getSubaccounts: accountId =>
    fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`),
  getUsersInAccount: accountId =>
    fetchAll(canvasDomain + `/accounts/${accountId}/users?`),
  getCourses: (deptId, ...options) =>
    fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options)),
  getUsersInCourse: (courseId, ...options) =>
    fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options)),
  getCoursesByUser: (userId) =>
    fetchAll(canvasDomain + `/users/${userId}/courses`),
  getCustomGradeBookColumns: courseId =>
    fetchAll(canvasDomain + `/courses/${courseId}/custom_gradebook_columns?include_hidden=true`),
  getProgress: id =>
    fetchAll(canvasDomain + `/progress/${id}`),
  getUserPageViews: userId =>
    fetchAll(canvasDomain + `/users/${userId}/page_views`),
  getAnalytics: accountId =>
    fetchAll(canvasDomain + `/accounts/${accountId}/analytics/current/activity`),
  getAssignments: (courseId, ...options) =>
    fetchAll(canvasDomain + `/courses/${courseId}/assignments?` + buildOptions(options)),
  getSyllabusOfCourse: courseId =>
    fetch(canvasDomain + `/courses/${courseId}?` + getOptions.courses.include.syllabus_body)
      .then(course => ({
        courseId,
        syllabus: course.syllabus_body
      }))
}
