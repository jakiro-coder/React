import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar'
import InputField from '../InputField';
import WithFade from '../WithFade';

import './style.css';

/**
  DatePicker component shows a calendar to choose a date in a d-m-yyyy format.
*/

function DatePicker({ separator, width, value, onChange, objectKey, validate, ...leftProps }) {

  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(getDate(value));

  const WIDTH_SELECTOR = {
    100: 'whole',
    50: 'half',
    30: 'third',
    25: 'fourth',
    20: 'fifth'
  }

  function isValidData(valueDay, valueMonth, valueYear) {
    if (valueDay && valueMonth && valueYear) {
      if (!isNaN(valueDay) && !isNaN(valueMonth) && !isNaN(valueYear)) {
        return true;
      }
    }
    return false;
  }

  function getDate(valueText) {
    if (valueText) {
      const valueArray = valueText.split(separator);
      const [valueDay, valueMonth, valueYear] = valueArray;
      if (isValidData(valueDay, valueMonth, valueYear)) {
        return new Date(parseInt(valueYear, 10), parseInt(valueMonth, 10) - 1, parseInt(valueDay, 10));
      }
    }
    return null;
  }

  function getDateString(valueDate) {
    if (valueDate) {
      return `${valueDate.getDate()}${separator}${valueDate.getMonth() + 1}${separator}${valueDate.getFullYear()}`;
    }
    return '';
  }

  function HandleOnChangeCalendar(valueOfCalendar) {
    onChange(objectKey, getDateString(valueOfCalendar, separator));
    setDate(valueOfCalendar);
  };

  function handleOnChange(objectKey, valueText) {
    onChange(objectKey, valueText);
    setDate(getDate(valueText));
  };

  function toggleCalendar() {
    setVisible(!visible);
  };

  return (
    <div className={`datePickerComponent ${WIDTH_SELECTOR[width]}`} >
        <InputField
          onClick={toggleCalendar}
          placeholder={'DD MM YYYY'}
          value={value}
          onChange={handleOnChange}
          objectKey={objectKey}
          validate = {validate}
          {...leftProps}
        />
          <Calendar className={visible ? '' : 'hideCalendar'}
            value={date}
            onChange={HandleOnChangeCalendar}
            onClickDay={toggleCalendar}
          />
        <WithFade visible={visible} type='white' onclickFade={toggleCalendar}>
        </WithFade>
    </div >
  );
}

DatePicker.defaultProps = {
  separator: '-',
  width: 100,
  value: '',
  onChange: (objectKey, value) => { },
  objectKey: '',
  validate: (objectKey, value) => { },
}

DatePicker.propTypes = {
  /** The character separating the date */
  separator: PropTypes.string,
  /** The width of the component, any of 5 values: '20', '25', '30', '50' or '100' */
  width: PropTypes.number,
  /** The text inside the field */
  value: PropTypes.string,
  /** The callback to be executed with an action, that has for parameters the key and value of the input */
  onChange: PropTypes.func,
  /** A unique identifier for the component  */
  objectKey: PropTypes.string,
  /** The callback to be executed with validate function, */
  validate: PropTypes.func,
}

export default DatePicker;