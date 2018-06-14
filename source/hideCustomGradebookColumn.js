import putRequest from './internal/put'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function hideCustomGradebookColumn (courseId, columnId) {
  return putRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${columnId}`, {
    'column[hidden]': true
  })
}
