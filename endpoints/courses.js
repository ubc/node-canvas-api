const { buildOptions, fetchAll } = require('./util')
require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

module.exports = {
  getCourses: (deptId, ...options) => {
    return fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options))
  }
}
