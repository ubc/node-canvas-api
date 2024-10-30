import getSubaccounts from './getSubaccounts.js'
import getCourses from './getCourses.js'
import getOptions from './internal/getOptions.js'
import { flatten } from 'ramda'

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
  return flatten(courses)
}

export default getAllCoursesInAccount
