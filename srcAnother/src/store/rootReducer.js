import { combineReducers } from 'redux';
import Schedule from '../views/Schedule/reducer';
import List from '../views/List/reducer';
import Register from '../views/Register/reducer';
import searchTrainerReducer from '../views/Search/reducer';
import UpdateTrainer from '../views/UpdateTrainer/reducer';
import profileReducer from '../views/Profile/reducer';

const rootReducer = combineReducers({
  Register,
  List,
  Schedule,
  searchTrainerReducer,
  UpdateTrainer,
  profileReducer
});

export default rootReducer;