import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'material-icons-react';
import './style.css';

/** This is the component for upload files */

function FileChooser({ objectKey, label, icon, onChange, value, accept, multiple, placeholder}) {
  const [initialValue] = useState(value);

  function handleOnChange(event) {
    const files = event.target.files;
    onChange(objectKey, files);
  }
  const isDirty = value === initialValue? '' : 'dirty';
  return (
    <div className='fileChooserComponent'>
      <input className={isDirty} type='file' onChange={handleOnChange} accept={accept} multiple={multiple?'multiple': ''}/>
      <span className='label'>{label}</span>
      <span class='button'><Icon icon={icon} /></span>
      <label className={value?'':'placeholder'}>{value? value: placeholder}</label>
    </div>
  );
}

FileChooser.defaultProps = {
  label: '',
  icon: 'cloud_upload',
  accept: '',
  value: null,
  onChange: ()=> {},
  multiple: false,
  placeholder: 'No file selected',
}

FileChooser.propTypes = {
  /** Key for the use multiples files  */
  objectKey: PropTypes.string,
  /** A label next to the input */ 
  label: PropTypes.string, 
  /** The name of the icon class from material-icons */
  icon: PropTypes.string,
  /** The callback to be executed with an action, that has for parameters the key and value of the input */ 
  onChange: PropTypes.func, 
  /** The text to show inside the input */
  value: PropTypes.string, 
  /** Text for the selected types of supported files */
  accept: PropTypes.string,
  /** Value for the select multiple files */
  multiple: PropTypes.bool,
  /** The text inside the field placeholder*/
  placeholder: PropTypes.string,
}
 
export default FileChooser;