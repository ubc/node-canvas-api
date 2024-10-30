import fetchAll from './internal/fetchAll.js'
import buildOptions from './internal/util.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all modules in a course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Module objects: https://canvas.instructure.com/doc/api/modules.html
 */

export default function getModules (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/modules?` + buildOptions(options))
}
