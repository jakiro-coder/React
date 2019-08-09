import scheduleMiddleware from '../views/Schedule/middleware';
import trainerMiddleware from '../views/List/middleware';
import registerMiddleware from '../views/Register/middleware';
import searchTrainersMiddleware from '../views/Search/middleware';
import updateTrainerMiddleware from '../views/UpdateTrainer/middleware';
import profileMiddleware from '../views/Profile/middleware';

const middlewares = [
	registerMiddleware,
	trainerMiddleware,
	scheduleMiddleware,
	searchTrainersMiddleware,
	updateTrainerMiddleware,
	profileMiddleware
];

export default function rootMiddleware(state) {
	return function (dispatch) {
		return function (action) {
			dispatch(action);
			middlewares.forEach(callback => callback(action, dispatch, state.getState()));
		};
	}
}
