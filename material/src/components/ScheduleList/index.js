import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TimeOption from '../TimeOption';
import './style.css';

/** Use for show the schedules list that was selected */

function ScheduleList({ list, minutes, onClick, className }) {
  const [selectedHour, setHour] = useState(list);
  const [selectedMinute, setMinute] = useState(minutes);

  function handleClickHour(option) {
    setHour(option);
    list.find(item => {
      item === option ? item.isSelected = true : item.isSelected = false;
    })
    onClick(option);
  };

  function handleClickMinute(option) {
    setMinute(option);
    minutes.find(item => {
      item === option ? item.isSelected = true : item.isSelected = false;
    })
    onClick(option);
  };

  const hoursList = list.map((schedule, index) => {
    return(
      <TimeOption
        key={index}
        className={className}
        optionsList={[schedule.hour]}
        currentOption={schedule}
        onClick={() => handleClickHour(schedule)}
        active={schedule.isSelected}
      />)
  });

  const minutesList = minutes.map((minuteOption, index) => {
    return (
      <TimeOption
        key={index}
        className={className}
        optionsList={[minuteOption.minutes]}
        currentOption={minuteOption}
        onClick={() => handleClickMinute(minuteOption)}
        active={minuteOption.isSelected}
      />)
  });

  return (
    <div className={`scheduleListComponent ${className}`}>
      <div className="hourSection">
        <label className="title">Hour</label>
        {hoursList}
      </div>
      <div className="minuteSection">
        <label className="title">Min</label>
        {minutesList}
      </div>
    </div>
  );
}

ScheduleList.propTypes = {
  /** The hour list for the selected schedule */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      /** Hours list */
      hour: PropTypes.number,
      /** State of the hour*/
      isSelected: PropTypes.bool
    })
  ),
  /** The minutes list for the selected schedule */
  minutes: PropTypes.arrayOf(
    PropTypes.shape({
      /** Minutes list */
      minutes: PropTypes.string,
      /** State of the minutes*/
      isSelected: PropTypes.bool
    })
  ),
  /** The callback to execute when it's clicked-on */
  onClick: PropTypes.func,
  /** The className of the selected schedule*/
  className: PropTypes.string
}

export default ScheduleList;