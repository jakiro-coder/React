import React from 'react';
import actions from './actions';
import { Paginator, Grid, Modal, PersonCard } from 'dev27-components';
import { CheckBox, Separator } from 'dev27-components'
import { Message } from 'dev27-components';

import { connect } from 'react-redux';
import './style.css';

class List extends React.Component {

  /** componentWillMount use the method GetTrainer method to get the active trainers to show on a list */
  componentWillMount() {
    this.closeMessage();
    const { isActiveTrainer, pagination } = this.props;
    this.props.getTrainers({ state: isActiveTrainer, elementsForPageByDropdown: pagination.elementsForPage });
  }

  onChangeDropDown = (key, val) => {
    this.changeElementsForPage(val);
  }

  changeElementsForPage = (val) => {
    this.closeMessage();
    const { isActiveTrainer } = this.props;
    this.props.getTrainers({ state: isActiveTrainer, elementsForPageByDropdown: val });
  }

  redirectToEditTrainer = (id) => {
    this.props.history.push(`/trainers/${id}/update`);
  }

  redirectToProfileTrainer = (id) => {
    this.props.history.push(`/trainers/${id}/profile`);
  }

  /** this function manage the active or inactive query of trainers */
  onChangeCheckBox = (obj) => {
    this.closeMessage();
    this.props.setIsActiveTrainer(!obj.checked);
    const { isActiveTrainer, pagination } = this.props;
    this.props.getTrainers({ state: !isActiveTrainer, elementsForPageByDropdown: pagination.elementsForPage });
  }

  closeMessage = () => {
    const { message } = this.props;
    message.visible = false;
    this.props.setMessage(message);
  }

  onChangeState = (objectKey) => {
    const { modal, trainers } = this.props;
    this.props.setModal({ visible: modal.visibility, value: trainers.find(trainer => trainer.trainerId === parseInt(objectKey)) });
  }

  toggleYesButton = () => {
    const { modal } = this.props;
    this.props.changeTrainerState(modal.value.trainerId);
    this.props.setModal({ visible: modal.visibility, value: modal.value });
  }

  toggleNoButton = () => {
    const { modal } = this.props;
    this.props.setModal({ visible: modal.visibility, value: modal.value });
  }

  onClickLeft = () => {
    this.closeMessage();
    const { isActiveTrainer, pagination } = this.props;
    this.props.getLeftPage({ pagination: pagination.elementActive - 1, isActive: isActiveTrainer });
  }

  onClickRight = () => {
    this.closeMessage();
    const { isActiveTrainer, pagination } = this.props;
    this.props.getRightPage({ pagination: pagination.elementActive + 1, isActive: isActiveTrainer });
  }

  onClickGoBegin = () => {
    this.closeMessage();
    const { isActiveTrainer } = this.props;
    this.props.getLeftPage({ pagination: 1, isActive: isActiveTrainer });
  }

  onClickGoEnd = () => {
    this.closeMessage();
    const { isActiveTrainer, pagination } = this.props;
    const totalPages = Math.ceil(pagination.totalElements / pagination.elementsForPage);
    this.props.getLeftPage({ pagination: totalPages, isActive: isActiveTrainer });
  }

  render() {
    const { trainers, pagination, message, modal } = this.props;

    const peopleCard = trainers.map(trainer => {
      return <PersonCard image={trainer.image ? `data:image/jpeg;base64,${trainer.image}` : trainer.image} primaryText={`${trainer.favoriteName} ${trainer.firstLastName}`}
        secondaryText={trainer.email} objectKey={trainer.trainerId}
        actions={[
          {
            icon: 'edit',
            onClick: () => { this.redirectToEditTrainer(trainer.trainerId) }
          }
        ]}
        disabled={trainer.isActive} onClickDisabled={this.onChangeState} onClick={()=>{this.redirectToProfileTrainer(trainer.trainerId)}} />
    });

    const confirmationModal = {
      title: `${!modal.value.isActive ? 'Enable' : 'Disable'} trainer`,
      message: `Are you sure about ${!modal.value.isActive ? 'enabling' : 'disabling'} ${modal.value.favoriteName} ${modal.value.firstLastName} trainer?`,
      show: true,
      actions: [
        {
          text: "yes",
          onClick: this.toggleYesButton,
          disabled: false,
          type: "primary",
        },
        {
          text: "no",
          onClick: this.toggleNoButton,
          disabled: false,
          type: "primary",
        }
      ]
    }

    const styleSheetClass = process.env.PUBLIC_URL + '/listOption.css';

    return (
      <div className="listTrainerView">
        <link rel="stylesheet" type="text/css" href={styleSheetClass} />
        <Separator title='Trainer List' />
        <Modal title={confirmationModal.title} show={modal.visibility} actions={confirmationModal.actions} onClickOut={this.toggleNoButton}>
          {<p1>{confirmationModal.message}</p1>}
        </Modal>
        <div className="checkbox">
          <CheckBox label={'Show Disabled Trainers'} onChange={this.onChangeCheckBox} objectKey={'1'}></CheckBox>
        </div>
        <Paginator totalElements={pagination.totalElements}
          elementsForPage={pagination.elementsForPage}
          elementActive={pagination.elementActive}
          onClickLeft={this.onClickLeft}
          onClickRight={this.onClickRight}
          onClickGoBegin={this.onClickGoBegin}
          onClickGoEnd={this.onClickGoEnd}
          onChange={this.onChangeDropDown}
          value={pagination.elementsForPage}>

          <Grid items={peopleCard} lg={4} md={6} sm={12} />

        </Paginator>
        <Message type={message.type} text={message.value} visible={message.visible} onClick={this.closeMessage} />
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    /** Array of trainers */
    trainers: state.List.trainers,
    /** Object with  the total elements by page, elements by page and page current*/
    pagination: state.List.pagination,
    /** Object with the string message and type message */
    message: state.List.message,
    /** Object with the visibility of the modal and the actual value */
    modal: state.List.modal,
    /** Object used to filter between active and inactive trainers */
    isActiveTrainer: state.List.filterByActive,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /** Method to get the list of trainers */
    getTrainers: (payload) => dispatch(actions.GET_TRAINERS(payload)),
    /** Method to get the list of twenty five previous trainers */
    getLeftPage: (payload) => dispatch(actions.GET_LEFT_PAGE(payload)),
    /** Method to get the list of twenty five next trainers */
    getRightPage: (payload) => dispatch(actions.GET_RIGHT_PAGE(payload)),
    /** Method to change the state of a trainer */
    changeTrainerState: (payload) => dispatch(actions.CHANGE_TRAINER_STATE(payload)),
    /** Method to change the state of modal */
    setModal: (payload) => dispatch(actions.SET_MODAL(payload)),
    /** Method used to update the value of filterByActive property */
    setIsActiveTrainer: (payload) => dispatch(actions.SET_FILTER_BY_ACTIVE(payload)),
    /** Method used to change the state of the message */
    setMessage: (payload) => dispatch(actions.SET_MESSAGE_STATE(payload))
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(List);
