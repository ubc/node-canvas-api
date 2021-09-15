var postRequest = require('./internal/post');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Creates Group Category
 * @param {Number} courseId the course ID of the source course.
 * @param {Number} body the object that contains the request parameters as indicated here:
 * https://canvas.instructure.com/doc/api/group_categories.html#method.group_categories.create
 * @return {Promise} A GroupCategory object: https://canvas.instructure.com/doc/api/group_categories.html#GroupCategory
 */

function createGroupCategory(courseId, body) {
  return postRequest(canvasDomain + `/courses/${courseId}/group_categories`, body);
}
module.exports = createGroupCategory;