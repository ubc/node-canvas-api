var fetchAll = require('./internal/fetchAll');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all users under an Account
 * @param {Number} accountId the account id.
 * @return {Promise} A promise that resolves to a list of User objects: https://canvas.instructure.com/doc/api/users.html#User
 */

function getUsersInAccount(accountId) {
  return fetchAll(canvasDomain + `/accounts/${accountId}/users?`);
}
module.exports = getUsersInAccount;