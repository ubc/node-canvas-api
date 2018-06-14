import deleteRequest from './internal/del'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function deleteCustomGradebookColumn (courseId, gradebookColumnId) {
  return deleteRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${gradebookColumnId}`)
}
