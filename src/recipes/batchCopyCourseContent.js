const copyCourseContent = require('./copyCourseContent')

const batchCopyCourseContent = async listOfSourceAndTargetCourseIds => {
  const listOfProgress = listOfSourceAndTargetCourseIds
    .map(({ sourceCourseId, targetCourseId }) => copyCourseContent(sourceCourseId, targetCourseId))
  return listOfProgress
}

module.exports = batchCopyCourseContent
