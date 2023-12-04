/* global test, expect */
const { expect } = require('chai');

const getAllCoursesInDept = require('../src/getAllCoursesInDept')

describe('getAllCoursesInDept function exists', () => {
  it('typecheck', () => {
    expect(getAllCoursesInDept).to.be.a('function');
  });
});
