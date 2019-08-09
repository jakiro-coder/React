import { combineReducers } from 'redux';
import scheduleReducer from '../views/Schedule/reducer';
import studentReducer from '../views/List/reducer';
import registerStudentReducer from '../views/Register/reducer';
import searchStudentReducer from '../views/Search/reducer';
import updateScholarReducer from '../views/UpdateScholar/reducer';
import profileReducer from '../views/Profile/reducer'
const rootReducer = combineReducers({
  scheduleReducer,
  studentReducer,
  registerStudentReducer,
  searchStudentReducer,
  updateScholarReducer,
  profileReducer
});

export default rootReducer;