import { postRequest, canvasDomain } from './internal/post'

export function courseCopy (sourceCourseId, targetCourseId) {
  return postRequest(canvasDomain + `/courses/${targetCourseId}/content_migrations`, {
    'migration_type': 'course_copy_importer',
    'settings[source_course_id]': `${sourceCourseId}`
  })
}
