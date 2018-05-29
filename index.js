const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')
const get = require('./src/requests/get')
const put = require('./src/requests/put')
const options = require('./src/options')
const { coursesInTerm, copyCourseNames, eraseAll } = require('./src/googleSheets/initiateCourseCopy')
const { authorize, editFile, initialize } = require('./src/googleSheets/authentication')

// const courseID = // put the course ID here
// const gradebookID = // put the gradebook ID heer

const courses = async () => {
  const termCourses = await coursesInTerm(15, 2018, 'W1')
  editFile('./src/googleSheets/client_secret.json', copyCourseNames, termCourses)
}

// run this code to clear all data in spreadsheet
// editFile('./src/googleSheets/client_secret.json', eraseAll, 'Sheet1')

// run this code to initialize the spreadsheet
// editFile('./src/googleSheets/client_secret.json', initialize, ['Name of Course', 'Dept', 'Section', 'ID', 'Destination ID', 'Quizzes', 'Modules'])

courses()
