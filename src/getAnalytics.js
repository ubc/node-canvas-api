import { fetchAll, canvasDomain } from './internal/get'

export function getAnalytics (accountId) {
  return fetchAll(canvasDomain + `/accounts/${accountId}/analytics/current/activity`)
}
