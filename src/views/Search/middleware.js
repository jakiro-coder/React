import actions from './actions';
import StudentService from '../../services/Student';
import debounce from '../../services/Utils/debounce';
import Helper from '../../Utilities/Helper';

async function SEARCH_SCHOLARS(action, dispatch, state) {
  const currentValue = action.payload.value;
  let query;

  debounce(async ()=>{
    if (currentValue.length > 2) {
      if (currentValue.split(' ').length > 1 && currentValue.split(' ').length < 3) {
        let [scholarName, scholarLastName] = currentValue.split(' ');
        scholarName = Helper.convertTheFirstCharacterToUppercase(scholarName);
        scholarLastName = Helper.convertTheFirstCharacterToUppercase(scholarLastName);
        query = `?$filter=contains(favoriteName,'${scholarName}') and contains(firstLastName,'${scholarLastName}')
                 or contains(favoriteName,'${scholarLastName}') and contains(firstLastName,'${scholarName}') &$orderby=firstLastName`;
      }
      else {
        const changedCurrentValue = Helper.convertTheFirstCharacterToUppercase(currentValue);
        query = `?$filter=contains(favoriteName,'${changedCurrentValue}') or contains(firstLastName,'${changedCurrentValue}') &$orderby=firstLastName`;
      }
      const response = await StudentService.getStudentsByQuery(query);
      dispatch(actions.UPDATE_STUDENTS({ students: response.data }));
    } else {
      dispatch(actions.UPDATE_STUDENTS());
    }
    dispatch(actions.UPDATE_SEARCH({ searchValue: currentValue }));
  },500)
}

export default function searchScholarMiddleware(action, dispatch, state) {
  switch (action.type) {
    case 'SEARCH_SCHOLARS':
      return SEARCH_SCHOLARS(action, dispatch, state);
    default:
      return state;
  }
}