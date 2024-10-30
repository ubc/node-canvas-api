import fetchAll from './internal/fetchAll.js'
import buildOptions from './internal/util.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Get the planner items for a user
 * @param {Number} userId the user id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to an array of planner items: https://canvas.instructure.com/doc/api/planner.html#method.planner.index
*/

export default function getPlannerItemsByUser (userId, ...options) {
  return fetchAll(canvasDomain + `/users/${userId}/planner/items?` + buildOptions(options))
}
