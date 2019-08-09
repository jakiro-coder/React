import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from './actions';
import './Schedule.css';

class Schedule extends Component {

  render() {
    const { schedules } = this.props;
    const cards = schedules.map((schedule, index) => <p key={index}>{JSON.stringify(schedule)}</p>);
    return (
      <div className="schedule-view">
        {cards}
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    schedules: state.scheduleReducer.schedules,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSchedules: (action) => dispatch(actions.GET_SCHEDULES(action)),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Schedule);
