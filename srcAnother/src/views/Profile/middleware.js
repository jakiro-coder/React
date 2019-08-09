import actions from './actions';
import TrainerService from '../../services/Trainer';
import ModuleService from '../../services/Module';

function filterScheduleByDay(trainerWeekSchedules, dayKey, weekDays) {
  const day = weekDays.indexOf(dayKey) + 1;
  return trainerWeekSchedules.filter(
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

async function GET_CURRENT_TRAINER(action, dispatch, state) {
  const query = `?$filter=trainerId eq ${action.payload}`;
  const response = await TrainerService.getTrainersByQuery(query);
  dispatch(actions.SET_TRAINER({ trainer: response.data[0] }));
}

async function GET_MODULES_BY_TRAINER(action, dispatch, state) {
  const response = await ModuleService.getModulesByTrainer(action.payload);
  dispatch(actions.SET_MODULES({ modules: response.data }));
}

async function GET_TRAINER_WEEK_SCHEDULE(action, dispatch, state) {
  const response = await ModuleService.trainerWeekSchedule(`?$filter=trainerId eq ${action.payload.id}`);
  const weekSchedule = {
    Monday: filterScheduleByDay(response.data, 'Monday', state.profileReducer.days),
    Tuesday: filterScheduleByDay(response.data, 'Tuesday', state.profileReducer.days),
    Wednesday: filterScheduleByDay(response.data, 'Wednesday', state.profileReducer.days),
    Thursday: filterScheduleByDay(response.data, 'Thursday', state.profileReducer.days),
    Friday: filterScheduleByDay(response.data, 'Friday', state.profileReducer.days),
  }
  dispatch(actions.SET_TRAINER_WEEK_SCHEDULE({ weekSchedule, schedules:response.data }));
}

function profileMiddleware(action, dispatch, state) {
  switch (action.type) {
    case 'GET_MODULES_BY_TRAINER':
      return GET_MODULES_BY_TRAINER(action, dispatch, state);
    case 'GET_TRAINER_WEEK_SCHEDULE':
      return GET_TRAINER_WEEK_SCHEDULE(action, dispatch, state);
    case 'GET_CURRENT_TRAINER':
      return GET_CURRENT_TRAINER(action, dispatch, state);
    default:
      return state;
  }
}

export default profileMiddleware;
