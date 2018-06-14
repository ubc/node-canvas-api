import getSubaccounts from './getSubaccounts'
import getCourses from './getCourses'
import getOptions from './internal/getOptions'
import R from 'ramda'

/**
 * Retrieves every course in an account.
 * @param {Number} accountId the account id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Course objects: https://canvas.instructure.com/doc/api/courses.html#Course
 */

const getAllCoursesInAccount = async (accountId, ...options) => {
  const accounts = await getSubaccounts(accountId)
  const courses = await Promise.all(
    accounts.map(({ id }) => getCourses(id, getOptions.courses.include.term, ...options))
  )
  return R.flatten(courses)
}

export default getAllCoursesInAccount
