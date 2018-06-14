import { fetchAll, canvasDomain } from './internal/get'

export default function getUserPageViews (userId) {
  return fetchAll(canvasDomain + `/users/${userId}/page_views`)
}
