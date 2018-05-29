const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')
const get = require('./src/requests/get')
const put = require('./src/requests/put')
const options = require('./src/options')
const { coursesInTerm, getDept, getSection, getID, getModules, copyCourseNames, copyDept, copySection, copyID, eraseAll } = require('./src/googleSheets/initiateCourseCopy')
const { authorize, editFile } = require('./src/googleSheets/authentication')
const initialize = require('./src/googleSheets/populateSpreadsheet')

// const courseID = // put the course ID here
// const gradebookID = // put the gradebook ID heer

// Populate Name of Course
const populateName = async () => {
  const termCourses = await coursesInTerm(15, 2018, 'S1')
  editFile('./src/googleSheets/client_secret.json', copyCourseNames, termCourses)
}

// Populate Dept
const populateDept = async () => {
  const coursesDept = await getDept(15, 2018, 'S1')
  editFile('./src/googleSheets/client_secret.json', copyDept, coursesDept)
}

// Populate Section
const populateSection = async () => {
  const coursesSection = await getSection(15, 2018, 'S1')
  editFile('./src/googleSheets/client_secret.json', copySection, coursesSection)
}

// Populate Section
const populateID = async () => {
  const courseID = await getID(15, 2018, 'S1')
  editFile('./src/googleSheets/client_secret.json', copyID, courseID)
}

// run this code to clear all data in spreadsheet
// editFile('./src/googleSheets/client_secret.json', eraseAll, 'Sheet1')

// run this code to initialize the spreadsheet
// editFile('./src/googleSheets/client_secret.json', initialize, ['Name of Course', 'Dept', 'Section', 'ID', 'Destination ID', 'Quizzes', 'Modules'])

// populateName()
// populateDept()
// populateSection()
// populateID()

getModules(15, 2018, 'S1').then(x => console.log(x))
