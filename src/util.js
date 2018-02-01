const request = require('request-promise')
const linkparser = require('parse-link-header')

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN
const token = process.env.CANVAS_API_TOKEN

const fetchAll = (url, result = []) =>
  request({
    'method': 'GET',
    'uri': url,
    'json': true,
    'resolveWithFullResponse': true,
    'headers': {
      'Authorization': 'Bearer ' + token
    }
  }).then(response => {
    result = [...result, ...response.body]
    const links = linkparser(response.headers.link)
    return links.next ? fetchAll(links.next.url, result) : result
  }).catch(err => {
    throw new Error('API error', err)
  })

const buildOptions = options => {
  if (options) return options.join('&')
  else return ''
}

module.exports.get = {
  getSubaccounts: accountId => {
    return fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`)
  },
  getUsersInAccount: accountId => {
    return fetchAll(canvasDomain + `/accounts/${accountId}/users?`)
  },
  getUsersInCourse: (courseId, ...options) => {
    return fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options))
  },
  getCourses: (deptId, ...options) => {
    return fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options))
  },
  getCoursesByUser: (userId, ...options) => {
    return fetchAll(canvasDomain + `/users/${userId}/courses`)
  }
}

module.exports.post = {

}

module.exports.options = {
  users: {
    search: term => {
      return 'search_term=' + term
    },
    sort: {
      username: 'sort=username',
      email: 'sort=email',
      sis_id: 'sort=sis_id',
      last_login: 'sort=last_login'
    },
    order: {
      asc: 'order=asc',
      desc: 'order=desc'
    },
    enrollmentType: {
      teacher: 'enrollment_type[]=teacher',
      student: 'enrollment_type[]=student',
      student_view: 'enrollment_type[]=student_view',
      ta: 'enrollment_type[]=ta',
      observer: 'enrollment_type[]=observer',
      designer: 'enrollment_type[]=designer'
    },
    include: {
      email: 'include[]=email',
      enrollments: 'include[]=enrollments',
      locked: 'include[]=locked',
      avatar_url: 'include[]=avatar_url',
      test_student: 'include[]=test_student',
      bio: 'include[]=bio',
      custom_links: 'include[]=custom_links',
      current_grading_period_scores: 'include[]=current_grading_period_scores'
    },
    userIds: id => {
      return `user_ids[]=${id}`
    },
    enrollmentState: {
      active: 'enrollment_state=active',
      invited: 'enrollment_state=invited',
      rejected: 'enrollment_state=rejected',
      completed: 'enrollment_state=completed',
      inactive: 'enrollment_state=inactive'
    }
  },
  courses: {
    include: {
      needs_grading_count: 'include[]=needs_grading_count',
      syllabus_body: 'include[]=syllabus_body',
      public_description: 'include[]=public_description',
      total_scores: 'include[]=total_scores',
      current_grading_period_scores: 'include[]=current_grading_period_scores',
      term: 'include[]=term',
      course_progress: 'include[]=course_progress',
      sections: 'include[]=sections',
      storage_quota_used_mb: 'include[]=storage_quota_used_mb',
      total_students: 'include[]=total_students',
      passback_status: 'include[]=passback_status',
      favorites: 'include[]=favorites',
      teachers: 'include[]=teachers',
      observed_users: 'include[]=observed_users'
    },
    state: {
      unpublished: 'state[]=unpublished',
      available: 'state[]=available',
      completed: 'state[]=completed',
      deleted: 'state[]=deleted'
    },
    enrollmentState: {
      active: 'enrollment_state=active',
      invited_or_pending: 'enrollment_state=invited_or_pending',
      completed: 'enrollment_state=completed'
    }
  }
}
