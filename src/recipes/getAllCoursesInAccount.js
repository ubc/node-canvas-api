const { getSubaccounts, getCourses } = require('../requests/get')
const { getOptions } = require('../options')
const { flatten } = require('ramda')

const getAllCoursesInAccount = async (accountId, ...options) => {
  const accounts = await getSubaccounts(accountId)
  const courses = await Promise.all(
    accounts.map(({ id }) => getCourses(id, getOptions.courses.include.term, ...options))
  )
  return flatten(courses)
}

module.exports = getAllCoursesInAccount
