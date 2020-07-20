var fetchAll = require('./internal/fetchAll');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrives high-level course analytics
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a User object: https://canvas.instructure.com/doc/api/users.html#User
 */

function getCourseAnalytics(courseId) {
  return fetchAll(canvasDomain + `/courses/${courseId}/analytics/student_summaries`);
}
module.exports = getCourseAnalytics;