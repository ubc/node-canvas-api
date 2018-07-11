/* global test, expect */

const getAllCoursesInAccount = require('../src/getAllCoursesInAccount')

test('getAllCoursesInAccount function exists', () => {
  expect(typeof getAllCoursesInAccount).toEqual('function')
})
