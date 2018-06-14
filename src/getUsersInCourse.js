import { fetchAll } from './internal/get'
import { buildOptions } from './internal/util'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getUsersInCourse (courseId, ...options) { return fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options)) }
