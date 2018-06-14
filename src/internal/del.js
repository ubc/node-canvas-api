import request from 'request-promise'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN
const token = process.env.CANVAS_API_TOKEN

const deleteRequest = (url, body) => request({
  'method': 'DELETE',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response)
  .catch(err => console.log(err))

export { deleteRequest, canvasDomain }

export function deleteCustomGradebookColumn (courseId, gradebookColumnId) {
  return deleteRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${gradebookColumnId}`)
}
