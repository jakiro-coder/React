import React from 'react';
import { InputForm, Separator, ActionFormValidator, Message, CheckBox } from 'dev27-components';
import Validator from '../../Utilities/Validator';
import './style.css';
import { connect } from 'react-redux';
import actions from './actions';

class Register extends React.Component {

  componentWillMount() {
    this.props.cleanStudentsForm();
    this.props.getIdNumberExtensions();
    this.props.getPrograms();
    this.closeMessage();
  }

  validationForm = (objectKey, value) => {
    const { names } = this.props.studentForm;
    try {
      Validator(objectKey, value, names)
    } catch (error) {
      throw new Error(error);
    }
  }

  activeSecondGuarantor = (obj) => {
    this.props.activeSecondGuarantor(obj.checked);
  }

  render() {
    const { studentForm, message, extensionOptions, programOptions, isSecondGuarantor } = this.props;
    const programOptionsValue = Object.values(programOptions);
    const actions = [
      {
        text: 'SAVE',
        type: 'primary',
        icon: 'save',
        onClick: this.registerStudent,
        disabled: true
      }
    ];

    const result = (!studentForm.secondGuaranteePhone) ? '' : studentForm.secondGuaranteePhone;

    const inputsDataUser = [
      {
        label: 'Names',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'names',
        value: studentForm.names,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Favorite Name',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'favoriteName',
        value: studentForm.favoriteName,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'First Last Name ',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'firstLastName',
        value: studentForm.firstLastName,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Second Last Name',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'secondLastName',
        value: studentForm.secondLastName,
        type: 'text',
        validate: this.validationForm,
        required: false,
      },
      {
        label: 'ID Number ',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'ci',
        value: studentForm.ci,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'ID Number Extension',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'ciExtension',
        value: studentForm.ciExtension,
        type: 'select',
        required: true,
        options: extensionOptions,
      },
      {
        label: 'Birthdate',
        onChange: this.handleOnChange,
        width: 48,
        objectKey: 'birthdate',
        value: studentForm.birthdate,
        type: 'date',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Phone',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'phone',
        value: studentForm.phone,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: "Personal email",
        width: 48,
        onChange: this.handleOnChange,
        objectKey: "primaryEmail",
        value: studentForm.primaryEmail,
        type: 'text',
        required: true,
        validate: this.validationForm,
      },
      {
        label: 'Program',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'programId',
        value: studentForm.programId,
        type: 'select',
        required: true,
        options: programOptionsValue,
        onFocus: this.handleOnFocus
      },
    ];

    const inputEmergyContact = [
      {
        label: 'Full Name',
        width: 33,
        onChange: this.handleOnChange,
        objectKey: 'emergencyContactName',
        value: studentForm.emergencyContactName,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Relationship',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'emergencyContactRelationship',
        value: studentForm.emergencyContactRelationship,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Phone',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'emergencyContactPhone',
        value: studentForm.emergencyContactPhone,
        type: 'text',
        validate: this.validationForm,
        required: true,
      }
    ];

    const inputsFirstGuarantors = [
      {
        label: 'Full Name',
        width: 33,
        onChange: this.handleOnChange,
        objectKey: 'firstGuaranteeName',
        value: studentForm.firstGuaranteeName,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'ID Number',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'firstGuaranteeCi',
        value: studentForm.firstGuaranteeCi,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Phone',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'firstGuaranteePhone',
        value: studentForm.firstGuaranteePhone,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
    ];

    const inputsSecondGuarantors = [
      {
        label: 'Full Name',
        width: 33,
        onChange: this.handleOnChange,
        objectKey: 'secondGuaranteeName',
        value: studentForm.secondGuaranteeName,
        type: 'text',
        required: true,
        validate: this.validationForm,
      },
      {
        label: 'ID Number',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'secondGuaranteeCi',
        value: studentForm.secondGuaranteeCi,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Phone',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'secondGuaranteePhone',
        value: result,
        type: 'text',
        validate: this.validationForm,
        required: true,
      }
    ];

    const styleSheetClass = process.env.PUBLIC_URL + '/registerOption.css';

    return (      
      <div>
        <div className={'title'}>
          <Separator title='Scholar Registry' />
        </div>
        <div className='registerView'>
          <link rel="stylesheet" type="text/css" href={styleSheetClass} />
          <ActionFormValidator actions={actions}>
            <div>
              <Separator title='Personal Information'></Separator>
              <InputForm inputs={inputsDataUser}></InputForm>
              <Separator title='Emergency Contact'></Separator>
              <InputForm inputs={inputEmergyContact}></InputForm>
              <Separator title='Guarantors'></Separator>
              <InputForm inputs={inputsFirstGuarantors}></InputForm>
              <CheckBox label={'Second Guarantor'} objectKey={'1'} checked={isSecondGuarantor} onChange={this.activeSecondGuarantor} />
              {isSecondGuarantor ? <InputForm inputs={inputsSecondGuarantors}></InputForm> : ''}
            </div>
          </ActionFormValidator>
          <Message type={message.type} text={message.value} visible={message.visible} onClick={this.closeMessage}></Message>
        </div>
      </div>
    );
  }

  handleOnChange = (objectKey, value) => {
    this.props.updateStudentForm({ objectKey, value });
  }

  closeMessage = () => {
    const { message } = this.props;
    message.visible = false;
    this.props.setMessage(message);
  }

  registerStudent = () => {
    this.props.postStudent();
  }
}

const mapStatesToProps = (state) => {
  return {
    studentForm: state.registerStudentReducer.studentForm,
    message: state.registerStudentReducer.message,
    formErrors: state.registerStudentReducer.formErrors,
    extensionOptions: state.registerStudentReducer.extensionOptions,
    programOptions: state.registerStudentReducer.programOptions,
    isSecondGuarantor: state.registerStudentReducer.isSecondGuarantor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStudentForm: (payload) => dispatch(actions.UPDATE_STUDENT_FORM(payload)),
    postStudent: () => dispatch(actions.POST_STUDENT()),
    getIdNumberExtensions: () => dispatch(actions.GET_ID_NUMBER_EXTENSIONS()),
    getPrograms: () => dispatch(actions.GET_PROGRAMS()),
    setMessage: (payload) => dispatch(actions.SET_MESSAGE_FORM(payload)),
    activeSecondGuarantor: (payload) => dispatch(actions.ACTIVE_SECOND_GUARANTOR(payload)),
    cleanStudentsForm: () => dispatch(actions.CLEAN_STUDENT_FORM()),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Register);