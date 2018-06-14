import fetchAll from './internal/fetchAll'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function getAccounts () {
  return fetchAll(canvasDomain + `/accounts`)
}
