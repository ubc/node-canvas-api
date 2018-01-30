const { fetchAll } = require('./util')
require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

module.exports = {
  getCoursesByUser: (userId, ...options) => {
    return fetchAll(canvasDomain + `/users/${userId}/courses`)
  }
}
