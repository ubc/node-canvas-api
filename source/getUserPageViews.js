import fetchAll from './internal/fetchAll'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function getUserPageViews (userId) {
  return fetchAll(canvasDomain + `/users/${userId}/page_views`)
}
