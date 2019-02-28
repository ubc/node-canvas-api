var getOptions = require('./internal/getOptions');

var fetch = require('./internal/fetch');

var buildOptions = require('./internal/util');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves syllabus of course
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a custom object: { courseCode, courseID, syllabus }
 */

function getSyllabusOfCourse(courseId) {
  return fetch(canvasDomain + `/courses/${courseId}?` + buildOptions([getOptions.courses.include.syllabus_body, getOptions.courses.include.term])).then(course => ({
    courseCode: course.course_code,
    courseId,
    syllabus: course.syllabus_body,
    name: course.name,
    term: course.term
  }));
}
module.exports = getSyllabusOfCourse;