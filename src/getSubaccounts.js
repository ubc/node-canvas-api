import { fetchAll, canvasDomain } from './internal/get'

export default function getSubaccounts (accountId) {
  return fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`)
}
