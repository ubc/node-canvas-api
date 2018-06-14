import { fetchAll } from './internal/get'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getAccounts () { return fetchAll(canvasDomain + `/accounts`) }
