import actions from './actions';
import StudentService from '../../services/Student';
import ProgramService from '../../services/Program';
import Formater from '../../Utilities/Formater';

const ERROR_MESSAGE = 'The information cannot be updated';

async function GET_CURRENT_SCHOLAR(action, dispatch, state) {
  const query = `?$filter=idStudent eq ${action.payload.currentScholar}`;
  const response = await StudentService.getStudentsByQuery(query);
  response.data[0].birthdate = Formater.formatDateToDDMMYY(response.data[0].birthdate);
  if (response.data[0].secondGuaranteeName && response.data[0].secondGuaranteeCi) {
    dispatch(actions.ACTIVE_SECOND_GUARANTOR(true));
  } else {
    dispatch(actions.ACTIVE_SECOND_GUARANTOR(false));
  }
  dispatch(actions.SET_SCHOLAR({ scholar: response.data[0] }));
}

async function UPDATE_SCHOLAR_INFORMATION(action, dispatch, state) {
  try {
    const studentData = { ...state.updateScholarReducer.scholarForm }
    const names = studentData.names.split(' ');
    const favoriteName = studentData.favoriteName;

    if (names.find(name => name === favoriteName)){
      if (!state.updateScholarReducer.isSecondGuarantor) {
        studentData.secondGuaranteeName = '';
        studentData.secondGuaranteeCi = '';
        studentData.secondGuaranteePhone = 0;
      }
      const programOptions = { ...state.updateScholarReducer.programOptions };
      studentData.birthdate = Formater.formatDateToYYMMDD(studentData.birthdate);
      studentData.programId = Object.keys(programOptions)[Object.values(programOptions).indexOf(studentData.programId)];
      const response = await StudentService.patchStudent(studentData.idStudent, studentData);
      response.data.birthdate = Formater.formatDateToDDMMYY(response.data.birthdate, 10);
      dispatch(actions.SET_SCHOLAR({ scholar: response.data }));
      dispatch(actions.SET_MESSAGE_FORM({ error: `The information of ${response.data.favoriteName} ${response.data.firstLastName} was updated`, type: "success", visible: true }))
    }
    else {
      dispatch(actions.SET_MESSAGE_FORM({ error: `The "favorite name" is not among student names`, type: 'fail', visible: true }))       
    }
  }
  catch (error) {
    dispatch(actions.SET_MESSAGE_FORM({ error: ERROR_MESSAGE, type: "fail", visible: true }))
  }
}

async function GET_ID_NUMBER_EXTENSIONS(action, dispatch, state) {
  const response = await StudentService.getCIExtensions();
  dispatch(actions.UPDATE_ID_NUMBER_EXTENSIONS({ extensionOptions: response.data }))
}

async function GET_PROGRAMS(action, dispatch, state) {
  const response = await ProgramService.getPrograms();
  const options = {}
  response.data.forEach(element => {
    options[element.programId] = element.code;
  });
  dispatch(actions.UPDATE_PROGRAM_OPTIONS({ programOptions: options }))
}

export default function updateScholarMiddleware(action, dispatch, state) {
  switch (action.type) {
    case 'GET_CURRENT_SCHOLAR':
      return GET_CURRENT_SCHOLAR(action, dispatch, state);
    case 'GET_PROGRAMS':
      return GET_PROGRAMS(action, dispatch, state);
    case 'GET_ID_NUMBER_EXTENSIONS':
      return GET_ID_NUMBER_EXTENSIONS(action, dispatch, state);
    case 'UPDATE_SCHOLAR_INFORMATION':
      return UPDATE_SCHOLAR_INFORMATION(action, dispatch, state);
    default:
      return state;
  }
}