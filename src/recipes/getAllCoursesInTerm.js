import getAllCoursesInAccount from './getAllCoursesInAccount'

const getAllCoursesInTerm = async (accountId, year, term) => {
  const courses = await getAllCoursesInAccount(accountId)
  return courses.filter(course => course.term.name === year + term)
}

export default getAllCoursesInTerm
