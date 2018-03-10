const { getCustomGradeBookColumns } = require('../requests/get')
const { deleteCustomGradebookColumn } = require('../requests/del')

const deleteAllCustomGradebookColumns = async courseId => {
  const allCustomGradebookColumns = await getCustomGradeBookColumns(courseId)
  const deleteAll = Promise.all(allCustomGradebookColumns.map(({ id }) => deleteCustomGradebookColumn(courseId, id)))
  return deleteAll
}

module.exports = deleteAllCustomGradebookColumns
