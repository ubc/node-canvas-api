import fetchAll from './internal/fetchAll'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves every course in an account.
 * @param {Number} accountId the account id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Course objects: https://canvas.instructure.com/doc/api/courses.html#Course
 */

export default function getAnalytics (accountId) {
  return fetchAll(canvasDomain + `/accounts/${accountId}/analytics/current/activity`)
}
