const { courseCopy } = require('../requests/post')

const copyCourseMaterial = async (sourceCourseId, targetCourseId, options) => {
  const contentMigration = await courseCopy(sourceCourseId, targetCourseId)
  return contentMigration
}

module.exports = copyCourseMaterial
