const Bottleneck = require('bottleneck')
const { getAllEmailsInCourse, getAllNamesFromCourseId, getStudentObjsFromCourseId } = require('./src/recipes/getAllEmailsInCourse')
const { post, put } = require('./src/util')

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

getStudentObjsFromCourseId(3025)
  .then(students => students.map(({ id, sis_user_id }) => put.studentNumberInGradeColumn(3025, 197, id, { 'column_data[content]': sis_user_id })))

// . map(({ id, sis_user_id }) => put.studentNumberInGradeColumn(3025, 197, id, { 'column_data[content]': sis_user_id })))

// limiter.schedule(() => post.createCustomGradebookColumn(3025, {
//   'column[title]': 'Student Number',
//   'column[position]': 1
// }))
