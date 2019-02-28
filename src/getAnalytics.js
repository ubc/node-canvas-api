var fetchAll = require('./internal/fetchAll');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves activity analytics for specified account.
 * @param {Number} accountId the account id.
 * @return {Promise} A promise that resolves to a list of Activity objects
 */

function getAnalytics(accountId) {
  return fetchAll(canvasDomain + `/accounts/${accountId}/analytics/current/activity`);
}
module.exports = getAnalytics;