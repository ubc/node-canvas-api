import getOptions from './internal/getOptions.js'
import getUsersInCourse from './getUsersInCourse.js'
import createCustomGradebookColumn from './createCustomGradebookColumn.js'
import putStudentNumberInGradeColumn from './putStudentNumberInGradeColumn.js'

/**
 * Create gradebook with default title 'Student Number' and default column position 1 and
 * add student numbers to this column
 * @param {Number} courseId the course ID of the target course.
 * @param {String} columnTitle the title of the custom column.
 * @param {Number} columnPosition the position of the column, starting from left to right, indexed at 1.
 * @return {Promise} A promise that resolves to a list of CustomColumn object:
 * https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */

const putStudentNumbersInGradebook = async (courseId, columnTitle = 'Student Number', columnPosition = 1) => {
  const customGradeBook = await createCustomGradebookColumn(courseId, columnTitle, columnPosition)
  const customGradeBookId = customGradeBook.id
  const studentObjs = await getUsersInCourse(courseId, getOptions.users.enrollmentType.student)
  const customGradebookResponse = Promise.all(
    studentObjs.map(({ id, sis_user_id }) =>
      putStudentNumberInGradeColumn(courseId, customGradeBookId, id, { 'column_data[content]': sis_user_id }))
  )
  return customGradebookResponse
}

export default putStudentNumbersInGradebook
