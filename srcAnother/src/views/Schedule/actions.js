const actions = {

  SET_SCHEDULES: function (payload) {
    return {
      type: 'SET_SCHEDULES',
      payload
    }
  },

  //middlewareActions----------------------

  GET_SCHEDULE: function (payload) {
    return {
      type: 'GET_SCHEDULE',
      payload
    }
  }
}

export default actions;