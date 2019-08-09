const actions = {
  SET_SCHOLAR: function (payload) {
    return {
      type: 'SET_SCHOLAR',
      payload
    }
  },

  SET_FORM_SCHOLAR: function (payload) {
    return {
      type: 'SET_FORM_SCHOLAR',
      payload
    }
  },

  UPDATE_ID_NUMBER_EXTENSIONS: function (payload) {
    return {
      type: 'UPDATE_ID_NUMBER_EXTENSIONS',
      payload
    }
  },

  UPDATE_SCHOLAR: function (payload) {
    return {
      type: 'UPDATE_SCHOLAR',
      payload
    }
  },

  UPDATE_PROGRAM_OPTIONS: function (payload) {
    return {
      type: 'UPDATE_PROGRAM_OPTIONS',
      payload
    }
  },

  SET_TOOGLE_CANCEL_MODAL: function (payload) {
    return {
      type: 'SET_TOOGLE_CANCEL_MODAL',
      payload
    }
  },

  CLEAR_FORM: function (payload) {
    return {
      type: 'CLEAR_FORM',
      payload
    }
  },

  SET_MESSAGE_FORM: function (payload) {
    return {
      type: 'SET_MESSAGE_FORM',
      payload
    }
  },

  SET_VISIBILITY_MODAL: function (payload) {
    return {
      type: 'SET_VISIBILITY_MODAL',
      payload
    }
  },

  ACTIVE_SECOND_GUARANTOR: function (payload) {
    return {
      type: 'ACTIVE_SECOND_GUARANTOR',
      payload
    }
  },

  GET_CURRENT_SCHOLAR: function (payload) {
    return {
      type: 'GET_CURRENT_SCHOLAR',
      payload
    }
  },

  GET_ID_NUMBER_EXTENSIONS: function (payload) {
    return {
      type: 'GET_ID_NUMBER_EXTENSIONS',
      payload
    }
  },

  UPDATE_SCHOLAR_INFORMATION: function (payload) {
    return {
      type: 'UPDATE_SCHOLAR_INFORMATION',
      payload
    }
  },

  GET_PROGRAMS: function (payload) {
    return {
      type: 'GET_PROGRAMS',
      payload
    }
  }
}

export default actions;