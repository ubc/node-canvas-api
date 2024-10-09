/* global test, expect, describe, it, jest */

const putStudentNumberInExistingCustomColumn = require('../src/putStudentNumberInExistingCustomColumn')

test('putStudentNumberInExistingCustomColumn function exists', () => {
  expect(typeof putStudentNumberInExistingCustomColumn).toEqual('function')
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

