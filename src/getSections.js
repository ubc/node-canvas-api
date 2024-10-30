import fetchAll from './internal/fetchAll.js'
import buildOptions from './internal/util.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all sections in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Section objects: https://canvas.instructure.com/doc/api/sections.html
 */

export default function getSections (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/sections?` + buildOptions(options))
}
