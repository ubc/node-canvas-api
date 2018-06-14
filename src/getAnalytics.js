import { fetchAll } from './internal/get'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getAnalytics (accountId) { return fetchAll(canvasDomain + `/accounts/${accountId}/analytics/current/activity`) }