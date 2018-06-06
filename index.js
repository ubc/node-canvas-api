const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')
const get = require('./src/requests/get')
const put = require('./src/requests/put')
const options = require('./src/options')
const { coursesInTerm, getDept, getSection, getID, getModules, copyCourseNames, copyDept, copySection, copyID, eraseAll } = require('./src/googleSheets/initiateCourseCopy')
const { authorize, editFile } = require('./src/googleSheets/authentication')
const initialize = require('./src/googleSheets/populateSpreadsheet')
const getAllCoursesInTerm = require('./src/recipes/getAllCoursesInTerm')

// const courseID = // put the course ID here
// const gradebookID = // put the gradebook ID heer

const client_secret = './src/googleSheets/client_secret.json'

// getModules(15, 2018, 'S1').then(x => console.log(x))

const termCoursePopulate = async () => {
  const termCourses = await getAllCoursesInTerm(15, 2018, 'S1')
  const courses = coursesInTerm(termCourses)
  const dept = getDept(courses)
  const section = getSection(courses)
  const id = getID(termCourses)
  editFile(client_secret, initialize, ['Name of Course', 'Dept', 'Section', 'ID', 'Destination ID', 'Quizzes', 'Modules'])
  editFile(client_secret, copyCourseNames, courses)
  editFile(client_secret, copyDept, dept)
  editFile(client_secret, copySection, section)
  editFile(client_secret, copyID, id)
}

const mainFunction = async () => {
  await editFile(client_secret, eraseAll, 'Sheet1')
  termCoursePopulate()
}

mainFunction()
