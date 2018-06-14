import { deleteRequest, canvasDomain } from './internal/del'

export default function deleteCustomGradebookColumn (courseId, gradebookColumnId) {
  return deleteRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${gradebookColumnId}`)
}
