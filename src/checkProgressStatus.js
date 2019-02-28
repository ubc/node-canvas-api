var getProgress = require('./getProgress');

/**
 * Returns true if progress of id is complete, false otherwise
 * @param {Number} id get the progress of id
 * @return {Promise} A promise that resolves to true if progress is complete, false otherwise
 */

function checkProgressStatus(id) {
  return new Promise((resolve, reject) => {
    getProgress(id).then(({ completion, workflow_state }) => {
      if (completion === 100) {
        resolve(true);
      }
      if (workflow_state === 'completed') {
        resolve(true);
      } else resolve(false);
    }).catch(e => reject(e));
  });
}
module.exports = checkProgressStatus;