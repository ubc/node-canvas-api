import { fetchAll } from './internal/get'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getUsersInAccount (accountId) { return fetchAll(canvasDomain + `/accounts/${accountId}/users?`) }
