import React from 'react';
import { InputForm, Separator, Modal, ActionFormValidator, Message, CheckBox } from 'dev27-components';
import FileChooser from 'dev27-components/dist/FileChooser';
import Validator from '../../Utilities/Validator';
import './style.css';
import { connect } from 'react-redux';
import actions from './actions';

class UpdateScholar extends React.Component {

  componentDidMount() {
    this.closeMessage();
    this.props.getIdNumberExtensions();
    this.props.getPrograms();
    this.props.clearFormUpdateScholar();
    const id = this.props.location.pathname.split('/')[2];
    this.props.getScholarInformation({ currentScholar: id });
    this.initialDataTrainer();
  }

  initialDataTrainer = () => {
    this.props.clearFormUpdateScholar();
    const id = this.props.location.pathname.split('/')[2];
    this.props.getScholarInformation({ currentScholar: id });
  }

  validationForm = (objectKey, value) => {
    try {
      Validator(objectKey, value)
    } catch (error) {
      throw new Error(error);
    }
  }

  onChangeBase64Image = (objectKey, file) => {
    var files = file[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      this.handleOnChange("image", (reader.result).replace("data:image/jpeg;base64,","")); 
      this.handleOnChange("imageName", files.name); 
    }
    if (files != null) reader.readAsDataURL(files);
  }

  toogleYesModal = () => {
    this.toggleModal();
    this.initialDataTrainer();
  }

  toggleModal = () => {
    const { modal } = this.props;
    this.props.setVisibility(modal.visibility);
  }

  activeSecondGuarantor = (obj) => {
    this.props.activeSecondGuarantor(obj.checked);
  }

  render() {
    const { scholarForm, extensionOptions, programOptions, modal, message, isSecondGuarantor } = this.props;
    const programOptionsValue = Object.values(programOptions);
    const actions = [
      {
        text: 'UPDATE',
        type: 'primary',
        icon: 'update',
        onClick: this.updateScholar,
        disabled: false
      },
      {
        text: 'CANCEL',
        type: 'default',
        icon: 'cancel',
        onClick: this.toggleModal,
        disabled: false,
      }
    ];

    const inputsDataUser = [
      {
        label: 'Names',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'names',
        value: scholarForm.names,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Favorite Name',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'favoriteName',
        value: scholarForm.favoriteName,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'First Last Name ',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'firstLastName',
        value: scholarForm.firstLastName,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Second Last Name',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'secondLastName',
        value: scholarForm.secondLastName,
        type: 'text',
        validate: this.validationForm,
        required: false,
      },
      {
        label: 'ID Number ',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'ci',
        value: scholarForm.ci,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'ID Number Extension',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'ciExtension',
        value: scholarForm.ciExtension,
        type: 'select',
        required: true,
        options: extensionOptions,
      },
      {
        label: 'Birthdate',
        onChange: this.handleOnChange,
        width: 48,
        objectKey: 'birthdate',
        value: scholarForm.birthdate,
        type: 'date',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Phone',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'phone',
        value: scholarForm.phone,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: "Personal email",
        width: 48,
        onChange: this.handleOnChange,
        objectKey: "primaryEmail",
        value: scholarForm.primaryEmail,
        type: 'text',
        required: true,
        validate: this.validationForm,
      },
      {
        label: 'Program',
        width: 48,
        onChange: this.handleOnChange,
        objectKey: 'programId',
        value: scholarForm.programId,
        type: 'select',
        required: true,
        options: programOptionsValue,
        onFocus: this.handleOnFocus
      }
    ];

    const inputEmergyContact = [
      {
        label: 'Full Name',
        width: 33,
        onChange: this.handleOnChange,
        objectKey: 'emergencyContactName',
        value: scholarForm.emergencyContactName,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Relationship',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'emergencyContactRelationship',
        value: scholarForm.emergencyContactRelationship,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Phone',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'emergencyContactPhone',
        value: scholarForm.emergencyContactPhone,
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
        value: scholarForm.firstGuaranteeName,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'ID Number',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'firstGuaranteeCi',
        value: scholarForm.firstGuaranteeCi,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Phone',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'firstGuaranteePhone',
        value: scholarForm.firstGuaranteePhone,
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
        value: scholarForm.secondGuaranteeName,
        type: 'text',
        required: true,
        validate: this.validationForm,
      },
      {
        label: 'ID Number',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'secondGuaranteeCi',
        value: scholarForm.secondGuaranteeCi,
        type: 'text',
        validate: this.validationForm,
        required: true,
      },
      {
        label: 'Phone',
        width: 31,
        onChange: this.handleOnChange,
        objectKey: 'secondGuaranteePhone',
        value: (!scholarForm.secondGuaranteePhone) ? '' : scholarForm.secondGuaranteePhone,
        type: 'text',
        validate: this.validationForm,
        required: true,
      }
    ];

    const cancelModal =
    {
      title: "Lose changes",
      show: false,
      actions: [
        {
          text: "yes",
          onClick: this.toogleYesModal,
          disabled: false,
          type: "primary",
        },
        {
          text: "no",
          onClick: this.toggleModal,
          disabled: false,
          type: "primary",
        }
      ]
    };

    const initialize = () => {
      return (
        scholarForm.idStudent
          ? <ActionFormValidator actions={actions}>
            <div>
              <Separator title='Personal Information'></Separator>
              <InputForm inputs={inputsDataUser}></InputForm>              
              <FileChooser accept="image/jpg, .jpg" value={scholarForm.imageName} icon={'cloud_upload'} label={'Image'} onChange={this.onChangeBase64Image} objectKey={'image'} ></FileChooser>
              <Separator title='Emergency Contact'></Separator>
              <InputForm inputs={inputEmergyContact}></InputForm>
              <Separator title='Guarantor'></Separator>
              <InputForm inputs={inputsFirstGuarantors}></InputForm>
              <CheckBox label={'Second Guarantor'} objectKey={'2'} checked={isSecondGuarantor} onChange={this.activeSecondGuarantor} />
              {isSecondGuarantor ? <InputForm inputs={inputsSecondGuarantors}></InputForm> : ''}
            </div>
          </ActionFormValidator>
          : null
      )
    }

    const styleSheetClass = process.env.PUBLIC_URL + '/listOption.css';

    return (
      <div>
        <div className={'title'}>
          <Separator title='Scholar Update' />
        </div>
        <div className="updateScholarView">
          <link rel="stylesheet" type="text/css" href={styleSheetClass} />
          <Modal title={cancelModal.title} show={modal.visibility} actions={cancelModal.actions} onClickOut={this.toggleModal}>
            <div></div>
          </Modal>
          {initialize()}
          <Message type={message.type} text={message.value} visible={message.visible} onClick={this.closeMessage} />
        </div>
      </div>
    );
  }

