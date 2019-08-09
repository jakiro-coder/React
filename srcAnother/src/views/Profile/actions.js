const actions = {
  SET_TRAINER_WEEK_SCHEDULE: function (payload) {
    return {
      type: 'SET_TRAINER_WEEK_SCHEDULE',
      payload
    }
  },

  SET_TRAINER: function (payload) {
    return {
      type: 'SET_TRAINER',
      payload
    }
  },

  SET_MODULES: function (payload) {
    return {
      type: 'SET_MODULES',
      payload
    }
  },

  GET_CURRENT_TRAINER: function (payload) {
    return {
      type: 'GET_CURRENT_TRAINER',
      payload
    }
  },

  GET_MODULES_BY_TRAINER: function (payload) {
    return {
      type: 'GET_MODULES_BY_TRAINER',
      payload
    }
  },

  GET_TRAINER_WEEK_SCHEDULE: function (payload) {
    return {
      type: 'GET_TRAINER_WEEK_SCHEDULE',
      payload
    }
  }
}

export default actions;
