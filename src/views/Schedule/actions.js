const actions = {
  SET_SCHEDULES: function (payload) {
    return {
      type: 'SET_SCHEDULES',
      payload
    }
  },

  //middlewareActions----------------------
  GET_SCHEDULES: function (payload) {
    return {
      type: 'GET_SCHEDULES',
      payload
    }
  }
}

export default actions;