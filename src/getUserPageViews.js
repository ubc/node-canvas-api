import { fetchAll } from './internal/get'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getUserPageViews (userId) { return fetchAll(canvasDomain + `/users/${userId}/page_views`) }