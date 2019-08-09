import actions from './actions';
import StudentService from '../../services/Student';
import ProgramService from '../../services/Program';
import Formater from '../../Utilities/Formater';

function POST_STUDENT(action, dispatch, state) {
  const studentData = { ...state.registerStudentReducer.studentForm };
  const programOptions = { ...state.registerStudentReducer.programOptions };
  studentData.birthdate = Formater.formatDateToYYMMDD(studentData.birthdate);
  if (!state.registerStudentReducer.isSecondGuarantor) {
    studentData.secondGuaranteeName = '';
    studentData.secondGuaranteeCi = '';
    studentData.secondGuaranteePhone = 0;
  }

  studentData.programId = Object.keys(programOptions)[Object.values(programOptions).indexOf(studentData.programId)];
  StudentService.postStudent(studentData)
    .then(response => {
      dispatch(actions.SET_MESSAGE_FORM({ notify: `The scholar: ${response.data.favoriteName} ${response.data.firstLastName} has been Registered`, type: "success", visible: true }))
      dispatch(actions.CLEAN_STUDENT_FORM())
    }).catch((error) => {
      dispatch(actions.SET_MESSAGE_FORM({ notify: error, type: 'fail', visible: true }))
    });
}

function GET_ID_NUMBER_EXTENSIONS(action, dispatch, state) {
  StudentService.getCIExtensions()
    .then(response => {
      dispatch(actions.UPDATE_ID_NUMBER_EXTENSIONS({ extensionOptions: response.data }))
    });
}

async function GET_PROGRAMS(action, dispatch, state) {
  const response = await ProgramService.getPrograms();
  const options = {}
  response.data.forEach(element => {
    options[element.programId] = element.code;
  });
  dispatch(actions.UPDATE_PROGRAM_OPTIONS({ programOptions: options }))
}

export default function registerStudentMiddleware(action, dispatch, state) {
  switch (action.type) {
    case 'POST_STUDENT':
      return POST_STUDENT(action, dispatch, state);
    case 'GET_PROGRAMS':
      return GET_PROGRAMS(action, dispatch, state);
    case 'GET_ID_NUMBER_EXTENSIONS':
      return GET_ID_NUMBER_EXTENSIONS(action, dispatch, state);
    default:
      return state;
  }
}