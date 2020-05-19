const getOptions = {
  users: {
    search: term => `search_term=${encodeURIComponent(term)}`,
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
      current_grading_period_scores: 'include[]=current_grading_period_scores',
      term: 'include[]=term',
      students: 'include[]=students',
      user: 'include[]=user'
    },
    userIds: id => `user_ids[]=${encodeURIComponent(id)}`,
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
  },
  account: {
    with_enrollments: 'with_enrollments=true',
    enrollment_type: role => `enrollment_type[]=${encodeURIComponent(role)}`,
    published: 'published=true',
    completed: 'completed=true',
    blueprint: 'blueprint=true'
  },
  submissions: {
    rubric_assessment: 'include[]=rubric_assessment',
    submission_comments: 'include[]=submission_comments',
    submission: 'include[]=submission'
  },
  quiz: {
    quiz: 'include[]=quiz'
  },
  rubric: {
    assessments: 'include=assessments',
    graded_assessments: 'include=graded_assessments',
    peer_assessments: 'include=peer_assessments',
    data_assessment: 'style=full'
  }
};

module.exports = getOptions;