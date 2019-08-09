const initialState = {
  weekSchedule: {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  },
  schedules: [],
  days: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ],
  scholarInformation: {},
  scholarInformationModule: []
};

function SET_STUDENT_WEEK_SCHEDULE(state, action) {
  let weekSchedule = { ...state.weekSchedule };
  weekSchedule = action.payload.weekSchedule;
  const schedules = action.payload.schedules;
  return { ...state, weekSchedule: weekSchedule, schedules };
}

function SET_SCHOLAR_INFORMATION(state, action) {
  return { ...state, scholarInformation: action.payload.scholarInformation, scholarInformationModule: action.payload.scholarInformationModule };
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_STUDENT_WEEK_SCHEDULE':
      return SET_STUDENT_WEEK_SCHEDULE(state, action);
    case 'SET_SCHOLAR_INFORMATION':
      return SET_SCHOLAR_INFORMATION(state, action);
    default:
      return state;
  }
}