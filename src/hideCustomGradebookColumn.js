var putRequest = require('./internal/put');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Hide Custom Gradebook Column by Column Id
 * @param {Number} courseId the dept id.
 * @param {Number} columnId an array of options to include.
 * @return {Promise} A promise that resolves to a CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
*/

function hideCustomGradebookColumn(courseId, columnId) {
  return putRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${columnId}`, {
    'column[hidden]': true
  });
}
module.exports = hideCustomGradebookColumn;