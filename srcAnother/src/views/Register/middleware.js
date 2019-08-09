import actions from './actions';
import TrainerService from '../../services/Trainer';

function POST_TRAINER(action, dispatch, state) {
	TrainerService.postTrainer(state.Register.formTrainer)
		.then(response => {
			dispatch(actions.SET_MESSAGE({ error: `A new Trainer ${response.data.favoriteName} ${response.data.firstLastName} has been registered successfully`, type: "success", visible:true }))
			dispatch(actions.CLEAR_FORM())
		}).catch((error) => {
			dispatch(actions.SET_MESSAGE({ error: error, type: "fail", visible:true }))
		})
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
			dispatch(actions.UPDATE_BANKS({extensionBanks: response.data}))
		})
}

function registerMiddleware(action, dispatch, state) {
	switch (action.type) {
		case 'POST_TRAINER':
			return POST_TRAINER(action, dispatch, state);
		case 'GET_CI_EXTENSIONS':
			return GET_CI_EXTENSIONS(action, dispatch, state);
		case 'GET_BANKS':
			return GET_BANKS(action, dispatch, state);
		default:
			return state;
	}
}

export default registerMiddleware;