import actions from './actions';
import TrainersService from '../../services/Trainer';
import debounce from '../../services/Utils/debounce';
import Helper from '../../utilities/Helper';

async function SEARCH_TRAINERS(action, dispatch, state) {
  const currentValue = action.payload.value;
  let query;

  debounce(async () => {
    if (currentValue.length > 2) {
      if (currentValue.split(' ').length > 1 && currentValue.split(' ').length < 3) {
        let [trainerName, trainerLastName] = currentValue.split(' ');
        trainerName = Helper.convertTheFirstCharacterToUppercase(trainerName);
        trainerLastName = Helper.convertTheFirstCharacterToUppercase(trainerLastName);
        query = `?$filter=contains(favoriteName,'${trainerName}') and contains(firstLastName,'${trainerLastName}')
                or contains(favoriteName,'${trainerLastName}') and contains(firstLastName,'${trainerName}') &$orderby=firstLastName`;
      } else {
        const nameOrLastname = Helper.convertTheFirstCharacterToUppercase(currentValue);
        query = `?$filter=contains(favoriteName,'${nameOrLastname}') or contains(firstLastName,'${nameOrLastname}') &$orderby=firstLastName`
      }
      const response = await TrainersService.getTrainersByQuery(query);
      dispatch(actions.SET_SEARCH_TRAINERS({ trainers: response.data }));
    } else {
      dispatch(actions.SET_SEARCH_TRAINERS());
    }
    dispatch(actions.UPDATE_SEARCH({ valueSearch: currentValue }))
  });
}

export default function searchTrainersMiddleware(action, dispatch, state) {
  switch (action.type) {
    case 'SEARCH_TRAINERS':
      return SEARCH_TRAINERS(action, dispatch, state);
    default:
      return state;
  }
}