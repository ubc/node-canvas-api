import postRequest from './internal/post.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Creates group membership (add user to group)
 * @param {Number} groupCategoryId the Group Category ID.
 * @param {Number} body the object that contains the request parameters as indicated here:
 * https://canvas.instructure.com/doc/api/groups.html#method.group_memberships.create
 * @return {Promise} A Group Membership object: https://canvas.instructure.com/doc/api/groups.html#GroupMembership
 */

export default function createGroupMembership (groupId, body) {
  return postRequest(canvasDomain + `/groups/${groupId}/memberships`, body)
}
