var putRequest = require('./internal/put');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Show custom gradebook column that was hidden
 * @param {Number} courseId the course ID of the target course.
 * @param {Number} columnId the position of the column, starting from left to right, indexed at 1.
 * @return {Promise} A promise that resolves to a CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */

function showCustomGradebookColumn(courseId, columnId) {
  return putRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${columnId}`, {
    'column[hidden]': false
  });
}
module.exports = showCustomGradebookColumn;