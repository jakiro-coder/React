import React from 'react';
import { connect } from 'react-redux';
import { Separator, Avatar, CustomIcon, ItemWeekly, WeeklySchedule } from 'dev27-components';
import Icon from 'material-icons-react';
import actions from './actions';
import './style.css';

class Profile extends React.Component {

  componentWillMount() {
    this.props.getStudentWeekSchedule({ id: this.props.match.params.id });
    this.props.getStudentInformation({ id: this.props.match.params.id })
  }

  daySchedule = (scheduleList, day) => {
    return scheduleList[day].map((schedule, index) => {
      return (
        <ItemWeekly
          key={index}
          primary={schedule.subject}
          secondaryData={[`${schedule.startTime} - ${schedule.endTime}`, schedule.classroomName]} />
      )
    })
  }
  render() {
    const { scholarInformation, scholarInformationModule, weekSchedule, schedules } = this.props;
    const moduleInformation = scholarInformationModule.map((moduleInformation) => {
      return (
        <p className='item'>{moduleInformation.moduleName}</p>
      )
    })

    return (
      <div className="profileView">
        <div className="headerProfile">
          <div className="title">
            <Separator title="Scholar Profile" />
          </div>
          <div className="scholarHeader">
            {
              scholarInformation.image ?
                <Avatar urlImage={`data:image/jpeg;base64,${scholarInformation.image}`} ></Avatar>
                :
                <Avatar username={`${scholarInformation.favoriteName} ${scholarInformation.firstLastName}`}></Avatar>
            }
            <div className="nameScholar">
              {`${scholarInformation.favoriteName} ${scholarInformation.firstLastName}`}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="personalInformation" >
            <Separator title='Personal information' />
            <div className="information">
              <div className="data">
                <Icon icon={"phone"}></Icon>
                <p>{scholarInformation.phone}</p>
              </div>
              <div className="data">
                <Icon icon={"email"}></Icon>
                <p className='item'>{scholarInformation.personalEmail}</p>
              </div>
            </div>
          </div>
          {moduleInformation.length ?
            <div className="moduleInformation" >
              <Separator title='Module information' />
              <div className="module">
                <div className="data">
                  <CustomIcon icon={"app_modules"} size={"m"}></CustomIcon>
                  {moduleInformation}
                </div>
              </div>
            </div>
            : null
          }
        </div>
        {schedules.length ?
          <div className="schedule">
            <div className="scheduleContainer">
              <Separator title='Week Schedule' />
              <WeeklySchedule
                monday={this.daySchedule(weekSchedule, 'Monday')}
                tuesday={this.daySchedule(weekSchedule, 'Tuesday')}
                wendnesday={this.daySchedule(weekSchedule, 'Wednesday')}
                thursday={this.daySchedule(weekSchedule, 'Thursday')}
                friday={this.daySchedule(weekSchedule, 'Friday')} />
            </div>
          </div>
          : null
        }
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    weekSchedule: state.profileReducer.weekSchedule,
    scholarInformation: state.profileReducer.scholarInformation,
    scholarInformationModule: state.profileReducer.scholarInformationModule,
    schedules: state.profileReducer.schedules
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentWeekSchedule: payload => dispatch(actions.GET_STUDENT_WEEK_SCHEDULE(payload)),
    getStudentInformation: payload => dispatch(actions.GET_SCHOLAR_INFORMATION(payload)),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Profile);