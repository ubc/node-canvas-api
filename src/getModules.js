var fetchAll = require('./internal/fetchAll');

var buildOptions = require('./internal/util');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all modules in a course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Module objects: https://canvas.instructure.com/doc/api/modules.html
 */

function getModules(courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/modules?` + buildOptions(options));
}
module.exports = getModules;