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

	UPDATE_CI_EXTENSIONS: function (payload) {
		return {
			type: 'UPDATE_CI_EXTENSIONS',
			payload
		}
	},

	UPDATE_BANKS: function (payload) {
		return {
			type: 'UPDATE_BANKS',
			payload
		}
	},

	SET_TRAINER: function (payload) {
		return {
			type: 'SET_TRAINER',
			payload
		}
	},

	GET_CURRENT_TRAINER: function (payload) {
		return {
			type: 'GET_CURRENT_TRAINER',
			payload
		}
	},
	UPDATE_TRAINER: function (payload) {
		return {
			type: 'UPDATE_TRAINER',
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
	},

	SET_MESSAGE: function (payload) {
		return {
			type: 'SET_MESSAGE',
			payload
		}
	},

	SET_VISIBILITY_MODAL: function (payload) {
		return {
			type: 'SET_VISIBILITY_MODAL',
			payload
		}
	},
}

export default actions;