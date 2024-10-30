import buildOptions from './internal/util.js'

import fetchAll from './internal/fetchAll.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all quiz submission events in a course
 * @param {Number} courseId the course id.
 * @param {Number} quizId the quiz id.
 * @param {Number} submissionId the submission id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Quiz submission event objects: https://canvas.instructure.com/doc/api/submissions.html
 */

export default function getQuizSubmissionEvents (courseId, quizId, submissionId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/quizzes/${quizId}/submissions/${submissionId}/events?` + buildOptions(options))
}
