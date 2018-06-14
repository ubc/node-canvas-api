import { getCustomGradeBookColumns } from '../requests/get'
import { deleteCustomGradebookColumn } from '../requests/del'

const deleteAllCustomGradebookColumns = async courseId => {
  const allCustomGradebookColumns = await getCustomGradeBookColumns(courseId)
  const deleteAll = Promise.all(allCustomGradebookColumns.map(({ id }) => deleteCustomGradebookColumn(courseId, id)))
  return deleteAll
}

export default deleteAllCustomGradebookColumns
