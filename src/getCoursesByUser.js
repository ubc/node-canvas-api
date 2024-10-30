import fetchAll from './internal/fetchAll.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Get all courses a user is enrolled in
 * @param {Number} userId the user id.
 * @return {Promise} A promise that resolves to an array of Course object: https://canvas.instructure.com/doc/api/courses.html
*/

export default function getCoursesByUser (userId) {
  return fetchAll(canvasDomain + `/users/${userId}/courses`)
}
