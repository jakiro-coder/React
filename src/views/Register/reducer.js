const initialState = {
  studentForm: {
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
    secondGuaranteePhone: 0,
  },
  message: {
    value: '',
    type: 'success',
    visible: false
  },
  extensionOptions: [],
  programOptions: [],
  isSecondGuarantor: false,
};

function UPDATE_STUDENT_FORM(state, action) {
  let newStudentForm = { ...state.studentForm };

  newStudentForm[action.payload.objectKey] = action.payload.value;

  return { ...state, studentForm: newStudentForm };
}

function CLEAN_STUDENT_FORM(state, action) {
  return { ...state, studentForm: initialState.studentForm };
}

function SET_MESSAGE_FORM(state, action) {
  const newMessage = { ...state.message };
  newMessage.value = action.payload.notify;
  newMessage.type = action.payload.type;
  newMessage.visible = action.payload.visible;

  return { ...state, message: newMessage };
}

function UPDATE_ID_NUMBER_EXTENSIONS(state, action) {
  const newCIExtensions = action.payload.extensionOptions.map((element) => {
    return element.nameId
  })
  let newStudentForm = { ...state.studentForm };
  newStudentForm.ciExtension = newCIExtensions[1];
  return { ...state, extensionOptions: newCIExtensions, studentForm: newStudentForm };
}

function UPDATE_PROGRAM_OPTIONS(state, action) {
  const newPrograms = action.payload.programOptions;
  const newProgramForm = { ...state.studentForm };
  newProgramForm.programId = Object.values(newPrograms)[0];
  return { ...state, programOptions: newPrograms, studentForm: newProgramForm };
}

function ACTIVE_SECOND_GUARANTOR(state, action) {
  return { ...state, isSecondGuarantor: action.payload };
}

export default function registerStudentReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_STUDENT_FORM':
      return UPDATE_STUDENT_FORM(state, action);
    case 'CLEAN_STUDENT_FORM':
      return CLEAN_STUDENT_FORM(state, action);
    case 'SET_MESSAGE_FORM':
      return SET_MESSAGE_FORM(state, action);
    case 'UPDATE_PROGRAM_OPTIONS':
      return UPDATE_PROGRAM_OPTIONS(state, action);
    case 'UPDATE_ID_NUMBER_EXTENSIONS':
      return UPDATE_ID_NUMBER_EXTENSIONS(state, action);
    case 'ACTIVE_SECOND_GUARANTOR':
      return ACTIVE_SECOND_GUARANTOR(state, action);
    default:
      return state;
  }
}