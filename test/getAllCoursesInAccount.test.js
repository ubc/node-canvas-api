/* global test, expect */
const { expect } = require('chai');

const getAllCoursesInAccount = require('../src/getAllCoursesInAccount')

describe('getAllCoursesInAccount function exists', () => {
  it('typecheck', ()=> {
    expect(getAllCoursesInAccount).to.be.a('function');
  });
});
