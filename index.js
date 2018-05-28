const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')
const get = require('./src/requests/get')
const put = require('./src/requests/put')
const options = require('./src/options')
const coursesInTerm = require('./src/googleSheets/initiateCourseCopy')

// const courseID = // put the course ID here
// const gradebookID = // put the gradebook ID heer

coursesInTerm(15, 2018, 'W1').then(x => console.log(x))

// get.getCustomGradeBookColumns(courseID)
//   .then(x => console.log(x))

// put.hideCustomGradebookColumn(courseID, gradebookID)
//   .then(x => console.log(x))
