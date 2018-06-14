import request from 'request-promise'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN
const token = process.env.CANVAS_API_TOKEN

const putRequest = (url, body) => request({
  'method': 'PUT',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response).catch(err => console.log(err.message, err.options.form, err.options.uri))

export function putStudentNumberInGradeColumn (courseId, gradebookColumnId, studentId, body) { return putRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${gradebookColumnId}/data/${studentId}`, body) }
export function hideCustomGradebookColumn (courseId, columnId) {
  return putRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${columnId}`, {
    'column[hidden]': true
  })
}
export function showCustomGradebookColumn (courseId, columnId) {
  return putRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${columnId}`, {
    'column[hidden]': false
  })
}
