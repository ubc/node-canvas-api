const Bottleneck = require('bottleneck')
const putStudentNumbersInGradebook = require('./src/recipes/putStudentNumbersInGradebook')
const deleteAllCustomGradebookColumns = require('./src/recipes/deleteAllCustomGradebookColumns')

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

// deleteAllCustomGradebookColumns(3025).then(x => console.log(x))
putStudentNumbersInGradebook(3025, 'Student Number', 1)
