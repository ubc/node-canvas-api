const putStudentNumbersInGradebook = require('./src/recipes/putStudentNumbersInGradebook')

// modify the CHANGE_ME to a Canvas course id.
putStudentNumbersInGradebook(, 'Student Number', 1)
  .then(response => console.log(response))
