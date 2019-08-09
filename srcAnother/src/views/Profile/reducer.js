const initialState = {
  formTrainer: {},
  weekSchedule: {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  },
  modules: [],
  days: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ],
  schedules:[],
};

function SET_TRAINER_WEEK_SCHEDULE(state, action) {
  let weekSchedule = { ...state.weekSchedule };
  weekSchedule = action.payload.weekSchedule;
  const newSchedules = action.payload.schedules;
  return { ...state, weekSchedule: weekSchedule, schedules: newSchedules };
}

function SET_TRAINER(state, action) {
  const newTrainerForm = action.payload.trainer;
  return { ...state, formTrainer: newTrainerForm };
}

function SET_MODULES(state, action) {
  const newModules = action.payload.modules;
  return { ...state, modules: newModules };
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TRAINER_WEEK_SCHEDULE':
      return SET_TRAINER_WEEK_SCHEDULE(state, action);
    case 'SET_TRAINER':
      return SET_TRAINER(state, action);
    case 'SET_MODULES':
      return SET_MODULES(state, action);
    default:
      return state;
  }
}
