var deleteRequest = require('./internal/del');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Creates course
 * @param {Number} courseId the course ID of the target course.
 * @return {Promise} A CustomColumn objects: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */

function deleteCustomGradebookColumn(courseId, gradebookColumnId) {
  return deleteRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${gradebookColumnId}`);
}
module.exports = deleteCustomGradebookColumn;