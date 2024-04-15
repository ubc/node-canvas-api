var postRequest = require('./internal/post');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Creates group
 * @param {Number} accountId the account that the user will be created in.
 * @param {Number} body the object that contains the request parameters as indicated here:
 * https://canvas.instructure.com/doc/api/users.html#method.users.create
 * @return {Promise} A User object: https://canvas.instructure.com/doc/api/users.html#User
 */

function createUser(accountId, body) {
  return postRequest(canvasDomain + `/accounts/${accountId}/users`, body);
}
module.exports = createUser;