import getOptions from './internal/getOptions'
import fetch from './internal/fetch'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves syllabus of course
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a custom object: { courseCode, courseID, syllabus }
 */

export default function getSyllabusOfCourse (courseId) {
  return fetch(canvasDomain + `/courses/${courseId}?` + getOptions.courses.include.syllabus_body)
    .then(course => ({
      courseCode: course.course_code,
      courseId,
      syllabus: course.syllabus_body
    }))
}
