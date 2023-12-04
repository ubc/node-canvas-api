/* global test, expect */
const { expect } = require('chai');

const deleteAllCustomGradebookColumns = require('../src/deleteAllCustomGradebookColumns')

describe('deleteAllCustomGradebookColumns function exists', () => {
  it('typecheck', ()=> {
    expect(deleteAllCustomGradebookColumns).to.be.a('function');
  });
});
