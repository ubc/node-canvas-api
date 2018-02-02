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
  getSubaccounts: accountId => {
    return fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`)
  },
  getUsersInAccount: accountId => {
    return fetchAll(canvasDomain + `/accounts/${accountId}/users?`)
  },
  getUsersInCourse: (courseId, ...options) => {
    return fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options))
  },
  getCourses: (deptId, ...options) => {
    return fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options))
  },
  getCoursesByUser: (userId, ...options) => {
    return fetchAll(canvasDomain + `/users/${userId}/courses`)
  },
  getCustomGradeBookColumns: courseId => {
    return fetchAll(canvasDomain + `/courses/${courseId}/custom_gradebook_columns`)
  }
}
