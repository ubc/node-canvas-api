var fetch = require('./internal/fetch');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrives all discussion topics in group
 * @param {Number} groupId the group id.
 * @param {Number} topicId the discussion topic id.
 * @return {Promise} A promise that resolves to a discussion topic view object
 */

const getFullGroupDiscussion = async (groupId, topicId) => {
  return fetch(canvasDomain + `/groups/${groupId}/discussion_topics/${topicId}/view`);
};

module.exports = getFullGroupDiscussion;