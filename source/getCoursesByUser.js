import fetchAll from './internal/fetchAll'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function getCoursesByUser (userId) {
  return fetchAll(canvasDomain + `/users/${userId}/courses`)
}
