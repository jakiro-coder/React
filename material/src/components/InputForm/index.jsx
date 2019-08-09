import React from 'react';
import InputField from '../InputField';
import DatePicker from '../DatePicker';
import Dropdown from '../Dropdown';
import PropTypes from 'prop-types';
import './style.css';

/** group of inputField for to create fast formulary. */

function InputForm({ inputs }) {
  const inputFields = inputs.map((inputField, index) => {
    if (inputField.type === 'date') {
      return <DatePicker
        key={index}
        label={inputField.label}
        width={inputField.width}
        onChange={inputField.onChange}
        objectKey={inputField.objectKey}
        value={inputField.value}
        type={'text'}
        errorMesssage={inputField.errorMesssage}
        onFocus={inputField.onFocus}
        separator={inputField.separator}
        validate={inputField.validate}
        required={inputField.required}
      />
    } else if (inputField.type === 'select') {
      return <Dropdown
        key={index}
        objectKey={inputField.objectKey}
        options={inputField.options}
        label={inputField.label}
        onChange={inputField.onChange}
        value={inputField.value}
        width={inputField.width}
        required={inputField.required}
      />
    }
    return < InputField
      key={index}
      label={inputField.label}
      width={inputField.width}
      onChange={inputField.onChange}
      objectKey={inputField.objectKey}
      value={inputField.value}
      type={inputField.type}
      errorMesssage={inputField.errorMesssage}
      onFocus={inputField.onFocus}
      validate={inputField.validate}
      required={inputField.required}
    />
  });
  return (
    <div className="inputFormComponent">
      {inputFields}
    </div>
  );
}

InputForm.defaultProps = {
  inputs: []
}

InputForm.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      /** A label next to the input */
      label: PropTypes.string,
      /** The callback to be executed with an action, that has for parameters the key and value of the input */
      onChange: PropTypes.func,
      /** A unique identifier for the component  */
      objectKey: PropTypes.string,
      /** The text inside the field */
      value: PropTypes.oneOfType(
        PropTypes.string,
        PropTypes.number
      ),
      /** The input type */
      type: PropTypes.string,
      /** The message to show error */
      errorMesssage: PropTypes.string,
      /** The callback that executes when click inside of component */
      onFocus: PropTypes.func,
      /** The width of the input*/
      width: PropTypes.number,
    }),
    PropTypes.shape({
      /** A label next to the input */
      label: PropTypes.string,
      /** The callback to be executed with an action, that has for parameters the key and value of the input */
      onChange: PropTypes.func,
      /** A unique identifier for the component  */
      objectKey: PropTypes.string,
      /** The text inside the field */
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      /** The input type */
      type: PropTypes.string,
      /** The width of the input*/
      width: PropTypes.number,
      /** The options of select*/
      options: PropTypes.array,
    })
  ),
}

export default InputForm;