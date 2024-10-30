import fetchAll from './internal/fetchAll.js'
import buildOptions from './internal/util.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrives all discussion topics in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Discussion topics
 */

const getDiscussionTopics = async (courseId, ...options) => {
  return fetchAll(
    canvasDomain +
      `/courses/${courseId}/discussion_topics?` +
      buildOptions(options)
  )
}

export default getDiscussionTopics
