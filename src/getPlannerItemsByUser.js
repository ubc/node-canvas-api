var fetchAll = require('./internal/fetchAll');

var buildOptions = require('./internal/util');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Get the planner items for a user
 * @param {Number} userId the user id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to an array of planner items: https://canvas.instructure.com/doc/api/planner.html#method.planner.index
*/

function getPlannerItemsByUser(userId, ...options) {
  return fetchAll(canvasDomain + `/users/${userId}/planner/items?` + buildOptions(options));
}
module.exports = getPlannerItemsByUser;