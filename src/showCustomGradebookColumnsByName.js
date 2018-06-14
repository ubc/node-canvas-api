import getCustomGradeBookColumns from './getCustomGradeBookColumns'
import showCustomGradebookColumn from './showCustomGradebookColumn'

const showCustomGradebookColumnsByName = async (courseId, ...gradebookColumnNames) => {
  const customGradebookColumns = await getCustomGradeBookColumns(courseId)
  const matchingGradebookColumnID = customGradebookColumns
    .filter(({ title }) => (gradebookColumnNames.includes(title)))
    .map(gradebookColumn => gradebookColumn.id)
  const response = Promise.all(
    matchingGradebookColumnID.map(gradebookId =>
      showCustomGradebookColumn(courseId, gradebookId))
  )
  return response
}

export default showCustomGradebookColumnsByName
