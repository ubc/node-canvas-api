var fetch = require('./internal/fetch');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrives a single submission
 * @param {Number} courseId the course id.
 * @param {Number} quizId the quiz id.
 * @return {Promise} A promise that resolves to a submission Object
 */

const getQuizSubmission = async (courseId, quizId, submissionId) => {
  return fetch(canvasDomain + `/courses/${courseId}/quizzes/${quizId}/submissions/${submissionId}`);
};

module.exports = getQuizSubmission;