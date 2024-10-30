import fetchAll from './internal/fetchAll.js'
import buildOptions from './internal/util.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all assignments in a course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Assignment objects: https://canvas.instructure.com/doc/api/assignments.html#Assignment
 */

export default function getAssignments (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/assignments?` + buildOptions(options))
}
