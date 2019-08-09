import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
  WeeklyScheduledisplay a table of weeks.
*/

function WeeklySchedule({ monday, tuesday, wendnesday, thursday, friday }) {
  const currentDay = new Date().getDay();
  const days = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wendnesday: 'Wendnesday',
    thursday: 'Thursday',
    friday: 'Friday',
  };
  return (
    <table className='weeklyScheduleComponent'>
      <thead>
        <tr>
          <th className={currentDay === 1 ? 'current' : ''}>{days.monday}</th>
          <th className={currentDay === 2 ? 'current' : ''}>{days.tuesday}</th>
          <th className={currentDay === 3 ? 'current' : ''}>{days.wendnesday}</th>
          <th className={currentDay === 4 ? 'current' : ''}>{days.thursday}</th>
          <th className={currentDay === 5 ? 'current' : ''}>{days.friday}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className='content'>
              {monday}
            </div>
          </td>
          <td>
            <div className='content'>
              {tuesday}
            </div>
          </td>
          <td>
            <div className='content'>
              {wendnesday}
            </div>
          </td>
          <td>
            <div className='content'>
              {thursday}
            </div>
          </td>
          <td>
            <div className='content'>
              {friday}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

WeeklySchedule.defaultProps = {
  monday: [],
  tuesday: [],
  wendnesday: [],
  thursday: [],
  friday: [],
};

WeeklySchedule.propTypes = {
  /** The data to show in monday, should be array of any objects */
  monday: PropTypes.arrayOf(PropTypes.object),
  /** The data to show in tuesday, should be array of any objects */
  tuesday: PropTypes.arrayOf(PropTypes.object),
  /** The data to show in wendnesday, should be array of any objects */
  wendnesday: PropTypes.arrayOf(PropTypes.object),
  /** The data to show in thursday, should be array of any objects */
  thursday: PropTypes.arrayOf(PropTypes.object),
  /** The data to show in friday, should be array of any objects */
  friday: PropTypes.arrayOf(PropTypes.object),
}

export default WeeklySchedule;