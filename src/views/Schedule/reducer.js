const initialState = {
  schedules: [],
};

function SET_SCHEDULES(state, action) {
  let newSchedules = [...state.schedules];
  newSchedules = action.payload;
  return { ...state, schedules: newSchedules };
}

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SCHEDULES':
      return SET_SCHEDULES(state, action);
    default:
      return state;
  }
}