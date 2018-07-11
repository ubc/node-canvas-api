/* global test, expect, describe, it, jest */

const putStudentNumbersInExistingGradebook = require('../src/putStudentNumberInExistingGradebook')

test('putStudentNumbersInExistingGradebook function exists', () => {
  expect(typeof putStudentNumbersInExistingGradebook).toEqual('function')
})

// describe('putStudentNumbersInExistingGradebook', () => {
//   it('Expect putStudentNumbersInExistingGradebook called with 2 args', () => {
//     const putStudentNumberInGradeColumnMock = jest.fn()
//     const putStudentNumbersInExistingGradebookMock = jest.fn(() => {
//       putStudentNumberInGradeColumnMock()
//     })

//     expect(putStudentNumbersInExistingGradebookMock).toBeCalled()
//     expect(putStudentNumberInGradeColumnMock).toBeCalled()
//   })
// })

// work in progress
test('Expect putStudentNumbersInExistingGradebook called with 2 args', () => {
  expect.assertions(1)
  const data = putStudentNumbersInExistingGradebook(2503)

  return expect(data).toBeCalledWith()
})
