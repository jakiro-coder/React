import actions from './actions';
import TrainerService from '../../services/Trainer';

function GET_SCHEDULE(action, dispatch, state) {
	TrainerService.getSchedule()
		.then(response => {
			dispatch(actions.SET_SCHEDULES({ schedules: response }))
		});
}

function scheduleMiddleware(action, dispatch, state) {
	switch (action.type) {
		case 'GET_SCHEDULE':
			return GET_SCHEDULE(action, dispatch, state);
		default:
			return state;
	}
}

export default scheduleMiddleware;