import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import './style.css';

/**
    Input that verify if the password entered is weak, medium or strong.
*/

function InputFieldPassword({ label, onChange, objectKey, autoFocus, loading, onPressEnter, value }) {
  const [focus, setFocus] = useState(false);
  let message = '';
  let type = '';

  const weakRegex = /^(?=.*[a-zA-Z])[A-Za-z]{7,}[^'\s]+$/;
  const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{7,}[^'\s]+$/;
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&+-])[A-Za-z\d$@$!%*?&+-]{7,}[^'\s]+$/;

  function handleBlur() {
    setFocus(false);
  }

  function handleFocus() {
    setFocus(true);
  }

  function validateValue() {
    return focus && value;
  }

  function verifyRegex() {
    if (strongRegex.exec(value)) return type = "strong";
    if (mediumRegex.exec(value)) return type = "medium";
    if (weakRegex.exec(value)) return type = "weak";
  }

  if (validateValue()) {
    verifyRegex();
    const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
    message = type !== '' ? <p className={`password${capitalized}`}>{`The password is ${capitalized}`}</p> : '';
  }

  return (
    <div className={`inputFieldPasswordComponent ${type}`}>
      <InputField
        label={label}
        onChange={onChange}
        objectKey={objectKey}
        autoFocus={autoFocus}
        loading={loading}
        onPressEnter={onPressEnter}
        onBlur={handleBlur}
        value={value}
        onFocus={handleFocus}
        placeholder={'The password should has minimun 8 characteres'}
        pattern={'[\\S]{8,}'}
        type={'password'}
        id={'passwordMessage'}
      />
      {message}
    </div>
  );
}

InputField.defaultProps = {
  onChange: () => { },
  onPressEnter: () => { },
  autoFocus: false,
  loading: false,
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
  /** The text inside the field */
  value: PropTypes.string,
  /** The input type */
  type: PropTypes.string
}

export default InputFieldPassword;