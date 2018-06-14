import { fetchAll } from './internal/get'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getProgress (id) { return fetchAll(canvasDomain + `/progress/${id}`) }
