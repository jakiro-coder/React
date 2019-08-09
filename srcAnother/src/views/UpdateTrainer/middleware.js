import actions from './actions';
import TrainerService from '../../services/Trainer';

async function GET_CURRENT_TRAINER(action, dispatch, state) {

  const query = `?$filter=trainerId eq ${action.payload}`;
  const response = await TrainerService.getTrainersByQuery(query);
  dispatch(actions.SET_TRAINER({ trainer: response.data[0] }));
}

async function UPDATE_TRAINER(action, dispatch, state) {
  try {
    const trainerBody = state.UpdateTrainer.formTrainer;
    const names = trainerBody.names.split(' ');
    const favoriteName = trainerBody.favoriteName;
    if (names.find(name => name === favoriteName)) {
      const response = await TrainerService.patchTrainer(trainerBody)
      dispatch(actions.SET_MESSAGE({ error: `The information of ${response.data.favoriteName} ${response.data.firstLastName} was updated`, type: 'success', visible: true }))
    }
    else {
      dispatch(actions.SET_MESSAGE({ error: `The "favorite name" is not among trainer names`, type: 'fail', visible: true }))
    }
  } catch (error) {
    dispatch(actions.SET_MESSAGE({ error: `The information cannot be updated`, type: 'fail', visible: true }))
  }
}

function GET_CI_EXTENSIONS(action, dispatch, state) {
  TrainerService.getCIExtensions()
    .then(response => {
      dispatch(actions.UPDATE_CI_EXTENSIONS({ extensionOptions: response.data }))
    })
}

function GET_BANKS(action, dispatch, state) {
  TrainerService.getBanks()
    .then(response => {
      dispatch(actions.UPDATE_BANKS({ extensionBanks: response.data }))
    })
}

function updateTrainerMiddleware(action, dispatch, state) {
  switch (action.type) {
    case 'UPDATE_TRAINER':
      return UPDATE_TRAINER(action, dispatch, state);
    case 'GET_CI_EXTENSIONS':
      return GET_CI_EXTENSIONS(action, dispatch, state);
    case 'GET_BANKS':
      return GET_BANKS(action, dispatch, state);
    case 'GET_CURRENT_TRAINER':
      return GET_CURRENT_TRAINER(action, dispatch, state);
    default:
      return state;
  }
}

export default updateTrainerMiddleware;
