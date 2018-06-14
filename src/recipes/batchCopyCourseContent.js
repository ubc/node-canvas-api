import copyCourseContent from './copyCourseContent'

const batchCopyCourseContent = async listOfSourceAndTargetCourseIds => {
  const listOfProgress = listOfSourceAndTargetCourseIds
    .map(({ sourceCourseId, targetCourseId }) =>
      copyCourseContent(sourceCourseId, targetCourseId))
  return listOfProgress
}

export default batchCopyCourseContent
