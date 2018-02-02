const { get, post, put } = require('../util')

const createCustomGradebookColumn = async (courseId, columnTitle, columnPosition) => {
  const response = await post.createCustomGradebookColumn(courseId, {
    'column[title]': columnTitle,
    'column[position]': columnPosition
  })
  return response
}

module.export = createCustomGradebookColumn
