import getDeptIdsInAccount from './getDeptIdsInAccount.js'
import getOptions from './internal/getOptions.js'
import getCourses from './getCourses.js'

/**
 * Retrieves every course in an account.
 * @param {Number} accountId the account id.
 * @param {String} deptName name of the dept (APBI, FNH, etc).
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Course objects: https://canvas.instructure.com/doc/api/courses.html#Course
 */

const getAllCoursesInDept = async (accountId, deptName, ...options) => {
  const deptIds = await getDeptIdsInAccount(accountId)
  const idOfDept = deptIds.find(dept => dept.name === deptName).id
  const coursesInDept = getCourses(idOfDept, getOptions.courses.include.term, ...options)
  return coursesInDept
}

export default getAllCoursesInDept
