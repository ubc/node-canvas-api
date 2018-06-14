import { fetchAll } from './internal/get'
import { buildOptions } from './internal/util'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getCourses (deptId, ...options) { return fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options)) }