import actions from './actions';
import StudentService from '../../services/Student';


const ERROR_MESSAGE = 'The information cannot be updated';
const ORDER_BY_QUERY = '&$orderby=firstLastName';
const IS_ACTIVE_QUERY = `?$filter=isActive eq`;

function GET_STUDENTS(action, dispatch, state) {
  StudentService.getStudentsByQuery(`${IS_ACTIVE_QUERY} ${action.payload.state} ${ORDER_BY_QUERY}`)
    .then(response => {
      const dataShort = response.data.slice(0, action.payload.elementsForPageByDropdown);
      dispatch(actions.SET_STUDENTS({ students: dataShort }))
      dispatch(actions.SET_PAGINATION({ pagination: { totalElements: response.data.length, elementsForPage: action.payload.elementsForPageByDropdown, elementActive: 1 } }))
    });
}

function GET_LEFT_PAGE(action, dispatch, state) {
  const SKIP_QUERY = `&$skip=${action.payload.elementActive * state.studentReducer.pagination.elementsForPage - state.studentReducer.pagination.elementsForPage}`;
  const TOP_QUERY = `&$top=${state.studentReducer.pagination.elementsForPage}`;
  StudentService.getStudentsByQuery(`${IS_ACTIVE_QUERY} ${action.payload.isActive} ${SKIP_QUERY} ${TOP_QUERY} ${ORDER_BY_QUERY}`)
    .then(response => {
      dispatch(actions.SET_STUDENTS({ students: response.data }))
      dispatch(actions.SET_PAGINATION({ page: { elementActive: action.payload.elementActive } }))
    });
}

function GET_RIGHT_PAGE(action, dispatch, state) {
  const SKIP_QUERY = `&$skip=${action.payload.elementActive * state.studentReducer.pagination.elementsForPage - state.studentReducer.pagination.elementsForPage}`;
  const TOP_QUERY = `&$top=${state.studentReducer.pagination.elementsForPage}`;
  StudentService.getStudentsByQuery(`${IS_ACTIVE_QUERY} ${action.payload.isActive} ${SKIP_QUERY} ${TOP_QUERY} ${ORDER_BY_QUERY}`)
    .then(response => {
      dispatch(actions.SET_STUDENTS({ students: response.data }))
      dispatch(actions.SET_PAGINATION({ page: { elementActive: action.payload.elementActive } }))
    });
}

async function CHANGE_SCHOLAR_STATE(action, dispatch, state) {
  const listStudent = state.studentReducer.students;
  const student = listStudent.find(student => student.idStudent === action.payload.idStudent)
  student.isActive = !student.isActive;
  try {
    const response = await StudentService.patchStudent(student.idStudent, student);
    const state = student.isActive ? 'enabled' : 'disabled';
    dispatch(actions.SET_LIST_SCHOLAR({ student: response.data }))
    dispatch(actions.SET_MESSAGE_STATE({ notify: `The scholar ${response.data.favoriteName} was ${state}`, type: 'success', visible: true }))
  } catch (error) {
    dispatch(actions.SET_MESSAGE_STATE({ notify: ERROR_MESSAGE, type: 'fail', visible: true }))
  }
}

export default function studentMiddleware(action, dispatch, state) {
  switch (action.type) {
    case 'GET_STUDENTS':
      return GET_STUDENTS(action, dispatch, state);
    case 'GET_LEFT_PAGE':
      return GET_LEFT_PAGE(action, dispatch, state);
    case 'GET_RIGHT_PAGE':
      return GET_RIGHT_PAGE(action, dispatch, state);
    case 'CHANGE_SCHOLAR_STATE':
      return CHANGE_SCHOLAR_STATE(action, dispatch, state);
    default:
      return state;
  }
}