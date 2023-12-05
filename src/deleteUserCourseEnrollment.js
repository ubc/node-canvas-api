const deleteRequest = require('./internal/del.js');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Unenroll a student from a course
 * @param {Number} userId the user ID being removed from the course
 * @param {Number} courseId the course ID the user is to be removed from
 * @param {"conclude"|"delete"|"deactivate"|"inactivate"} task action to be taken on enrollment, described here:
 * https://canvas.instructure.com/doc/api/enrollments.html#method.enrollments_api.destroy
 * @return {Promise<Enrollment>} An Enrollment object: https://canvas.instructure.com/doc/api/enrollments.html#Enrollment
 */
function deleteUserCourseEnrollment(userId, courseId, task) {
  return deleteRequest(canvasDomain + `/courses/${courseId}/enrollments/${userId}`, {task: task});
}

module.exports = deleteUserCourseEnrollment;
