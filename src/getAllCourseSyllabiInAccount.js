var getAllCoursesInAccount = require('./getAllCoursesInAccount');

var getSyllabusOfCourse = require('./getSyllabusOfCourse');

/**
 * Returns the syllabi of all courses contained under an Account
 * If a course does not have a syllabus defined, the syllabus_body will have null.
 * @param {Number} accountId the account ID for Canvas
 * @return {Promise} A promise that resolves to an array of course objects, with syllabus
 */

const getAllCourseSyllabiInAccount = async accountId => {
  const courses = await getAllCoursesInAccount(accountId);
  const ids = courses.map(({ id }) => id);
  const syllabi = await Promise.all(ids.map(id => getSyllabusOfCourse(id)));
  return syllabi;
};

module.exports = getAllCourseSyllabiInAccount;