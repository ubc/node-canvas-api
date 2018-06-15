import fetchAll from './internal/fetchAll'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Get all courses used by user
 * @param {Number} userId the user id.
 * @return {Promise} A promise that resolves to a User object: https://canvas.instructure.com/doc/api/users.html#User
*/

export default function getCoursesByUser (userId) {
  return fetchAll(canvasDomain + `/users/${userId}/courses`)
}
