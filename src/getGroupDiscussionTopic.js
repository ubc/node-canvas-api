var fetch = require('./internal/fetch');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrives a single discussion topic from a group
 * @param {Number} groupId the group id.
 * @param {Number} topicId the discussion topic id.
 * @return {Promise} A promise that resolves to a discussion topic Object
 */

const getGroupDiscussionTopic = async (groupId, topicId) => {
  return fetch(canvasDomain + `/groups/${groupId}/discussion_topics/${topicId}`);
};

module.exports = getGroupDiscussionTopic;