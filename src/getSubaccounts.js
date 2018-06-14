import { fetchAll } from './internal/get'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getSubaccounts (accountId) { return fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`) }
