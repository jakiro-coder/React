import actions from './actions';
import StudentService from '../../services/Student';

function GET_SCHEDULES(action, dispatch, state) {
  StudentService.getSchedule()
    .then(response => {
      dispatch(actions.SET_SCHEDULES({ schedules: response }))
    });
}

export default function scheduleMiddleware(action, dispatch, state) {
  switch (action.type) {
    case 'GET_SCHEDULES':
      return GET_SCHEDULES(action, dispatch, state);
    default:
      return state;
  }
}