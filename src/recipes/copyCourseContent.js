const { courseCopy } = require('../requests/post')
const { getProgress } = require('../requests/get')

const copyCourseContent = async (sourceCourseId, targetCourseId) => {
  const contentMigration = await courseCopy(sourceCourseId, targetCourseId)
  const progress = getProgress(contentMigration.id)
  // maybe implement polling to see when the content migration is complete?
  return progress
}

module.exports = copyCourseContent
