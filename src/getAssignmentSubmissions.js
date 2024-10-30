import fetchAll from './internal/fetchAll.js'
import buildOptions from './internal/util.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all assignment submissions in a course
 * @param {Number} courseId the course id.
 * @param {Number} assignmentId the assignment id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Assignment submission objects: https://canvas.instructure.com/doc/api/submissions.html
 */

export default function getAssignmentSubmissions (courseId, assignmentId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/assignments/${assignmentId}/submissions?` + buildOptions(options))
}
