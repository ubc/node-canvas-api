var fetch = require('./internal/fetch');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves information about the user
 * @return {Promise} A promise that resolves to a User object: https://canvas.instructure.com/doc/api/users.html#User
*/

function getSelf() {
  return fetch(canvasDomain + '/users/self');
}
module.exports = getSelf;