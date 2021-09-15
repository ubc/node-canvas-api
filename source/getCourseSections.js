import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves course info
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Section object: https://canvas.instructure.com/doc/api/sections.html#method.sections.index
*/

export default function getCourseSections (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/sections?` + buildOptions(options))
}
