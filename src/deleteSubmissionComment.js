import deleteRequest from './internal/del.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Delete Submission comment
 * @param {Number} courseId the course ID of the target course.
 * @param {Number} assignmentId the assignment id.
 * @param {Number} userId the user id.
 * @param {Number} commentId the comment id.
 * @return {Promise} A SubmissionComment object: https://canvas.instructure.com/doc/api/submissions.html#SubmissionComment
 */

export default function deleteSubmissionComment (courseId, assignmentId, userId, commentId) {
  return deleteRequest(canvasDomain + `/courses/${courseId}/assignments/${assignmentId}/submissions/${userId}/comments/${commentId}`)
}
