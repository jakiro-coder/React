import React from 'react';
import { Separator, Avatar, CustomIcon, ItemWeekly, WeeklySchedule } from 'dev27-components';
import Icon from 'material-icons-react';
import actions from './actions';
import { connect } from 'react-redux';
import './style.css';

class Profile extends React.Component {
  componentWillMount() {
    this.props.getTrainerWeekSchedule({ id: this.props.match.params.id });
  }

  componentDidMount = () => {
    this.initialDataTrainer(this.props.match.params.id);
  }

  initialDataTrainer = () => {
    this.props.getTrainerById(this.props.match.params.id);
    this.props.getModulesByTrainer(this.props.match.params.id);
  }

  daySchedule = (scheduleList, day) => {
    return scheduleList[day].map((schedule, index) => {
      return (
        <ItemWeekly
          key={index}
          primary={`${schedule.startTime} - ${schedule.endTime}`}
          secondaryData={[
            schedule.subject,
            `${schedule.classroomName} \u00A0\u00A0\u00A0 ${schedule.moduleName}`
          ]} />
      )
    })
  }

  render() {
    const { formTrainer, modules, weekSchedule, schedules } = this.props;
    const namesProgram = modules.map((item, index) => {
      return <div key={index} className='data'>
        <CustomIcon icon={'app_modules'} size={'m'}></CustomIcon>
        <p>{item.moduleName}</p>
      </div>
    })

    return (
      <div className='profileView'>
        <div className='headerProfile'>
          <div className='title'>
            <Separator title='Trainer Profile' />
          </div>
          <div className='trainerHeader'>
            {
              formTrainer.image ?
                <Avatar urlImage={`data:image/jpeg;base64,${formTrainer.image}`} ></Avatar>
                :
                <Avatar username={`${formTrainer.favoriteName} ${formTrainer.firstLastName}`}></Avatar>
            }
            <div className='nameTrainer'>
              {`${formTrainer.favoriteName} ${formTrainer.firstLastName}`}
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='personalInformation' >
            <Separator title='Personal information' />
            <div className='information'>
              <div className='data'>
                <Icon icon={'phone'}></Icon>
                <p>{formTrainer.referencePhone}</p>
              </div>
              <div className='data'>
                <Icon icon={'email'}></Icon>
                <p>{formTrainer.email}</p>
              </div>
            </div>
          </div>
          <div className='bankAccountInformation' >
            <Separator title='Bank account information' />
            <div className='bank'>
              <div className='data'>
                <Icon icon={'account_balance'}></Icon>
                <p>{formTrainer.bankName}</p>
                <p className='bankAccountNumber'>{`Nº ${formTrainer.bankAccountNumber}`}</p>
              </div>
            </div>
          </div>
          <div className={`moduleInformation ${modules.length ? '' : 'emptyInformation'}`} >
            <Separator title='Module information' />
            <div className='module'>
              {namesProgram}
            </div>
          </div>
        </div>
        {schedules.length ?
          <div className="trainerSchedule">
            <div className="trainerScheduleContainer">
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
    formTrainer: state.profileReducer.formTrainer,
    modules: state.profileReducer.modules,
    weekSchedule: state.profileReducer.weekSchedule,
    schedules: state.profileReducer.schedules,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTrainerWeekSchedule: payload => dispatch(actions.GET_TRAINER_WEEK_SCHEDULE(payload)),
    getModulesByTrainer: (payload) => dispatch(actions.GET_MODULES_BY_TRAINER(payload)),
    getTrainerById: (payload) => dispatch(actions.GET_CURRENT_TRAINER(payload)),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Profile);