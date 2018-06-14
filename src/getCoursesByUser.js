import { fetchAll, canvasDomain } from './internal/get'

export function getCoursesByUser (userId) { return fetchAll(canvasDomain + `/users/${userId}/courses`) }