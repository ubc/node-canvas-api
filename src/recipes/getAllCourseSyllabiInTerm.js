const getAllCoursesInTerm = require('./getAllCoursesInTerm')
const get = require('../requests/get')

const getAllCourseSyllabiInTerm = async (accountId, year, term) => {
  const courses = await getAllCoursesInTerm(accountId, year, term)
  const ids = courses.map(({ id }) => id)
  const syllabi = await Promise.all(
    ids.map(id => get.getSyllabusOfCourse(id))
  )
  return syllabi
}

module.exports = getAllCourseSyllabiInTerm
