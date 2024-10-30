import postRequest from './internal/post.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Create a new user enrollment for section.
 * @param {Number} sectionId the section ID the user is to be enrolled in.
 * @param {Number} body the object that contains the request parameters as indicated here:
 * https://canvas.instructure.com/doc/api/enrollments.html#method.enrollments_api.create
 * @return {Promise} An Enrollment object: https://canvas.instructure.com/doc/api/enrollments.html#Enrollment
 */

export default function createUserSectionEnrollment (sectionId, body) {
  return postRequest(canvasDomain + `/sections/${sectionId}/enrollments`, body)
}
