const initialState = {
  formTrainer: {
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
  },
  message: {
    value: '',
    type: 'success',
    visible:false
  },
  extensionOptions: [],
  extensionBanks: []
};

function UPDATE_FORM(state, action) {
  const newForm = { ...state.formTrainer };
  newForm[action.payload.key] = action.payload.value;
  return { ...state, formTrainer: newForm };
}

function CLEAR_FORM(state, action) {
  return { ...state, formTrainer: initialState.formTrainer };
}

function SET_MESSAGE(state, action) {
  const newMessage = { ...state.message };
  newMessage.value = action.payload.error;
  newMessage.type = action.payload.type;
  newMessage.visible = action.payload.visible;
  return { ...state, message: newMessage };
}

function UPDATE_CI_EXTENSIONS(state, action) {
  const newCIExtensions = action.payload.extensionOptions.map(element => {
    return element.extensionName
  })
  let newTrainerForm = { ...state.formTrainer };
  newTrainerForm.documentExtension = newCIExtensions[1];
  return { ...state, extensionOptions: newCIExtensions, formTrainer: newTrainerForm };
}

function UPDATE_BANKS(state, action) {
  const newBanks = action.payload.extensionBanks.map(element => {
    return element.bankName
  })
  let newTrainerForm = { ...state.formTrainer };
  newTrainerForm.bankName = newBanks[0];
  return { ...state, extensionBanks: newBanks, formTrainer: newTrainerForm };
}

export default function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return UPDATE_FORM(state, action);
    case 'CLEAR_FORM':
      return CLEAR_FORM(state, action);
    case 'SET_MESSAGE':
      return SET_MESSAGE(state, action);
    case 'UPDATE_CI_EXTENSIONS':
      return UPDATE_CI_EXTENSIONS(state, action);
    case 'UPDATE_BANKS':
      return UPDATE_BANKS(state, action);
    default:
      return state;
  }
}