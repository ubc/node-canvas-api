var getCustomGradeBookColumns = require('./getCustomGradeBookColumns');

var deleteCustomGradebookColumn = require('./deleteCustomGradebookColumn');

/**
 * Deletes all custom gradebook columns
 * @param {Number} courseId the course ID of the target course.
 * @return {Promise} A list of CustomColumn objects: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */

const deleteAllCustomGradebookColumns = async courseId => {
  const allCustomGradebookColumns = await getCustomGradeBookColumns(courseId);
  const deleteAll = Promise.all(allCustomGradebookColumns.map(({ id }) => deleteCustomGradebookColumn(courseId, id)));
  return deleteAll;
};

module.exports = deleteAllCustomGradebookColumns;