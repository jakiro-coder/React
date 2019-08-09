const actions = {

  SET_TRAINERS: function (payload) {
    return {
      type: 'SET_TRAINERS',
      payload
    }
  },

  UPDATE_LIST_TRAINER: function (payload) {
    return {
      type: 'UPDATE_LIST_TRAINER',
      payload
    }
  },

  SET_MESSAGE_STATE: function (payload) {
    return {
      type: 'SET_MESSAGE_STATE',
      payload
    }
  },

  SET_MODAL: function (payload) {
    return {
      type: 'SET_MODAL',
      payload
    }
  },

  SET_PAGINATION: function (payload) {
    return {
      type: 'SET_PAGINATION',
      payload
    }
  },

  CHANGE_TRAINER_STATE: function (payload) {
    return {
      type: 'CHANGE_TRAINER_STATE',
      payload
    }
  },

  GET_TRAINERS: function (payload) {
    return {
      type: 'GET_TRAINERS',
      payload
    }
  },

  GET_LEFT_PAGE: function (payload) {
    return {
      type: 'GET_LEFT_PAGE',
      payload
    }
  },
  
  GET_RIGHT_PAGE: function (payload) {
    return {
      type: 'GET_RIGHT_PAGE',
      payload
    }
  },

  SET_FILTER_BY_ACTIVE: function (payload) {
    return {
      type: 'SET_FILTER_BY_ACTIVE',
      payload
    }
  }
}

export default actions;