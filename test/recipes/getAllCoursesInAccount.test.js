/* global test, expect */

const getAllCoursesInAccount = require('../../src/recipes/getAllCoursesInAccount')

test('getAllCoursesInAccount function exists', () => {
  expect(typeof getAllCoursesInAccount).toEqual('function')
})
