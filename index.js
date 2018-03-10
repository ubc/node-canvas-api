const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')
const options = require('./src/options')

recipes.getAllCoursesInAccount(15)
  .then(courses => courses.filter(course => course.term.name.slice(0, 5) === '2018S'))
  .then(courses2018S => console.log(courses2018S))
