const { getStudentNumbersAndEmailsFromCourse } = require('./src/recipes/getStudentAttributesFromCourse')
const putStudentNumbersInGradebook = require('./src/recipes/putStudentNumbersInGradebook')
const deleteAllCustomGradebookColumns = require('./src/recipes/deleteAllCustomGradebookColumns')

putStudentNumbersInGradebook(, 'student number', 1)
  .then(x => console.log(x))
