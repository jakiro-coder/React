import React from 'react';
import Validator from '../../utilities/Validator';
import { ActionFormValidator } from 'dev27-components';
import { InputForm, Modal, Separator } from 'dev27-components';
import actions from './actions';
import { connect } from 'react-redux';
import './style.css';
import { Message } from 'dev27-components';
import FileChooser from 'dev27-components/dist/FileChooser';

class UpdateTrainer extends React.Component {

	componentDidMount = () => {
		this.initialDataTrainer();
		this.props.getCIExtensions();
		this.props.getBanks();
	}

	initialDataTrainer = () => {
		this.props.clearForm();
		this.props.getTrainerById(this.props.match.params.id);
	}

	updateTrainerData = () => {
		this.props.updateTrainerMiddleware();
	}

	toogleYesModal = () => {
		this.toggleModal();
		this.initialDataTrainer();
	}

	updateForm = (key, value) => {
		this.props.updateFormTrainer({ value, key });
	}

	toggleModal = () => {
		const { modal } = this.props;
		this.props.setVisibility(modal.visibility);
	}

	closeMessage = () => {
		const { message } = this.props;
		message.visible = false;
		this.props.setMessage(message);
	}

	validationForm = (key, value) => {
		try {
			Validator(key, value)
		} catch (error) {
			throw new Error(error);
		}
	}

	onChangeBase64Image = (objectKey, file) => {
		var files = file[0];
		var reader = new FileReader();
		reader.onloadend = () => {
		  this.updateForm("image", (reader.result).replace("data:image/jpeg;base64,","")); 
		  this.updateForm("imageName", files.name); 
		}
		if (files != null) reader.readAsDataURL(files);
	}

	render() {
		const { message, formTrainer, modal, extensionOptions, extensionBanks } = this.props;

		const actionsForm = [
			{
				text: "UPDATE",
				type: "primary",
				icon: "save",
				onClick: this.updateTrainerData
			},
			{
				text: "CANCEL",
				type: "default",
				icon: "cancel",
				onClick: this.toggleModal,
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

		const cancelModal = {
			title: "Lose changes",
			show: false,
			actions: [
				{
					text: "YES",
					onClick: this.toogleYesModal,
					disabled: false,
					type: "primary",
				},
				{
					text: "NO",
					onClick: this.toggleModal,
					disabled: false,
					type: "primary",
				}
			]
		}

		const renderize = () => {
			return (formTrainer.trainerId
				? <ActionFormValidator actions={actionsForm}>
					<Separator title='Personal&nbsp;information'></Separator>
					<InputForm inputs={inputsPersonalInformationForm}></InputForm>
					<FileChooser accept="image/jpg, .jpg" value={formTrainer.imageName} icon={'cloud_upload'} 
								label={'Image'} onChange={this.onChangeBase64Image} objectKey={'image'} ></FileChooser>
					<Separator title='Bank&nbsp;account&nbsp;information'></Separator>
					<InputForm inputs={inputsBankAcoountForm}></InputForm>
				</ActionFormValidator>
				: null)
		}

		const styleSheetClass = process.env.PUBLIC_URL + '/listOption.css';

		return (
			<div>
				<div className={'title'}>
					<Separator title='Trainer Update' />
				</div>
				<div className="updateTrainerComponent" >
					<link rel="stylesheet" type="text/css" href={styleSheetClass} />
					<Modal title={cancelModal.title} show={modal.visibility} actions={cancelModal.actions} onClickOut={this.toggleModal}>
					</Modal>
					{renderize()}
					<Message type={message.type} text={message.value} visible={message.visible} onClick={this.closeMessage} />
				</div>
			</div>
		);
	}
}

const mapStatesToProps = (state) => {
	return {
		formTrainer: state.UpdateTrainer.formTrainer,
		message: state.UpdateTrainer.message,
		modal: state.UpdateTrainer.modal,
		extensionOptions: state.UpdateTrainer.extensionOptions,
		extensionBanks: state.UpdateTrainer.extensionBanks,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateFormTrainer: (payload) => dispatch(actions.UPDATE_FORM(payload)),
		updateTrainerMiddleware: (payload) => dispatch(actions.UPDATE_TRAINER(payload)),
		setMessage: (payload) => dispatch(actions.SET_MESSAGE(payload)),
		setVisibility: (payload) => dispatch(actions.SET_VISIBILITY_MODAL(payload)),
		getTrainerById: (payload) => dispatch(actions.GET_CURRENT_TRAINER(payload)),
		clearForm: (payload) => dispatch(actions.CLEAR_FORM(payload)),
		getCIExtensions: () => dispatch(actions.GET_CI_EXTENSIONS()),
		getBanks: () => dispatch(actions.GET_BANKS()),
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(UpdateTrainer);