import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';

class Schedule extends React.Component {

  componentDidMount() {
    this.props.getSchedule();
  }

  render() {
    return (
      <div className="schedule">
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    schedules: state.Schedule.schedules,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSchedule: () => dispatch(actions.GET_SCHEDULE()),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Schedule);
