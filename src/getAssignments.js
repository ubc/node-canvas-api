import { fetchAll } from './internal/get'
import { buildOptions } from './internal/util'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getAssignments (courseId, ...options) { return fetchAll(canvasDomain + `/courses/${courseId}/assignments?` + buildOptions(options)) }
