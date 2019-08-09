const actions = {

  UPDATE_FORM: function (payload) {
    return {
      type: 'UPDATE_FORM',
      payload
    }
  },

  CLEAR_FORM: function (payload) {
    return {
      type: 'CLEAR_FORM',
      payload
    }
  },

  SET_MESSAGE: function (payload) {
    return {
      type: 'SET_MESSAGE',
      payload
    }
  },

  UPDATE_CI_EXTENSIONS: function (payload) {
    return {
      type: 'GET_CI_EXTENSIONS',
      payload
    }
  },

  UPDATE_BANKS: function (payload) {
    return {
      type: 'GET_BANKS',
      payload
    }
  },

  //middlewareActions----------------------

  POST_TRAINER: function (payload) {
    return {
      type: 'POST_TRAINER',
      payload
    }
  },

  GET_CI_EXTENSIONS: function (payload) {
    return {
      type: 'GET_CI_EXTENSIONS',
      payload
    }
  },

  GET_BANKS: function (payload) {
    return {
      type: 'GET_BANKS',
      payload
    }
  }


}

export default actions;