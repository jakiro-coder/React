const initialState = {
  students: [],
  pagination: {
    totalElements: 0,
    elementsForPage: "10",
    elementActive: 0
  },
  active: true,
  message: {
    value: '',
    type: 'success',
    visible: false
  },
  modal: {
    visibility: false,
    value: ''
  }
};

function SET_STUDENTS(state, action) {
  const { students } = action.payload;
  return { ...state, students: students };
}

function SET_PAGINATION(state, action) {
  const data = action.payload;
  if (data.pagination !== undefined) {
    const newPagination = { ...data.pagination }
    return { ...state, pagination: newPagination }
  }
  const newPagination = { ...state.pagination };
  newPagination["elementActive"] = data.page.elementActive
  return { ...state, pagination: newPagination }
}

function SET_LIST_SCHOLAR(state, action) {
  const students = [...state.students];
  const newStudent = action.payload.student;
  const findStudent = students.find(student => student.idStudent === newStudent.idStudent);
  students[findStudent] = newStudent;
  return { ...state, students: students };
}

function SET_MESSAGE_STATE(state, action) {
  const newMessage = { ...state.message };
  newMessage.value = action.payload.notify;
  newMessage.type = action.payload.type;
  newMessage.visible = action.payload.visible;
  return { ...state, message: newMessage };
}

function SET_MODAL(state, action) {
  const newModal = { ...state.modal };
  newModal.visibility = !action.payload.visible;
  newModal.value = action.payload.value;
  return { ...state, modal: newModal };
}

function SET_IS_ACTIVE(state, action) {
  return { ...state, active: action.payload };
}

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_STUDENTS':
      return SET_STUDENTS(state, action);
    case 'SET_PAGINATION':
      return SET_PAGINATION(state, action);
    case 'SET_LIST_SCHOLAR':
      return SET_LIST_SCHOLAR(state, action);
    case 'SET_MESSAGE_STATE':
      return SET_MESSAGE_STATE(state, action);
    case 'SET_MODAL':
      return SET_MODAL(state, action);
    case 'SET_IS_ACTIVE':
      return SET_IS_ACTIVE(state, action);
    default:
      return state;
  }
}