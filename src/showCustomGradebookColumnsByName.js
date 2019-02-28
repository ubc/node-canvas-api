var getCustomGradeBookColumns = require('./getCustomGradeBookColumns');

var showCustomGradebookColumn = require('./showCustomGradebookColumn');

/**
 * Show Custom Gradebook Column by Name
 * @param {Number} courseId the course ID of the target course.
 * @param {Array} gradebookColumnNames the title of the custom column.
 * @return {Promise} A promise that resolves to a list of CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */

const showCustomGradebookColumnsByName = async (courseId, ...gradebookColumnNames) => {
  const customGradebookColumns = await getCustomGradeBookColumns(courseId);
  const matchingGradebookColumnID = customGradebookColumns.filter(({ title }) => gradebookColumnNames.includes(title)).map(gradebookColumn => gradebookColumn.id);
  const response = Promise.all(matchingGradebookColumnID.map(gradebookId => showCustomGradebookColumn(courseId, gradebookId)));
  return response;
};

module.exports = showCustomGradebookColumnsByName;