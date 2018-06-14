import request from 'request-promise'
import { buildOptions } from '../util'
import { getOptions } from './internal/get'
import linkparser from 'parse-link-header'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN
const token = process.env.CANVAS_API_TOKEN

const requestObj = url => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
})

const fetchAll = (url, result = []) =>
  request(requestObj(url))
    .then(response => {
      result = [...result, ...response.body]
      const links = linkparser(response.headers.link)
      return links.next ? fetchAll(links.next.url, result) : result
    }).catch(err => console.log(err))

const fetch = url => request(requestObj(url))
  .then(response => response.body)

export { fetchAll, fetch }

export function getAccounts () { return fetchAll(canvasDomain + `/accounts`) }
export function getSubaccounts (accountId) { return fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`) }
export function getUsersInAccount (accountId) { return fetchAll(canvasDomain + `/accounts/${accountId}/users?`) }
export function getCourses (deptId, ...options) { return fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options)) }
export function getUsersInCourse (courseId, ...options) { return fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options)) }
export function getCoursesByUser (userId) { return fetchAll(canvasDomain + `/users/${userId}/courses`) }
export function getCustomGradeBookColumns (courseId) { return fetchAll(canvasDomain + `/courses/${courseId}/custom_gradebook_columns?include_hidden=true`) }
export function getProgress (id) { return fetchAll(canvasDomain + `/progress/${id}`) }
export function getUserPageViews (userId) { return fetchAll(canvasDomain + `/users/${userId}/page_views`) }
export function getAnalytics (accountId) { return fetchAll(canvasDomain + `/accounts/${accountId}/analytics/current/activity`) }
export function getAssignments (courseId, ...options) { return fetchAll(canvasDomain + `/courses/${courseId}/assignments?` + buildOptions(options)) }
export function getSyllabusOfCourse (courseId) {
  return fetch(canvasDomain + `/courses/${courseId}?` + getOptions.courses.include.syllabus_body)
    .then(course => ({
      courseCode: course.course_code,
      courseId,
      syllabus: course.syllabus_body
    }))
}
