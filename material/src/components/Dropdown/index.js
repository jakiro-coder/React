import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

/** The Dropdown component is a selector options. */

function Dropdown({ objectKey, options, onChange, value, label, width, required }) {

  const [initialValue] = useState(value);

  const onChangeHandler = event => {
    onChange(objectKey, event.target.value);
  };

  const optionList = options.map((element, i) =>
    <option className='elementDropdown'
      key={i}
      value={element}>
      {element}
    </option>
  );

  const style = { width: `calc(${width}% - 20px` };
  const labelInput = (required) ? `${label} *` : label;

  const isDirty = value ? value.toString() === initialValue.toString() ? '' : 'dirty' : '';

  return (
    <section className="dropdownComponent" style={style}>
      <select id="Dropdown" className={`${isDirty} dropdown`} onChange={onChangeHandler}>
        <option value="initial">{value}</option>
        {optionList}
      </select>
      <label>{labelInput}</label>
    </section>
  )
}

Dropdown.defaultProps = {
  options: [],
  onChange: function () { },
  value: '',
  label: '',
  width: 100,
  required: false,
};

Dropdown.propTypes = {
  /** List of elements of dropdown */
  options: PropTypes.array,
  /** The callback to be executed when selected a one option */
  onChange: PropTypes.func,
  /** Is the defaul value of the options */
  value: PropTypes.string,
  /** Tittle the component */
  label: PropTypes.string,
  /** The width of the Dropdown*/
  width: PropTypes.number,
  /** Defines if the input is Required */
  required: PropTypes.bool,
};

export default Dropdown;