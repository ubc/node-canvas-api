var copyCourseContent = require('./copyCourseContent');

/**
 * Batch copy course content, takes in an array of objects that hold the sourceID and targetIds.
 * @param {Array} listOfSourceAndTargetCourseIds an array of objects { sourceCourseId, targetCourseId }.
 * @return {Promise} A promise that resolves to a list of progress IDs that can be used to look up progress
 * of copy
 */

const batchCopyCourseContent = async listOfSourceAndTargetCourseIds => {
  const listOfProgress = listOfSourceAndTargetCourseIds.map(({ sourceCourseId, targetCourseId }) => copyCourseContent(sourceCourseId, targetCourseId));
  return listOfProgress;
};

module.exports = batchCopyCourseContent;