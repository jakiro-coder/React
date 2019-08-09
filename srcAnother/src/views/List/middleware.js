import actions from './actions';
import TrainerService from '../../services/Trainer';

/** this functions sets the trainer's middelware depending on isActive property */
async function GET_TRAINERS(action, dispatch, state) {
	const response = await TrainerService.getTrainersByQuery(`?$filter=isActive eq ${action.payload.state} &$orderby=firstLastName`);
	const dataShort = response.data.slice(0, action.payload.elementsForPageByDropdown);
	dispatch(actions.SET_TRAINERS({ trainers: dataShort }))
	dispatch(actions.SET_PAGINATION({ pagination: { totalElements: response.data.length, elementsForPage: action.payload.elementsForPageByDropdown, elementActive: 1 } }))
}

/** This function manage the query when a page is changed to the left */
function GET_LEFT_PAGE(action, dispatch, state) {
	TrainerService.getTrainersByQuery(`?$skip=${action.payload.pagination * state.List.pagination.elementsForPage - state.List.pagination.elementsForPage}&$top=${state.List.pagination.elementsForPage}&$filter=isActive eq ${action.payload.isActive}&$orderby=firstLastName`)
		.then(response => {
			dispatch(actions.SET_TRAINERS({ trainers: response.data }))
			dispatch(actions.SET_PAGINATION({ page: { elementActive: action.payload.pagination } }))
		});
}

/** This function manage the query when a page is changed to the right */
function GET_RIGHT_PAGE(action, dispatch, state) {
	TrainerService.getTrainersByQuery(`?$skip=${action.payload.pagination * state.List.pagination.elementsForPage - state.List.pagination.elementsForPage}&$top=${state.List.pagination.elementsForPage}&$filter=isActive eq ${action.payload.isActive}&$orderby=firstLastName`)
		.then(response => {
			dispatch(actions.SET_TRAINERS({ trainers: response.data }))
			dispatch(actions.SET_PAGINATION({ page: { elementActive: action.payload.pagination } }))
		});
}

async function CHANGE_TRAINER_STATE(action, dispatch, state) {
	const listTrainers = state.List.trainers;
	const trainer = listTrainers.find(trainer => trainer.trainerId === action.payload)
	trainer.isActive = !trainer.isActive;
	try {
		const response = await TrainerService.patchTrainer(trainer)
		const state = trainer.isActive ? 'Activate' : 'Deactivate';
		dispatch(actions.UPDATE_LIST_TRAINER({ trainer: response.data }))
		dispatch(actions.SET_MESSAGE_STATE({ error: `The user ${response.data.favoriteName} ${response.data.firstLastName} was ${state}`, type: 'success',  visible: true }))
	} catch (error) {
		dispatch(actions.SET_MESSAGE_STATE({ error: `The information cannot be updated`, type: 'fail', visible:true }))
	}
}

function trainerMiddleware(action, dispatch, state) {
	switch (action.type) {
		case 'GET_TRAINERS':
			return GET_TRAINERS(action, dispatch, state);
		case 'GET_LEFT_PAGE':
			return GET_LEFT_PAGE(action, dispatch, state);
		case 'GET_RIGHT_PAGE':
			return GET_RIGHT_PAGE(action, dispatch, state);
		case 'CHANGE_TRAINER_STATE':
			return CHANGE_TRAINER_STATE(action, dispatch, state);
		default:
			return state;
	}
}

export default trainerMiddleware;