import React from 'react';
import Icon from 'material-icons-react';
import PropTypes from 'prop-types';
import './style.css';
import InputField from '../InputField';

/** 
  A search component to look for matching strings.
*/

function SearchBox({ onPressEnter, ...leftProps }) {
  return (
    <section className="searchBoxComponent">
      <InputField
        onPressEnter={onPressEnter}
        {...leftProps}
      />
      <button onClick={onPressEnter}>
        <Icon icon={'search'} />
      </button>
    </section>
  );
}

InputField.propTypes = {
  /** A label next to the search box */
  label: PropTypes.string,
  /** The callback to be executed with an action, that has for parameters the key and value of the search box */
  onChange: PropTypes.func,
  /** A unique identifier for the component  */
  objectKey: PropTypes.string,
  /** Places the cursor inside the field   */
  autoFocus: PropTypes.bool,
  /** Enables or disables the search box wether a request is going on */
  loading: PropTypes.bool,
  /** The text inside the field */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

export default SearchBox;