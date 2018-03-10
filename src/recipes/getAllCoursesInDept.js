const getDeptIdsInAccount = require('./getDeptIdsInAccount')
const { getOptions } = require('../options')
const { getCourses } = require('../requests/get')

const getAllCoursesInDept = async (accountId, deptName) => {
  const deptIds = await getDeptIdsInAccount(accountId)
  const idOfDept = deptIds.find(dept => dept.name === deptName).id
  const coursesInDept = getCourses(idOfDept, getOptions.courses.include.term)
  return coursesInDept
}

module.exports = getAllCoursesInDept
