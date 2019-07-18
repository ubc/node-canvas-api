var fetch = require('./internal/fetch');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves an outcome
 * @param {Number} outcomeId the outcome id.
 * @return {Promise} A promise that resolves to an Outcome object: https://canvas.instructure.com/doc/api/outcomes.html
*/

function getOutcome(outcomeId) {
  return fetch(canvasDomain + `/outcomes/${outcomeId}`);
}
module.exports = getOutcome;