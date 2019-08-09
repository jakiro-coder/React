const actions = {
  UPDATE_STUDENTS: function (payload) {
    return {
      type: 'UPDATE_STUDENTS',
      payload
    }
  },

  UPDATE_SEARCH: function (payload) {
    return {
      type: 'UPDATE_SEARCH',
      payload
    }
  },

  CLEAN_SEARCH: function (payload) {
    return {
      type: 'CLEAN_SEARCH',
      payload
    }
  },

  //middlewareActions----------------------
  SEARCH_SCHOLARS: function (payload) {
    return {
      type: 'SEARCH_SCHOLARS',
      payload
    }
  }
}

export default actions;