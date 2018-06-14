import { fetchAll, canvasDomain } from './internal/get'

export default function getCoursesByUser (userId) {
  return fetchAll(canvasDomain + `/users/${userId}/courses`)
}
