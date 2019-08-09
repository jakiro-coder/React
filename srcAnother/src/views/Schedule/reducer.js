const initialState = {
  schedules: []
};

function SET_SCHEDULES(state, action) {
  console.log(action.payload);
  const newSchedules = action.payload.schedules;
  return { ...state, schedules: newSchedules };
}

export default function ScheduleReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SCHEDULES':
      return SET_SCHEDULES(state, action);
    default:
      return state;
  }
}