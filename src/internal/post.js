import request from 'request-promise'

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

export function createCourse (accountId, body) { return postRequest(canvasDomain + `/accounts/${accountId}/courses`, body) }
export function createCustomGradebookColumn (courseId, columnTitle, columnPosition) {
  return postRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns`, {
    'column[title]': columnTitle,
    'column[position]': columnPosition
  })
}
export function courseCopy (sourceCourseId, targetCourseId) {
  return postRequest(canvasDomain + `/courses/${targetCourseId}/content_migrations`, {
    'migration_type': 'course_copy_importer',
    'settings[source_course_id]': `${sourceCourseId}`
  })
}
