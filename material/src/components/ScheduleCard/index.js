import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import ActionButton from '../ActionButton';
import Ink from 'react-ink'
import './style.css';

/** Use for create the schedules cards */
function ScheduleCard({ objectKey, day, startTime, endTime, onClickEdit, onClickRemove, disabled, onBlur, onChange, step }) {
  const [readOnly, setReadOnly] = useState(true);

  function onClickRemoveHandler() {
    onClickRemove(objectKey);
  };

  function onClickEditHandler() {
    onClickEdit(objectKey);
    setReadOnly(!readOnly)
  };

  function onclickStopPropagation(event) {
    event.stopPropagation();
  }

  function handleOnChange(inputKey, value) {
    onChange(objectKey, inputKey, value)
  }

  const startTimeInput = !readOnly ? <InputField onChange={handleOnChange} min='00:00' max='23:59' objectKey="startTime" value={startTime} type="time" step={step} /> : <p>{startTime}</p>
  const endTimeInput = !readOnly ? <InputField onChange={handleOnChange} min='00:00' max='23:59' objectKey="endTime" value={endTime} type="time" step={step} /> : <p>{endTime}</p>
  const dayInput = !readOnly ? <InputField onChange={handleOnChange} objectKey="day" value={day} type="text" /> : <p>{day}</p>
  const icon = !readOnly ? <i className='material-icons' >{'save'}</i> : <i className='material-icons'>{'edit'}</i>;
  return (
    <div className={`scheduleCardComponent ${disabled ? 'disabledScheduleCard' : ''}`} onBlur={onBlur}>
      <div className="scheduleCard">
        <div className="scheduleContent">
          <div className='scheduleTitle'>
            {dayInput}
            <ActionButton icon="close" onClick={onClickRemoveHandler} />
          </div>
          <div className='scheduleChildren'>
            {
              <div className={!readOnly ? "scheduleChildrenContent" : ""}>
                <div className="timeTitle">
                  <p className="time">Start&nbsp;time:&nbsp;</p>
                  {startTimeInput}
                </div>
                <div className="timeTitle">
                  <p className="time">End&nbsp;time:&nbsp;</p>
                  {endTimeInput}
                </div>
                <div onClick={onclickStopPropagation} className="actionAreaComponent">
                  <button className={`actionButtonComponent default selectedOption`} onClick={onClickEditHandler} >
                    <Ink />
                    {icon}
                  </button>
                </div>
              </div>
            }</div>

        </div>
      </div>
    </div >
  );
}

ScheduleCard.defaultProps = {
  day: 'Monday',
  startTime: '',
  endTime: '',
  disabled: false,
  onClickRemove: () => { },
  onClickEdit: () => { },
  onBlur: () => { },
  step: 60,
  onChange: () => { },
}

ScheduleCard.propTypes = {
  /** Key to identify */
  objectKey: PropTypes.string,
  /** Day of week */
  day: PropTypes.string,
  /** Start Time for a subject */
  startTime: PropTypes.string,
  /** End Time for a subject */
  endTime: PropTypes.string,
  /** Option that changes the color of the schedule card */
  disabled: PropTypes.bool,
  /** The callback to execute when it's clicked-on */
  onClickRemove: PropTypes.func,
  /** The callback to execute when it's clicked-on */
  onClickEdit: PropTypes.func,
  /** The callback to execute when it's blur-on */
  onBlur: PropTypes.func,
  /** The callback to execute when it's blur-on */
  onChange: PropTypes.func,
  /** Milliseconds in the input time*/
  step: PropTypes.number,
}
export default ScheduleCard;