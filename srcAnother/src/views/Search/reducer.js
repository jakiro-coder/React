const initialState = {
  trainers: [],
  searchTrainer: '',
  showMessage: false,
  disabled: true,
};

function SET_SEARCH_TRAINERS(state, action) {
  let newTrainer = []
  let newShowMessage = action.payload && !action.payload.trainers.length;

  if (!action.payload) {
    return { ...state, trainers: newTrainer, showMessage: newShowMessage };
  }
  else {
    newTrainer = action.payload.trainers.map((element) => {
      return {
        trainerId: element.trainerId,
        names: element.names,
        firstLastName: element.firstLastName,
        favoriteName: element.favoriteName,
        email: element.email
      };
    })
    return { ...state, trainers: newTrainer, showMessage: newShowMessage };
  }
}

function UPDATE_SEARCH(state, action) {
  const newSerachTrainer = action.payload.valueSearch;
  return { ...state, searchTrainer: newSerachTrainer };
}

function CLEAN_SEARCH(state, action) {
  return { ...state, trainers: initialState.trainers };
}

export default function searchTrainerReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SEARCH_TRAINERS':
      return SET_SEARCH_TRAINERS(state, action);
    case 'UPDATE_SEARCH':
      return UPDATE_SEARCH(state, action);
      case 'CLEAN_SEARCH':
        return CLEAN_SEARCH(state, action);
    default:
      return state;
  }
}