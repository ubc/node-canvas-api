import { fetchAll, canvasDomain } from './internal/get'

export default function getAccounts () {
  return fetchAll(canvasDomain + `/accounts`)
}
