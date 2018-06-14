import getCustomGradeBookColumns from './getCustomGradeBookColumns'
import hideCustomGradebookColumn from './hideCustomGradebookColumn'

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
