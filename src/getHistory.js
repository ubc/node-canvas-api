import fetchAll from './internal/fetchAll.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrives the recent history of the user: https://canvas.instructure.com/doc/api/history.html
 * @param {Number} userId the user id.
 * @return {Promise} A promise that resolves to an array of history events object: https://canvas.instructure.com/doc/api/history.html#HistoryEntry
 */

const getHistory = async (userId = 'self') => {
  return fetchAll(canvasDomain + `/users/${userId}/history`)
}

export default getHistory
