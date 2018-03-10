const { getStudentNumbersAndEmailsFromCourse } = require('./src/recipes/getStudentAttributesFromCourse')
const putStudentNumbersInGradebook = require('./src/recipes/putStudentNumbersInGradebook')
const deleteAllCustomGradebookColumns = require('./src/recipes/deleteAllCustomGradebookColumns')
const getAllCoursesInAccount = require('./src/recipes/getAllCoursesInAccount')
const { getSubaccounts } = require('./src/requests/get')
const copyCourseContent = require('./src/recipes/copyCourseContent')

// getAllCoursesInAccount(15)
//   .then(x => console.log(x))

// getSubaccounts(15)
//   .then(x => console.log(x))
copyCourseContent(270, 9484).then(res => console.log(res))
