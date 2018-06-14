import { putRequest, canvasDomain } from './internal/put'

export function hideCustomGradebookColumn (courseId, columnId) {
  return putRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${columnId}`, {
    'column[hidden]': true
  })
}
