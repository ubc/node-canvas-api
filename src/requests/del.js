const request = require('request-promise')

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

module.exports = {
  deleteCustomGradebookColumn: (courseId, gradebookColumnId) =>
    deleteRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${gradebookColumnId}`)
}
