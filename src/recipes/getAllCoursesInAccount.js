const { getSubaccounts, getCourses } = require('../requests/get')
const R = require('ramda')

const getAllCoursesInAccount = async (accountId, ...options) => {
  const accounts = await getSubaccounts(accountId)
  const courses = await Promise.all(
    accounts.map(({ id }) => getCourses(id, ...options))
  )
  return R.flatten(courses)
}

module.exports = getAllCoursesInAccount
