import fetchAll from './internal/fetchAll.js'
import buildOptions from './internal/util.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all module items in a module
 * @param {Number} courseId the course id.
 * @param {Number} moduleId the module id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of ModuleItem objects: https://canvas.instructure.com/doc/api/modules.html
 */

export default function getModuleItems (courseId, moduleId, ...options) {
  return fetchAll(
    canvasDomain +
      `/courses/${courseId}/modules/${moduleId}/items?` +
      buildOptions(options)
  )
}
