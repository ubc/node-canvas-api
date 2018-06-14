import { courseCopy } from '../requests/post'
import { getProgress } from '../requests/get'

const copyCourseContent = async (sourceCourseId, targetCourseId) => {
  const contentMigration = await courseCopy(sourceCourseId, targetCourseId)
  const progress = getProgress(contentMigration.id)
  // maybe implement polling to see when the content migration is complete?
  return progress
}

export default copyCourseContent
