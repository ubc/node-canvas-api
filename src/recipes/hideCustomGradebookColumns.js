const { getCustomGradeBookColumns } = require('../requests/get')
const { hideCustomGradebookColumn } = require('../requests/put')

const hideCustomGradebookColumns = async (courseId, ...gradebookColumnNames) => {
  const customGradebookColumns = await getCustomGradeBookColumns(courseId)
  const matchingGradebookColumnID = customGradebookColumns
    .filter(({ title }) => (gradebookColumnNames.includes(title)))
    .map(gradebookColumn => gradebookColumn.id)
  const response = Promise.all(matchingGradebookColumnID.map(gradebookId => hideCustomGradebookColumn(courseId, gradebookId)))
  return response
}

module.exports = hideCustomGradebookColumns
