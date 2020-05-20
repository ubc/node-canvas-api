import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all questions in a quiz.
 * @param {Number} courseId the course id.
 * @param {Number} quizId the quiz id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Quiz submission objects: https://canvas.instructure.com/doc/api/submissions.html
 */

export default function getQuizQuestions (courseId, quizId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/quizzes/${quizId}/questions?` + buildOptions(options))
}
