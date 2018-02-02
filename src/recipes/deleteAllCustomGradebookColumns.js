const { get, del } = require('../util')

const deleteAllCustomGradebookColumns = async courseId => {
  const allCustomGradebookColumsn = await get.getCustomGradeBookColumns(courseId)
  const deleteAll = Promise.all(allCustomGradebookColumsn.map(({ id }) => del.deleteCustomGradebookColumn(courseId, id)))
  return deleteAll
}

module.exports = deleteAllCustomGradebookColumns
