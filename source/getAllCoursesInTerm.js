import getAllCoursesInAccount from './getAllCoursesInAccount'

/**
 * Retrieves every course for a specified year/term.
 * @param {Number} accountId the account id.
 * @param {Number} year the year (2017, 2018, etc).
 * @param {Number} term the term ('W1', 'W2', 'S1', etc).
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Course objects: https://canvas.instructure.com/doc/api/courses.html#Course
 */

const getAllCoursesInTerm = async (accountId, year, term, ...options) => {
  const courses = await getAllCoursesInAccount(accountId, ...options)
  return courses.filter(course => course.term.name === year + term)
}

export default getAllCoursesInTerm
