import { fetchAll, canvasDomain } from './internal/get'

export function getSubaccounts (accountId) { return fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`) }
