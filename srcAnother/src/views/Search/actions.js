const actions = {
  SEARCH_TRAINERS: function (payload) {
    return {
      type: 'SEARCH_TRAINERS',
      payload
    }
  },

  SET_SEARCH_TRAINERS: function (payload) {
    return {
      type: 'SET_SEARCH_TRAINERS',
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
}

export default actions;
