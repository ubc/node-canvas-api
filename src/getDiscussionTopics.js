var fetchAll = require('./internal/fetchAll');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrives all discussion topics in course
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a list of Discussion topics
 */

const getDiscussionTopics = async courseId => {
  return fetchAll(canvasDomain + `/courses/${courseId}/discussion_topics`);
};

module.exports = getDiscussionTopics;