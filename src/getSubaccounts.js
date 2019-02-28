var fetchAll = require('./internal/fetchAll');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all subaccounts in an account
 * @param {Number} accountId the course id.
 * @return {Promise} A promise that resolves to a Account object: https://canvas.instructure.com/doc/api/accounts.html#Account
 */

function getSubaccounts(accountId) {
  return fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`);
}
module.exports = getSubaccounts;