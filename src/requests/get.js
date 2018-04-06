const request = require('request-promise')
const { buildOptions } = require('../util')
const linkparser = require('parse-link-header')

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN
const token = process.env.CANVAS_API_TOKEN

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
  }).catch(err => console.log(err))

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
  getCoursesByUser: (userId, ...options) =>
    fetchAll(canvasDomain + `/users/${userId}/courses`),
  getCustomGradeBookColumns: courseId =>
    fetchAll(canvasDomain + `/courses/${courseId}/custom_gradebook_columns`),
  getProgress: id =>
    fetchAll(canvasDomain + `/progress/${id}`),
  getUserPageViews: userId =>
    fetchAll(canvasDomain + `/users/${userId}/page_views`),
  getAnalytics: accountId =>
    fetchAll(canvasDomain + `/accounts/${accountId}/analytics/current/activity`)
}
