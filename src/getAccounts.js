import { fetchAll, canvasDomain } from './internal/get'

export function getAccounts () {
  return fetchAll(canvasDomain + `/accounts`)
}
