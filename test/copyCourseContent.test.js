/* global test, expect */
const {should, expect } = require('chai');

const copyCourseContent = require('../src/CopyCourseContent');

describe('copyCourseContent function exists', () => {
  it('typcheck', () => {
    expect(copyCourseContent).to.be.a('function');
  });
});
