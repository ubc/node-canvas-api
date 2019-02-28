var fetchAll = require('./internal/fetchAll');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Get Custom GradeBook Columns
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */

function getCustomGradeBookColumns(courseId) {
  return fetchAll(canvasDomain + `/courses/${courseId}/custom_gradebook_columns?include_hidden=true`);
}
module.exports = getCustomGradeBookColumns;