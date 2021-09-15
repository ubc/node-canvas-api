var postRequest = require('./internal/post');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Creates course
 * @param {Number} accountId the account ID of the source course.
 * @param {Number} body the object that contains the request parameters as indicated here:
 * https://canvas.instructure.com/doc/api/courses.html#method.courses.create
 * @return {Promise} A Course object: https://canvas.instructure.com/doc/api/courses.html#Course
 */

function createCourse(accountId, body) {
  return postRequest(canvasDomain + `/accounts/${accountId}/courses`, body);
}
module.exports = createCourse;