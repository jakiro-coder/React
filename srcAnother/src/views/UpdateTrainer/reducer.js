const initialState = {
	formTrainer: {
		trainerId: 0,
		names: '',
		favoriteName: '',
		firstLastName: '',
		secondLastName: '',
		documentNumber: '',
		documentExtension: '',
		email: '',
		referencePhone: '',
		bankName: '',
		bankAccountNumber: '',
		isActive: true,
		image: '',
    	imageName: '',
	},
	message: {
		value: '',
		type: 'success',
		visible:false
	},
	modal: {
		visibility: false,
	},
	extensionOptions: [],
	extensionBanks: []
};

function SET_TRAINER(state, action) {
	const newTrainerForm = action.payload.trainer;
	return { ...state, formTrainer: newTrainerForm };
}

function UPDATE_FORM(state, action) {
	const newForm = { ...state.formTrainer };
	newForm[action.payload.key] = action.payload.value;
	return { ...state, formTrainer: newForm };
}

function CLEAR_FORM(state, action) {
	return { ...state, formTrainer: initialState.formTrainer };
}

function UPDATE_CI_EXTENSIONS(state, action) {
	const newCIExtensions = action.payload.extensionOptions.map(element => {
		return element.extensionName;
	})
	return { ...state, extensionOptions: newCIExtensions };
}

function UPDATE_BANKS(state, action) {
	const newBanks = action.payload.extensionBanks.map(element => {
		return element.bankName;
	})
	return { ...state, extensionBanks: newBanks };
}

function SET_MESSAGE(state, action) {
	const newMessage = { ...state.message };
	newMessage.value = action.payload.error;
	newMessage.type = action.payload.type;
	newMessage.visible = action.payload.visible;
	return { ...state, message: newMessage };
}

function SET_VISIBILITY_MODAL(state, action) {
	const newModal = { ...state.modal };
	newModal.visibility = !action.payload;
	return { ...state, modal: newModal };
}

export default function UpdateReducer(state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_FORM':
			return UPDATE_FORM(state, action);
		case 'CLEAR_FORM':
			return CLEAR_FORM(state, action);
		case 'UPDATE_CI_EXTENSIONS':
			return UPDATE_CI_EXTENSIONS(state, action);
		case 'UPDATE_BANKS':
			return UPDATE_BANKS(state, action);
		case 'SET_MESSAGE':
			return SET_MESSAGE(state, action);
		case 'SET_VISIBILITY_MODAL':
			return SET_VISIBILITY_MODAL(state, action);
		case 'SET_TRAINER':
			return SET_TRAINER(state, action);
		default:
			return state;
	}
}