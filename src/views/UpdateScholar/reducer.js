const initialState = {
  scholarForm: {
    idStudent: 0,
    names: '',
    firstLastName: '',
    secondLastName: '',
    favoriteName: '',
    ci: '',
    ciExtension: '',
    phone: '',
    primaryEmail: '',
    birthdate: '',
    programId: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    firstGuaranteeName: '',
    firstGuaranteeCi: '',
    firstGuaranteePhone: '',
    secondGuaranteeName: '',
    secondGuaranteeCi: '',
    secondGuaranteePhone: '',
    isActive: true,
    image: '',
    imageName: '',
  },
  extensionOptions: [],
  programOptions: [],
  errorMessage: '',
  message: {
    value: '',
    type: 'success',
    visible: false,
  },
  showModal: false,
  modal: {
    visibility: false,
  },
  isSecondGuarantor: false,
};

function SET_SCHOLAR(state, action) {
  let programsOptions = { ...state.programOptions };
  const newScholarForm = action.payload.scholar;
  newScholarForm.programId = programsOptions[newScholarForm.programId];
  return { ...state, scholarForm: newScholarForm };
}

function SET_FORM_SCHOLAR(state, action) {
  let newScholarForm = { ...state.scholarForm };
  newScholarForm[action.payload.objectKey] = action.payload.value;

  return { ...state, scholarForm: newScholarForm };
}

function UPDATE_ID_NUMBER_EXTENSIONS(state, action) {
  const newCIExtensions = action.payload.extensionOptions.map((element) => {
    return element.nameId
  })
  let newScholarForm = { ...state.scholarForm };
  newScholarForm.CiExtension = newCIExtensions[1];
  return { ...state, extensionOptions: newCIExtensions, scholarForm: newScholarForm };
}

function UPDATE_SCHOLAR(state, action) {
  let newScholarForm = { ...state.scholarForm };
  newScholarForm[action.payload.objectKey] = action.payload.value;
  return { ...state, scholarForm: newScholarForm };
}

function SET_MESSAGE_FORM(state, action) {
  const newMessage = { ...state.message };
  newMessage.value = action.payload.error;
  newMessage.type = action.payload.type;
  newMessage.visible = action.payload.visible;

  return { ...state, message: newMessage };
}

function CLEAR_FORM(state, action) {
  return { ...state, scholarForm: initialState.scholarForm };
}

function SET_TOOGLE_CANCEL_MODAL(state, action) {
  const newVisibility = !action.payload;
  return { ...state, showModal: newVisibility };
}

function SET_VISIBILITY_MODAL(state, action) {
  const newModal = { ...state.modal };
  newModal.visibility = !action.payload;
  return { ...state, modal: newModal };
}

function UPDATE_PROGRAM_OPTIONS(state, action) {
  const newPrograms = action.payload.programOptions;
  return { ...state, programOptions: newPrograms };
}

function ACTIVE_SECOND_GUARANTOR(state, action) {
  return { ...state, isSecondGuarantor: action.payload };
}

export default function updateStudentReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SCHOLAR':
      return SET_SCHOLAR(state, action);
    case 'SET_FORM_SCHOLAR':
      return SET_FORM_SCHOLAR(state, action);
    case 'UPDATE_ID_NUMBER_EXTENSIONS':
      return UPDATE_ID_NUMBER_EXTENSIONS(state, action);
    case 'UPDATE_SCHOLAR':
      return UPDATE_SCHOLAR(state, action);
    case 'SET_TOOGLE_CANCEL_MODAL':
      return SET_TOOGLE_CANCEL_MODAL(state, action);
    case 'SET_MESSAGE_FORM':
      return SET_MESSAGE_FORM(state, action);
    case 'CLEAR_FORM':
      return CLEAR_FORM(state, action);
    case 'UPDATE_PROGRAM_OPTIONS':
      return UPDATE_PROGRAM_OPTIONS(state, action);
    case 'SET_VISIBILITY_MODAL':
      return SET_VISIBILITY_MODAL(state, action);
    case 'ACTIVE_SECOND_GUARANTOR':
      return ACTIVE_SECOND_GUARANTOR(state, action);
    default:
      return state;
  }
}