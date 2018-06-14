import { getSubaccounts, getCourses } from '../requests/get'
import { getOptions } from '../options'
import { flatten } from 'ramda'

const getAllCoursesInAccount = async (accountId, ...options) => {
  const accounts = await getSubaccounts(accountId)
  const courses = await Promise.all(
    accounts.map(({ id }) => getCourses(id, getOptions.courses.include.term, ...options))
  )
  return flatten(courses)
}

export default getAllCoursesInAccount
