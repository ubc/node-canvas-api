import { deleteRequest, canvasDomain } from './internal/del'

export function deleteCustomGradebookColumn (courseId, gradebookColumnId) {
  return deleteRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${gradebookColumnId}`)
}
