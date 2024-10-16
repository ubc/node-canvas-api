var fetchAll = require("./internal/fetchAll");
const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrives all groups in a course
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to an array of group objects
 */

const getGroupsInCourse = async courseId => {
  return fetchAll(canvasDomain + `/courses/${courseId}/groups`);
};
module.exports = getGroupsInCourse;