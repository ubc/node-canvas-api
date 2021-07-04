var fetchAll = require('./internal/fetchAll');

var buildOptions = require('./internal/util');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrives all discussion topics in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Discussion topics
 */

const getDiscussionTopics = async (courseId, ...options) => {
  return fetchAll(canvasDomain + `/courses/${courseId}/discussion_topics?` + buildOptions(options));
};

module.exports = getDiscussionTopics;