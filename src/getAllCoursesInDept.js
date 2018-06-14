import getDeptIdsInAccount from './getDeptIdsInAccount'
import { getOptions } from './internal/options'
import { getCourses } from './interal/get'

const getAllCoursesInDept = async (accountId, deptName) => {
  const deptIds = await getDeptIdsInAccount(accountId)
  const idOfDept = deptIds.find(dept => dept.name === deptName).id
  const coursesInDept = getCourses(idOfDept, getOptions.courses.include.term)
  return coursesInDept
}

export default getAllCoursesInDept
