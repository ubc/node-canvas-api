import courseCopy from './courseCopy.js'
import getProgress from './getProgress.js'

/**
 * Initiates course copy.
 * @param {Number} sourceCourseId the course ID of the source course.
 * @param {Number} targetCourseId the course ID of the target course.
 * @return {Promise} A promise that resolves to a progress ID that can be used to look up progress
 * of copy
 */

const copyCourseContent = async (sourceCourseId, targetCourseId) => {
  const contentMigration = await courseCopy(sourceCourseId, targetCourseId)
  const progress = getProgress(contentMigration.id)
  // maybe implement polling to see when the content migration is complete?
  return progress
}

export default copyCourseContent
