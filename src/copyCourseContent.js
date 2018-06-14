import { courseCopy } from './internal/post'
import { getProgress } from './internal/get'

const copyCourseContent = async (sourceCourseId, targetCourseId) => {
  const contentMigration = await courseCopy(sourceCourseId, targetCourseId)
  const progress = getProgress(contentMigration.id)
  // maybe implement polling to see when the content migration is complete?
  return progress
}

export default copyCourseContent
