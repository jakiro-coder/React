const actions = {
  SET_STUDENTS: function (payload) {
    return {
      type: 'SET_STUDENTS',
      payload
    }
  },
  SET_PAGINATION: function (payload) {
    return {
      type: 'SET_PAGINATION',
      payload
    }
  },
  SET_LIST_SCHOLAR: function (payload) {
    return {
      type: 'SET_LIST_SCHOLAR',
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
  SET_IS_ACTIVE: function (payload) {
    return {
      type: 'SET_IS_ACTIVE',
      payload
    }
  },

  //middlewareActions----------------------
  GET_STUDENTS: function (payload) {
    return {
      type: 'GET_STUDENTS',
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
  CHANGE_SCHOLAR_STATE: function (payload) {
    return {
      type: 'CHANGE_SCHOLAR_STATE',
      payload
    }
  },
}

export default actions;