import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'material-icons-react';
import './style.css';

/** The InputField wrapper component is a complete form control including a label, input and help text. */

function InputField({ label, onChange, objectKey, loading, autoFocus,
  onPressEnter, value, validate, required, type, onFocus,
  onBlur, placeholder, errorMesssage, onClick, pattern, width, step, min, max, id }) {

  const [initialValue] = useState(value);
  const [internalErrorMessage, updateMessage] = useState("");
  const [activeSection, updateActiveSection] = useState('');
  let [classCheck, updateClassCheck] = useState('hiddenInputField');
  const handleInputRef = useRef(null);

  if (value === initialValue) {
    classCheck = 'hiddenInputField';
  }

  function handleOnChange(event) {
    let message = "";
    let currentValueInsideInput = event.target.value;

    if(type ==='file'){
      const files = event.target.files;
      onChange(objectKey, files);
    }else {
      onChange(objectKey, currentValueInsideInput);
    }  
    try {
      validate(objectKey, currentValueInsideInput);
      handleInputRef.current.setCustomValidity(message);
      updateClassCheck('iconForCheck');
    } catch (error) {
      message = error.message;
      handleInputRef.current.setCustomValidity(message);
      updateClassCheck('hiddenInputField');
    }
    updateMessage(message)
  };

  const style = { width: `calc(${width}% - 20px` };
  const labelInput = (required) ? `${label} *` : label;

  function handleKeyPress(event) {

    if (event.key === 'Enter') {
      onPressEnter();
      event.preventDefault();
      event.stopPropagation();
    }
  };

  function showIsActive() {
    updateActiveSection('inputFocus');
  }

  function showIsDeactive() {
    updateActiveSection('inputNotFocus');
  }

  const isDirty = value ? value.toString() === initialValue.toString() ? '' : 'dirty' : '';

  return (
    <section className={`inputFieldComponent ${errorMesssage ? 'error' : ''} ${activeSection}`} style={style}>
      <input className={isDirty}
        onKeyPress={handleKeyPress}
        disabled={loading}
        ref={handleInputRef}
        value={value}
        onChange={handleOnChange}
        required={required}
        onClick={onClick}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        onFocus={showIsActive}
        onBlur={showIsDeactive}
        step={step}
        min={min}
        max={max}
        id={id}
      />
      <label> {labelInput} </label>
      <div className={classCheck}>
        <Icon icon={'check'} />
      </div>
      <p className="invalid">{errorMesssage ? errorMesssage : internalErrorMessage}</p>
    </section>
  );
}

InputField.defaultProps = {
  onChange: () => { },
  onPressEnter: () => { },
  loading: false,
  validate: (objectKey, value) => { },
  required: false,
  onClick: () => { },
  type: 'text',
  width: 100,
  step: 60,
  min: '',
  max: '',
  id: '',
}

InputField.propTypes = {
  /** A label next to the input */
  label: PropTypes.string,
  /** The callback to be executed with an action, that has for parameters the key and value of the input */
  onChange: PropTypes.func,
  /** A unique identifier for the component  */
  objectKey: PropTypes.string,
  /** Places the cursor inside the field   */
  autoFocus: PropTypes.bool,
  /** Enables or disables the input wether a request is going on */
  loading: PropTypes.bool,
  /** When press enter inside the field   */
  onPressEnter: PropTypes.func,
  /** The text inside the field */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /** When the cursor inside the field */
  onFocus: PropTypes.func,
  /** The input type */
  type: PropTypes.string,
  /** The callback to be executed with validate function, */
  validate: PropTypes.func,
  /** Defines if the input is Required */
  required: PropTypes.bool,
  /** The callback to be executed with an action when click */
  onClick: PropTypes.func,
  /** The width of the input*/
  width: PropTypes.number,
  /** When the cursor outside the field */
  onBlur: PropTypes.func,
  /** The text inside the field placeholder*/
  placeholder: PropTypes.string,
  /** The number of steps to change minute when type='time', 60 is a 1 min */
  step: PropTypes.number,
  /** The number is the min value in the time input */
  min: PropTypes.string,
  /** The number is the max value in the time input */
  max: PropTypes.string,
  /** The name of id of input */
  id: PropTypes.string,
}

export default InputField;