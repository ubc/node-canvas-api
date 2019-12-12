var postRequest = require('./internal/post');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Create a new user enrollment for a course.
 * @param {Number} courseId the course ID the user is to be enrolled in.
 * @param {Number} body the object that contains the request parameters as indicated here:
 * https://canvas.instructure.com/doc/api/enrollments.html#method.enrollments_api.create
 * @return {Promise} An Enrollment object: https://canvas.instructure.com/doc/api/enrollments.html#Enrollment
 */

function createUserCourseEnrollment(courseId, body) {
  return postRequest(canvasDomain + `/courses/${courseId}/enrollments`, body);
}
module.exports = createUserCourseEnrollment;