/* global test, expect */
const { expect } = require('chai');

const batchCopyCourseContent = require('../src/batchCopyCourseContent')

describe('batchCopyCourseContent function exists', () => {
  it('typecheck', ()=> {
    expect(batchCopyCourseContent).to.be.a('function');
  });
});
