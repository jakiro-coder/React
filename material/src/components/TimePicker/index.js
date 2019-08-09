import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../ActionButton';
import ScheduleList from '../ScheduleList';
import DayState from '../Hocs';
import './style.css';

const TIME_OPTIONS = [
  {
    label: 'Morning',
    startHour: 6,
    finishHour: 11,
    delay: 15,
    list: [],
    minutes: [],
    isSelected: false,
    className: "morning"
  },
  {
    label: 'Afternoon',
    startHour: 12,
    finishHour: 17,
    delay: 15,
    list: [],
    minutes: [],
    isSelected: false,
    className: "afternoon"
  },
  {
    label: 'Evening',
    startHour: 18,
    finishHour: 24,
    delay: 15,
    list: [],
    minutes: [],
    isSelected: false,
    className: "evening"
  },
];

/** Show the time options at now Morning, Afternoon and Evening */

function TimePicker({ dayState }) {

  const [selectedSchedule, setSchedule] = useState(getCurrentSchedule());
  const [currentClassName, setCurrentClassName] = useState(dayState);

  useEffect(() => {
    TIME_OPTIONS.forEach((option) => {
      if (selectedSchedule.className === option.className) {
        option.isSelected = true;
      }
    })
    createScheduleList(selectedSchedule);
  }, []);
  
  function createScheduleList(element) {
    const currentList = [...Array(element.finishHour).keys()].map(hour => hour + 1).filter(option => option >= element.startHour);
    const hours = currentList.map((currentHour, index) => {
      return {
        hour: currentHour,
        isSelected: index === 0 ? true : false
      }
    });
    const schedules = [];
    schedules.push(
      {
        minutes: '00',
        isSelected: true
      });
    let currentMinute = element.delay;
    while (currentMinute < 60) {
      schedules.push({
        minutes: String(currentMinute),
        isSelected: false
      });
      currentMinute += element.delay;
    }

    let aux = { ...selectedSchedule };
    aux.list = [...hours];
    aux.minutes = [...schedules];
    const currentClassName = selectedSchedule.className;
    aux.className = currentClassName;
    setSchedule(aux);
  }

  function getCurrentSchedule() {
    return TIME_OPTIONS.find(option => option.className === dayState);
  };

  function handleClick(option) {
    TIME_OPTIONS.forEach(time => {
      time === option ? time.isSelected = true : time.isSelected = false;
    })
    setSchedule(option);
    setCurrentClassName(option.className);
    createScheduleList(option);
  };

  function clickButton(event) {
    console.log(event, "SelectedSchedule")
  }

  const buttonDays = TIME_OPTIONS.map((option, index) => {
    const isSelected = option.isSelected ? 'selectedOption' : 'notSelectedOption';
    return (
      <div className={option.className} key={`ab${index}`}>
        <ActionButton
          text={option.label}
          type="primary"
          onClick={() => handleClick(option)}
          active={option.label.toLowerCase() === dayState ? isSelected : isSelected}
        />
      </div>
    )
  });

  return (
    <div className="timePickerComponent">
      <div className="buttonSection">
        {buttonDays}
      </div>
      <ScheduleList
        list={selectedSchedule.list}
        minutes={selectedSchedule.minutes}
        onClick={clickButton}
        className={currentClassName}
      />
    </div>
  );
}

TimePicker.defaultProps = {
  dayState: 'evening'
};

TimePicker.propTypes = {
  /** The current hour */
  dayState: PropTypes.string,
}

export default DayState(TimePicker);