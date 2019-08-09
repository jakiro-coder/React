import React, { useState } from 'react';
import InputField from '../InputField';
import PropTypes from 'prop-types';
import './style.css';

/** The autocomplete is a normal text input enhanced by a panel of suggested options. */

function AutocompleteField({ options, onSelect, label, disabled }) {

  const [state, setState] = useState({ filteredOptions: [], textValue: '', expanded: true });

  const updateFilter = (key, value) => {
    const filteredOptions = [];
    options.map((option) => {
      if (option.value.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
        filteredOptions.push({
          id: option.id,
          value: option.value,
          img: option.img
        });
      }
    })
    setState({
      ...state,
      filteredOptions: filteredOptions,
      textValue: value,
    });
  }

  const handleClick = (option) => {
    const newOptions = [option];
    state.textValue = option.value;
    state.filteredOptions = newOptions;
    onSelect(option.id)
    setState(state);
    hideList();
  }

  function showList() {
    return setState({ ...state, expanded: true })
  }

  function hideList() {
    setState({ ...state, expanded: false })
  }

  const displayList = state.filteredOptions.map((option, index) => {
    return (
      <div className="itemAutocomplete" key={index} onClick={() => handleClick(option)}>
        <img className="imgItem" src={option.img === undefined ? "" : option.img} alt=""></img>
        {option.value}
      </div>
    )
  })

  const { textValue } = state;
  return (
    <div className="autocompleteComponent">
      <InputField label={label} disabled={disabled} value={textValue} onFocus={showList} onChange={updateFilter}></InputField>
      <div className="itemsContainer">{state.expanded && displayList}</div>
    </div>
  )
}

AutocompleteField.defaultProps = {
  label: '',
  disabled: false,
};

AutocompleteField.propTypes = {

  /** The text on the button */
  label: PropTypes.string,
  /** The type of style of the button */
  disabled: PropTypes.bool,
  /** The name of the icon class from material-icons */
  onSelect: PropTypes.func,
  /** The options of list */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      img: PropTypes.string,
    })
  ),
}



export default AutocompleteField;