const actions = {
  UPDATE_STUDENT_FORM: function (payload) {
    return {
      type: 'UPDATE_STUDENT_FORM',
      payload
    }
  },

  CLEAN_STUDENT_FORM: function (payload) {
    return {
      type: 'CLEAN_STUDENT_FORM',
      payload
    }
  },

  SET_MESSAGE_FORM: function (payload) {
    return {
      type: 'SET_MESSAGE_FORM',
      payload
    }
  },

  UPDATE_ID_NUMBER_EXTENSIONS: function (payload) {
    return {
      type: 'UPDATE_ID_NUMBER_EXTENSIONS',
      payload
    }
  },

  UPDATE_PROGRAM_OPTIONS: function (payload) {
    return {
      type: 'UPDATE_PROGRAM_OPTIONS',
      payload
    }
  },


  ACTIVE_SECOND_GUARANTOR: function (payload) {
    return {
      type: 'ACTIVE_SECOND_GUARANTOR',
      payload
    }
  },

  POST_STUDENT: function (payload) {
    return {
      type: 'POST_STUDENT',
      payload
    }
  },

  GET_PROGRAMS: function (payload) {
    return {
      type: 'GET_PROGRAMS',
      payload
    }
  },

  GET_ID_NUMBER_EXTENSIONS: function (payload) {
    return {
      type: 'GET_ID_NUMBER_EXTENSIONS',
      payload
    }
  }
}

export default actions;