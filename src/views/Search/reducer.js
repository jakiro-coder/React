const initialState = {
  students: [],
  showMessage: false,
  searchValue: '',
  disabled:true,
};

function UPDATE_STUDENTS(state, action) {
  const newStudent = []
  let newShowMessage = false;

  if (action.payload && action.payload.students.length === 0) newShowMessage = true;

  if (!action.payload) {
    return { ...state, students: newStudent, showMessage: false };
  }

  action.payload.students.map((element) => {
    newStudent.push({
      id: element.idStudent,
      names: `${element.favoriteName} ${element.firstLastName}`,
      email: element.personalEmail
    })
  })
  return { ...state, students: newStudent, showMessage: newShowMessage };
}

function UPDATE_SEARCH(state, action) {
  const newSearchValue = action.payload.searchValue;
  return { ...state, searchValue: newSearchValue };
}

function CLEAN_SEARCH(state, action) {
  return { ...state, students: initialState.students };
}

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_STUDENTS':
      return UPDATE_STUDENTS(state, action);
    case 'UPDATE_SEARCH':
      return UPDATE_SEARCH(state, action);
    case 'CLEAN_SEARCH':
      return CLEAN_SEARCH(state, action);
    default:
      return state;
  }
}