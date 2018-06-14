import { fetchAll, canvasDomain } from './internal/get'

export function getUsersInAccount (accountId) {
  return fetchAll(canvasDomain + `/accounts/${accountId}/users?`)
}
