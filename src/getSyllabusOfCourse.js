import { getOptions } from './internal/options'
import { fetch, canvasDomain } from './internal/get'

export default function getSyllabusOfCourse (courseId) {
  return fetch(canvasDomain + `/courses/${courseId}?` + getOptions.courses.include.syllabus_body)
    .then(course => ({
      courseCode: course.course_code,
      courseId,
      syllabus: course.syllabus_body
    }))
}
