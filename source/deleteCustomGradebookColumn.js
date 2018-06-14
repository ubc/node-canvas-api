import deleteRequest from './internal/del'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Creates course
 * @param {Number} courseId the course ID of the target course.
 * @return {Promise} A CustomColumn objects: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */

export default function deleteCustomGradebookColumn (courseId, gradebookColumnId) {
  return deleteRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${gradebookColumnId}`)
}
