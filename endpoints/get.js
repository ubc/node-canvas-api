const { buildOptions, fetchAll } = require('./util')
require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

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
  }
}
