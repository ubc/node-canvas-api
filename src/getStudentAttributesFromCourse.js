import { getUsersInCourse } from './internal/get'
import { getOptions } from './internal/options'

const getStudentNamesFromCourse = async courseId => {
  const studentObjs = await getUsersInCourse(courseId,
    getOptions.users.enrollmentType.student
  )
  const studentNames = studentObjs.map(student => student.name)
  return studentNames
}

// emails don't appear to be working anymore...
const getStudentEmailsFromCourse = async courseId => {
  const studentObjs = await getUsersInCourse(courseId,
    getOptions.users.enrollmentType.student,
    getOptions.users.include.email,
    getOptions.users.enrollmentState.active
  )
  const studentEmails = studentObjs.map(student => student.email)
  return studentEmails
}

const getStudentNumbersFromCourse = async courseId => {
  const studentObjs = await getUsersInCourse(courseId,
    getOptions.users.enrollmentType.student,
    getOptions.users.enrollmentState.active
  )
  const studentNumbers = studentObjs.map(student => student.sis_user_id)
  return studentNumbers
}

// emails don't appear to be working anymore...
const getStudentNamesAndEmailsFromCourse = async courseId => {
  const studentObjs = await getUsersInCourse(courseId,
    getOptions.users.enrollmentType.student,
    getOptions.users.include.email,
    getOptions.users.enrollmentState.active
  )
  const studentNamesAndEmails = studentObjs
    .map(({ id, email }) => ({ id, email }))
  return studentNamesAndEmails
}

// emails don't appear to be working anymore...
const getStudentNumbersAndEmailsFromCourse = async courseId => {
  const studentObjs = await getUsersInCourse(courseId,
    getOptions.users.enrollmentType.student,
    getOptions.users.include.email,
    getOptions.users.enrollmentState.active
  )
  console.log(studentObjs)
  const studentNumbersAndEmails = studentObjs
    .map(({ sis_user_id, email }) => ({ sis_user_id, email }))
  return studentNumbersAndEmails
}

export default {
  getStudentNamesFromCourse,
  getStudentEmailsFromCourse,
  getStudentNumbersFromCourse,
  getStudentNamesAndEmailsFromCourse,
  getStudentNumbersAndEmailsFromCourse
}
