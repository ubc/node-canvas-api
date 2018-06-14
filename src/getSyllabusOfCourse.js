import { getOptions } from './internal/options'
import { fetch } from './internal/get'
const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getSyllabusOfCourse (courseId) {
  return fetch(canvasDomain + `/courses/${courseId}?` + getOptions.courses.include.syllabus_body)
    .then(course => ({
      courseCode: course.course_code,
      courseId,
      syllabus: course.syllabus_body
    }))
}
