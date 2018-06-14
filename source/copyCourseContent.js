import courseCopy from './courseCopy'
import getProgress from './getProgress'

const copyCourseContent = async (sourceCourseId, targetCourseId) => {
  const contentMigration = await courseCopy(sourceCourseId, targetCourseId)
  const progress = getProgress(contentMigration.id)
  // maybe implement polling to see when the content migration is complete?
  return progress
}

export default copyCourseContent
