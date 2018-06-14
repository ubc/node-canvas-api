import { getCustomGradeBookColumns } from './internal/get'
import { showCustomGradebookColumn } from './internal/put'

const showCustomGradebookColumns = async (courseId, ...gradebookColumnNames) => {
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

export default showCustomGradebookColumns
