var fetchAll = require('./internal/fetchAll');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Returns all account ids 
 * @return {Promise} A list of account objects: https://canvas.instructure.com/doc/api/accounts.html#Account
 */

function getAccounts() {
  return fetchAll(canvasDomain + `/accounts`);
}
module.exports = getAccounts;