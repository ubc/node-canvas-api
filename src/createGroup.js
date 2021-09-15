var postRequest = require('./internal/post');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Creates group
 * @param {Number} groupCategoryId the Group Category ID.
 * @param {Number} body the object that contains the request parameters as indicated here:
 * https://canvas.instructure.com/doc/api/groups.html#method.groups.create
 * @return {Promise} A Group object: https://canvas.instructure.com/doc/api/groups.html#method.groups.create
 */

function createGroup(groupCategoryId, body) {
  return postRequest(canvasDomain + `/group_categories/${groupCategoryId}/groups`, body);
}
module.exports = createGroup;