module.exports = {
  users: {
    search: term => {
      return 'search_term=' + term
    },
    sort: {
      username: 'sort=username',
      email: 'sort=email',
      sisID: 'sort=sis_id',
      lastLogin: 'sort=last_login'
    },
    order: {
      asc: 'order=asc',
      desc: 'order=desc'
    }
  },
  courses: {
    include: {
      needsGradingCount: 'include[]=needs_grading_count',
      syllabusBody: 'include[]=syllabus_body',
      publicDescription: 'include[]=public_description',
      totalScores: 'include[]=total_scores',
      currentGradingPeriodScores: 'include[]=current_grading_period_scores',
      term: 'include[]=term',
      courseProgress: 'include[]=course_progress',
      sections: 'include[]=sections',
      storageQuotaUsedMb: 'include[]=storage_quota_used_mb',
      totalStudents: 'include[]=total_students',
      passbackStatus: 'include[]=passback_status',
      favorites: 'include[]=favorites',
      teachers: 'include[]=teachers',
      observedUsers: 'include[]=observed_users'
    },
    state: {
      unpublished: 'state[]=unpublished',
      available: 'state[]=available',
      completed: 'state[]=completed',
      deleted: 'state[]=deleted'
    },
    enrollmentState: {
      active: 'enrollment_state=active',
      invitedOrPending: 'enrollment_state=invited_or_pending',
      completed: 'enrollment_state=completed'
    }
  }
}
