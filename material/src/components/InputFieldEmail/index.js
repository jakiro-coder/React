import React,{ useRef } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import './style.css'

/**
    Input that verify if the email entered is valid.
*/

function InputFieldEmail({ label, onChange, objectKey, autoFocus, loading, onPressEnter, value, placeholder}) {
  const pattern = '[A-Za-z0-9._%+-]{2,}[@]{1}[A-Za-z0-9-]{3,}[.]{1}[A-Za-z]{2,}';
  const refInput = useRef(null);
  let message = '';
    
  (function () {
    if (refInput.current)
    {
      message = refInput.current.querySelector('input').checkValidity() ? '' : <p className='errorEmail'>{'The email should has the following format: example@example.domain'}</p>;     
    }
  })();

  return (
    <div className='inputFieldEmailComponent' ref = {refInput}>
      <InputField
        label={label}
        onChange={onChange}
        objectKey={objectKey}
        autoFocus={autoFocus}
        loading={loading}
        onPressEnter={onPressEnter}
        value={value}
        placeholder={placeholder}
        pattern={pattern}     
        type={'text'}
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
  placeholder: 'example@example.domain',
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
  type: PropTypes.string,
  /** The text inside the field placeholder*/
  placeholder: PropTypes.string
}

export default InputFieldEmail;