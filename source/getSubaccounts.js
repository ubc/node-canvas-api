import fetchAll from './internal/fetchAll'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function getSubaccounts (accountId) {
  return fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`)
}
