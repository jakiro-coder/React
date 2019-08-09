const actions = {
  SET_STUDENT_WEEK_SCHEDULE: function (payload) {
    return {
      type: 'SET_STUDENT_WEEK_SCHEDULE',
      payload
    }
  },

  SET_SCHOLAR_INFORMATION: function (payload) {
    return {
      type: 'SET_SCHOLAR_INFORMATION',
      payload
    }
  },

  GET_STUDENT_WEEK_SCHEDULE: function (payload) {
    return {
      type: 'GET_STUDENT_WEEK_SCHEDULE',
      payload
    }
  },

  GET_SCHOLAR_INFORMATION: function (payload) {
    return {
      type: 'GET_SCHOLAR_INFORMATION',
      payload
    }
  }
}

export default actions;