var fetchAll = require('./internal/fetchAll');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrives all discussion topics in group
 * @param {Number} groupId the group id.
 * @return {Promise} A promise that resolves to a list of Discussion topics
 */

const getGroupDiscussionTopics = async groupId => {
  return fetchAll(canvasDomain + `/groups/${groupId}/discussion_topics`);
};

module.exports = getGroupDiscussionTopics;