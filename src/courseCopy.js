var postRequest = require('./internal/post');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Initiates course copy.
 * @param {Number} sourceCourseId the course ID of the source course.
 * @param {Number} targetCourseId the course ID of the target course.
 * @return {Promise} A promise that resolves to a contentMigration object
 */

function courseCopy(sourceCourseId, targetCourseId) {
  return postRequest(canvasDomain + `/courses/${targetCourseId}/content_migrations`, {
    'migration_type': 'course_copy_importer',
    'settings[source_course_id]': `${sourceCourseId}`
  });
}

module.exports = courseCopy;