import { fetchAll, canvasDomain } from './internal/get'

export default function getUsersInAccount (accountId) {
  return fetchAll(canvasDomain + `/accounts/${accountId}/users?`)
}
