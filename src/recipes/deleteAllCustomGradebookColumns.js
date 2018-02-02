const get = require('../requests/get')
const del = require('../requests/del')

const deleteAllCustomGradebookColumns = async courseId => {
  const allCustomGradebookColumns = await get.getCustomGradeBookColumns(courseId)
  const deleteAll = Promise.all(allCustomGradebookColumns.map(({ id }) => del.deleteCustomGradebookColumn(courseId, id)))
  return deleteAll
}

module.exports = deleteAllCustomGradebookColumns
