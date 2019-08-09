
import ModuleService from '../../services/Module';
import StudentService from '../../services/Student';
import actions from './actions';

function filterScheduleByDay(studentWeekSchedules, dayKey, weekDays) {
  const day = weekDays.indexOf(dayKey) + 1;
  return studentWeekSchedules.filter(
    schedule => schedule.day === day
  ).map((weekSchedule) => {
    const [startTimeHour, startTimeMinutes] = weekSchedule.startTime.split(":");
    const [endTimeHour, endTimeMinutes] = weekSchedule.endTime.split(":");
    weekSchedule.startTime = `${startTimeHour}:${startTimeMinutes}`;
    weekSchedule.endTime = `${endTimeHour}:${endTimeMinutes}`;
    return weekSchedule
  }).sort((firstSchedule, secondSchedule) => {
    if (firstSchedule.startTime > secondSchedule.startTime) {
      return 1;
    }
    if (firstSchedule.startTime < secondSchedule.startTime) {
      return -1;
    }
    return 0;
  });
}

async function GET_STUDENT_WEEK_SCHEDULE(action, dispatch, state) {
  const response = await ModuleService.studentweekschedule(`?$filter=studentId eq ${action.payload.id}`);
  const weekSchedule = {
    Monday: filterScheduleByDay(response.data, 'Monday', state.profileReducer.days),
    Tuesday: filterScheduleByDay(response.data, 'Tuesday', state.profileReducer.days),
    Wednesday: filterScheduleByDay(response.data, 'Wednesday', state.profileReducer.days),
    Thursday: filterScheduleByDay(response.data, 'Thursday', state.profileReducer.days),
    Friday: filterScheduleByDay(response.data, 'Friday', state.profileReducer.days),
  }
  dispatch(actions.SET_STUDENT_WEEK_SCHEDULE({ weekSchedule, schedules: response.data }));
}

async function GET_SCHOLAR_INFORMATION(action, dispatch, state) {
  const queryGetStudent = `?$filter=idStudent eq ${action.payload.id}`;
  const queryGetModule = `?$filter=studentId eq ${action.payload.id}`;
  try {
    const response = await StudentService.getStudentsByQuery(queryGetStudent);
    const moduleResponse = await ModuleService.getProfileInformationByQuery(queryGetModule);
    dispatch(actions.SET_SCHOLAR_INFORMATION({ scholarInformation: response.data[0], scholarInformationModule: moduleResponse.data }));
  } catch {

  }
}

function profileMiddleware(action, dispatch, state) {
  switch (action.type) {
    case 'GET_STUDENT_WEEK_SCHEDULE':
      return GET_STUDENT_WEEK_SCHEDULE(action, dispatch, state);
    case 'GET_SCHOLAR_INFORMATION':
      return GET_SCHOLAR_INFORMATION(action, dispatch, state);
    default:
      return state;
  }
}

export default profileMiddleware;