  closeMessage = () => {
    const { message } = this.props;
    message.visible = false;
    this.props.setMessage(message);
  }

  handleOnChange = (objectKey, value) => {
    this.props.updateScholarForm({ objectKey, value });
  }

  updateScholar = () => {
    this.props.updateScholarInformation();
  }
}

const mapStatesToProps = (state) => {
  return {
    scholarForm: state.updateScholarReducer.scholarForm,
    extensionOptions: state.updateScholarReducer.extensionOptions,
    programOptions: state.updateScholarReducer.programOptions,
    message: state.updateScholarReducer.message,
    showModal: state.updateScholarReducer.showModal,
    modal: state.updateScholarReducer.modal,
    isSecondGuarantor: state.updateScholarReducer.isSecondGuarantor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateScholarForm: (payload) => dispatch(actions.SET_FORM_SCHOLAR(payload)),
    getIdNumberExtensions: () => dispatch(actions.GET_ID_NUMBER_EXTENSIONS()),
    getPrograms: () => dispatch(actions.GET_PROGRAMS()),
    updateScholarInformation: () => dispatch(actions.UPDATE_SCHOLAR_INFORMATION()),
    getScholarInformation: (payload) => dispatch(actions.GET_CURRENT_SCHOLAR(payload)),
    setToogleCancelModal: (payload) => dispatch(actions.SET_TOOGLE_CANCEL_MODAL(payload)),
    clearFormUpdateScholar: () => dispatch(actions.CLEAR_FORM()),
    setMessage: (payload) => dispatch(actions.SET_MESSAGE_FORM(payload)),
    setVisibility: (payload) => dispatch(actions.SET_VISIBILITY_MODAL(payload)),
    activeSecondGuarantor: (payload) => dispatch(actions.ACTIVE_SECOND_GUARANTOR(payload)),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(UpdateScholar); 