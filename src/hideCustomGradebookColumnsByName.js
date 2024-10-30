import getCustomGradeBookColumns from './getCustomGradeBookColumns.js'
import hideCustomGradebookColumn from './hideCustomGradebookColumn.js'

/**
 * Hide Custom Gradebook Column by Name
 * @param {Number} courseId the course ID of the target course.
 * @param {Array} gradebookColumnNames the title of the custom column.
 * @return {Promise} A promise that resolves to a list of CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */

const hideCustomGradebookColumnsByName = async (courseId, ...gradebookColumnNames) => {
  const customGradebookColumns = await getCustomGradeBookColumns(courseId)
  const matchingGradebookColumnID = customGradebookColumns
    .filter(({ title }) => (gradebookColumnNames.includes(title)))
    .map(gradebookColumn => gradebookColumn.id)
  const response = Promise.all(
    matchingGradebookColumnID.map(gradebookId =>
      hideCustomGradebookColumn(courseId, gradebookId))
  )
  return response
}

export default hideCustomGradebookColumnsByName
