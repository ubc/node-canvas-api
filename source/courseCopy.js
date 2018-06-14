import postRequest from './internal/post'

const canvasDomain = process.env.CANVAS_API_DOMAIN

function courseCopy (sourceCourseId, targetCourseId) {
  return postRequest(canvasDomain + `/courses/${targetCourseId}/content_migrations`, {
    'migration_type': 'course_copy_importer',
    'settings[source_course_id]': `${sourceCourseId}`
  })
}

export default courseCopy
