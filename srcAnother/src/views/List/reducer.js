const initialState = {
  trainers: [],
  pagination: {
    totalElements: 0,
    elementsForPage: "10",
    elementActive: 0
  },
  message: {
    value: '',
    type: 'success',
    visible: false
  },
  modal: {
    visibility: false,
    value: ''
  },
  filterByActive: true,
};

function SET_TRAINERS(state, action) {
  const { trainers } = action.payload;
  return { ...state, trainers: trainers };
}

function UPDATE_LIST_TRAINER(state, action) {
  const { trainer } = action.payload;
  const listTrainers = [...state.trainers]
  const findTrainerPosition = listTrainers.findIndex(data => data.trainerId === trainer.trainerId);
  listTrainers[findTrainerPosition] = trainer;
  return { ...state, trainers: listTrainers }
}

function SET_PAGINATION(state, action) {
  const data = action.payload;
  if (data.pagination !== undefined) {
    const newPagination = { ...data.pagination }
    return { ...state, pagination: newPagination }
  }
  const newPagination = { ...state.pagination };
  newPagination["elementActive"] = data.page.elementActive
  return { ...state, pagination: newPagination }
}

function SET_MESSAGE_STATE(state, action) {
  const newMessage = { ...state.message };
  newMessage.value = action.payload.error;
  newMessage.type = action.payload.type;
  newMessage.visible = action.payload.visible;
  return { ...state, message: newMessage };
}

function SET_MODAL(state, action) {
  const newModal = { ...state.modal };
  newModal.visibility = !action.payload.visible;
  newModal.value = action.payload.value;
  return { ...state, modal: newModal };
}

function SET_FILTER_BY_ACTIVE(state, action) {
  return { ...state, filterByActive: action.payload };
}

export default function TrainerReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TRAINERS':
      return SET_TRAINERS(state, action);
    case 'UPDATE_LIST_TRAINER':
      return UPDATE_LIST_TRAINER(state, action);
    case 'SET_PAGINATION':
      return SET_PAGINATION(state, action);
    case 'SET_MESSAGE_STATE':
      return SET_MESSAGE_STATE(state, action);
    case 'SET_MODAL':
      return SET_MODAL(state, action);
    case 'SET_FILTER_BY_ACTIVE':
      return SET_FILTER_BY_ACTIVE(state, action);
    default:
      return state;
  }
}