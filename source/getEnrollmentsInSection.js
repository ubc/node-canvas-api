import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all enrollments in section
 * @param {Number} sectionId the section id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Enrollment objects: https://canvas.instructure.com/doc/api/enrollments.html#method.enrollments_api.index
 */

export default function getEnrollmentsInSection (sectionId, ...options) {
  return fetchAll(canvasDomain + `/sections/${sectionId}/enrollments?` + buildOptions(options))
}
