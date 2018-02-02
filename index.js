const Bottleneck = require('bottleneck')
const putStudentNumbersInGradebook = require('./src/recipes/putStudentNumbersInGradebook')
const deleteAllCustomGradebookColumns = require('./src/recipes/deleteAllCustomGradebookColumns')
const { getStudentEmailsFromCourse, getStudentNamesFromCourse, getStudentNamesAndEmailsFromCourse, getStudentNumbersFromCourse, getStudentNumbersAndEmailsFromCourse } = require('./src/recipes/getStudentAttributesFromCourse')
const get = require('./src/requests/get')

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

// get.getUsersInCourse(3025).then(x => console.log(x))
getStudentNumbersAndEmailsFromCourse(3025).then(x => console.log(x))

// deleteAllCustomGradebookColumns(3025).then(x => console.log(x))
// putStudentNumbersInGradebook(3025, 'Student Number', 1)
