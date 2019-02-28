var fetchAll = require('./internal/fetchAll');

var buildOptions = require('./internal/util');

var getOptions = require('./internal/getOptions');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all rubrics in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Rubric objects: https://canvas.instructure.com/doc/api/rubrics.html
 */

function getRubricsInCourse(courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/rubrics?` + buildOptions([getOptions.rubric.assessments, options]));
}
module.exports = getRubricsInCourse;