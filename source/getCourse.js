import fetch from './internal/fetch'
import buildOptions from './internal/util'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves course info
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a Course object: https://canvas.instructure.com/doc/api/courses.html#Course
*/

export default function getCourse (courseId, ...options) {
  return fetch(canvasDomain + `/courses/${courseId}?` + buildOptions(options))
}
