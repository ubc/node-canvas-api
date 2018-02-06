const request = require('request-promise')

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN
const token = process.env.CANVAS_API_TOKEN

const postRequest = (url, body) => request({
  'method': 'POST',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response).catch(err => console.log(err))

module.exports = {
  createCourse: (accountId, body) =>
    postRequest(canvasDomain + `/accounts/${accountId}/courses`, body),
  createCustomGradebookColumn: (courseId, columnTitle, columnPosition) =>
    postRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns`, {
      'column[title]': columnTitle,
      'column[position]': columnPosition
    })
}
