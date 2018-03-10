const getDeptIds = require('./getDeptIds')
const { getCourses } = require('../requests/get')

const getAllCoursesInDept = async (accountId, deptName) => {
  const deptIds = await getDeptIds(accountId)
  const idOfDept = deptIds.find(dept => dept.name === deptName).id
  const coursesInDept = getCourses(idOfDept)
  return coursesInDept
}

module.exports = getAllCoursesInDept
