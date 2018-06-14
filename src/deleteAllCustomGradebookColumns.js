import { getCustomGradeBookColumns } from './getCustomGradeBookColumns'
import { deleteCustomGradebookColumn } from './deleteCustomGradebookColumn'

const deleteAllCustomGradebookColumns = async courseId => {
  const allCustomGradebookColumns = await getCustomGradeBookColumns(courseId)
  const deleteAll = Promise.all(allCustomGradebookColumns.map(({ id }) => deleteCustomGradebookColumn(courseId, id)))
  return deleteAll
}

export default deleteAllCustomGradebookColumns
