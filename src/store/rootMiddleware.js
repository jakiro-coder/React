import scheduleMiddleware from '../views/Schedule/middleware';
import studentMiddleware from '../views/List/middleware';
import registerStudentMiddleware from '../views/Register/middleware';
import searchScholarMiddleware from '../views/Search/middleware';
import updateScholarMiddleware from '../views/UpdateScholar/middleware';
import profileMiddleware from '../views/Profile/middleware';

const middlewares = [
	scheduleMiddleware,
	studentMiddleware,
	registerStudentMiddleware,
	searchScholarMiddleware,
	updateScholarMiddleware,
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