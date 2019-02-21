import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all enrollments in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Enrollment objects: https://canvas.instructure.com/doc/api/enrollments.html#method.enrollments_api.index
 */

export default function getEnrollmentsInCourse (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/enrollments?` + buildOptions(options))
}
