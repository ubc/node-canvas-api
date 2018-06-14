import getSubaccounts from './getSubaccounts'
import getCourses from './getCourses'
import getOptions from './internal/getOptions'
import R from 'ramda'

const getAllCoursesInAccount = async (accountId, ...options) => {
  const accounts = await getSubaccounts(accountId)
  const courses = await Promise.all(
    accounts.map(({ id }) => getCourses(id, getOptions.courses.include.term, ...options))
  )
  return R.flatten(courses)
}

export default getAllCoursesInAccount
