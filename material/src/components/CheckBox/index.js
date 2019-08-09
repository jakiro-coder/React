import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';
import './style.css'

/** Provides the same functionality as a native <input type="checkbox"> enhanced with styling and animations. */

function CheckBox({ label, objectKey, onChange, checked, disabled }) {

  function handleOnChange(event) {
    onChange({
      label: label,
      objectKey: objectKey,
      checked: event.target.checked,
    });
  }

  return (
    <div className="checkBoxComponent">
      <input
        type="checkbox"
        id={objectKey}
        checked={checked}
        disabled={disabled}
        onChange={handleOnChange} />
      <label htmlFor={objectKey}>{label}</label>
    </div>
  )
}
CheckBox.defaultTypes = {
  label: '',
  objectKey: '',
  onChange: () => { },
  checked: false,
  disabled: false,
}

CheckBox.propTypes = {
  /** The label at the right of the checkbox */
  label: PropTypes.string.isRequired,
  /** The unique identifier for the option */
  objectKey: PropTypes.string.isRequired,
  /** The function to throw when the checkbox state changes */
  onChange: PropTypes.func.isRequired,
  /** The checked/unchecked state of the checkbox */
  checked: PropTypes.bool,
  /** The property to enable or disable the checkbox  */
  disabled: PropTypes.bool,
}

export default CheckBox;