const getAllCoursesInTerm = require('./getAllCoursesInTerm')
const get = require('../requests/get')

/**
 * Returns the syllabi of all courses contained under an Account, for the specified year/term.
 * If a course does not have a syllabus defined, the syllabus_body will have null.
 * @param {Number} accountId the account ID for Canvas
 * @param {Number} year the year from which the syllabi should be pulled
 * @param {Number} term the term from which the syllabi should be pulled
 * @return {Promise} A promise that resolves to an array of course objects, with syllabus
 */

const getAllCourseSyllabiInTerm = async (accountId, year, term) => {
  const courses = await getAllCoursesInTerm(accountId, year, term)
  const ids = courses.map(({ id }) => id)
  const syllabi = await Promise.all(
    ids.map(id => get.getSyllabusOfCourse(id))
  )
  return syllabi
}

module.exports = getAllCourseSyllabiInTerm
