import React from 'react';
import Validator from '../../utilities/Validator';
import { InputForm, Separator } from 'dev27-components';
import { ActionFormValidator } from 'dev27-components';
import { Message } from 'dev27-components';
import actions from './actions';
import { connect } from 'react-redux';
import './style.css';

class Register extends React.Component {

  componentWillMount() {
    this.closeMessage();
    this.props.getCIExtensions();
    this.props.getBanks();
  }

  setTrainer = () => {
    this.props.postTrainer();
  }

  updateForm = (key, value) => {
    this.props.updateFormTrainer({ value, key });
  }

  closeMessage = () => {
    const { message } = this.props;
    message.visible = false;
    this.props.setMessage(message);
  }

  validationForm = (key, value) => {
    const { names } = this.props.formTrainer;
    try {
      Validator(key, value, names)
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    const { message, formTrainer, extensionOptions, extensionBanks } = this.props;

    const actionsForm = [
      {
        text: "SAVE",
        type: "primary",
        icon: "save",
        onClick: this.setTrainer
      }
    ]

    const inputsPersonalInformationForm = [
      {
        label: "Names",
        width: 48,
        onChange: this.updateForm,
        objectKey: "names",
        value: formTrainer.names,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: "Favorite Name",
        width: 48,
        onChange: this.updateForm,
        objectKey: "favoriteName",
        value: formTrainer.favoriteName,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: "First Last Name ",
        width: 48,
        onChange: this.updateForm,
        objectKey: "firstLastName",
        value: formTrainer.firstLastName,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: "Second Last Name",
        width: 48,
        onChange: this.updateForm,
        objectKey: "secondLastName",
        value: formTrainer.secondLastName,
        type: 'text',
        validate: this.validationForm,
        required: false,
      },
      {
        label: "ID Number",
        width: 48,
        onChange: this.updateForm,
        objectKey: "documentNumber",
        value: formTrainer.documentNumber,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: "ID Extension",
        width: 48,
        onChange: this.updateForm,
        objectKey: "documentExtension",
        value: formTrainer.documentExtension,
        type: 'select',
        options: extensionOptions,
        validate: this.validationForm,
        required: true,
      },
      {
        label: "Email",
        width: 48,
        onChange: this.updateForm,
        objectKey: "email",
        value: formTrainer.email,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: "Phone Number",
        width: 48,
        onChange: this.updateForm,
        objectKey: "referencePhone",
        value: formTrainer.referencePhone,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
    ]

    const inputsBankAcoountForm = [
      {
        label: "Bank Name",
        width: 48,
        onChange: this.updateForm,
        objectKey: "bankName",
        value: formTrainer.bankName,
        type: 'select',
        options: extensionBanks,
        validate: this.validationForm,
        required: true,
      },
      {
        label: "Bank Account Number",
        width: 48,
        onChange: this.updateForm,
        objectKey: "bankAccountNumber",
        value: formTrainer.bankAccountNumber,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
    ]

    const styleSheetClass = process.env.PUBLIC_URL + '/registerOption.css';

    return (
      <div>
        <div className={'title'}>
          <Separator title='Trainer Registry' />
        </div>
        <div className="registerView">
          <link rel="stylesheet" type="text/css" href={styleSheetClass} />
          <ActionFormValidator actions={actionsForm}>
            <Separator title='Personal&nbsp;information'></Separator>
            <InputForm inputs={inputsPersonalInformationForm}></InputForm>
            <Separator title='Bank&nbsp;account&nbsp;information'></Separator>
            <InputForm inputs={inputsBankAcoountForm}></InputForm>
          </ActionFormValidator>
          <Message type={message.type} text={message.value} visible={message.visible} onClick={this.closeMessage}></Message>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    formTrainer: state.Register.formTrainer,
    message: state.Register.message,
    extensionOptions: state.Register.extensionOptions,
    extensionBanks: state.Register.extensionBanks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postTrainer: () => dispatch(actions.POST_TRAINER()),
    updateFormTrainer: (payload) => dispatch(actions.UPDATE_FORM(payload)),
    setMessage: (payload) => dispatch(actions.SET_MESSAGE(payload)),
    getCIExtensions: () => dispatch(actions.GET_CI_EXTENSIONS()),
    getBanks: () => dispatch(actions.GET_BANKS()),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Register);