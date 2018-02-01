const Bottleneck = require('bottleneck')
const { getAllEmailsInCourse, getAllNamesFromCourseId } = require('./src/recipes/getAllEmailsInCourse')

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

limiter.schedule(() => getAllEmailsInCourse(15, 'FNH', 'FNH250')
  .then(emails => console.log(emails))
)

limiter.schedule(() => getAllNamesFromCourseId(15, 'FNH', 'FNH250')
  .then(names => console.log(names))
)
