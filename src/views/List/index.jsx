import React from 'react';
import actions from './actions';
import { connect } from 'react-redux';
import { CheckBox } from 'dev27-components';
import { Paginator, Modal, Grid, PersonCard, Separator } from 'dev27-components';
import { Message } from 'dev27-components';
import './style.css';

class List extends React.Component {

  /** The method componentWillMount Get method (getStudents) that get the active scholars to show on a list */
  componentWillMount() {
    this.closeMessage();
    const { active, pagination } = this.props;
    this.props.getStudents({ state: active, elementsForPageByDropdown: pagination.elementsForPage });
  }

  onChangeDropDown = (key, val) => {
    this.changeElementsForPage(val);
  }

  changeElementsForPage = (val) => {
    const { active } = this.props;
    this.props.getStudents({ state: active, elementsForPageByDropdown: val });
  }


  redirectToUpdateScholar = function (id) {
    this.props.history.push(`/scholars/${id}/update`);
  }

  /** This function manage the active or inactive query for scholars */
  onChangeShowInactiveScholars = (obj) => {
    this.closeMessage();
    this.props.setIsActive(!obj.checked);
    const { pagination, active } = this.props;
    this.props.getStudents({ state: !active, elementsForPageByDropdown: pagination.elementsForPage });
  }

  closeMessage = () => {
    const { message } = this.props;
    message.visible = false;
    this.props.setMessage(message);
  }

  onChangeScholarState = (student) => {
    const { modal } = this.props;
    this.props.setModal({ visible: modal.visibility, value: student });
  }

  toggleYesModal = () => {
    const { modal } = this.props;
    this.props.changeScholarState(modal.value);
    this.props.setModal({ visible: modal.visibility, value: modal.value });
  }

  toggleNoModal = () => {
    const { modal } = this.props;
    this.props.setModal({ visible: modal.visibility, value: modal.value });
  }

  onClickLeft = () => {
    const { pagination, active } = this.props;
    this.closeMessage();
    this.props.getLeftPage({ elementActive: pagination.elementActive - 1, isActive: active });
  }

  onClickRight = () => {
    const { pagination, active } = this.props;
    this.closeMessage();
    this.props.getRightPage({ elementActive: pagination.elementActive + 1, isActive: active });
  }

  onClickGoBegin = () => {
    const { active } = this.props;
    this.props.getLeftPage({ elementActive: 1, isActive: active });
  }

  redirectToProfile(id) {
    this.props.history.push(`/scholars/${id}/profile`);
  }

  onClickGoEnd = () => {
    const { pagination, active } = this.props;
    const totalPages = Math.ceil(pagination.totalElements / pagination.elementsForPage);
    this.props.getLeftPage({ elementActive: totalPages, isActive: active });
  }

  render() {
    const { students, pagination, message, modal } = this.props;
    const peopleCard = students.map(student => {
      return <PersonCard onClick={() => this.redirectToProfile(student.idStudent)} image={student.image ? `data:image/jpeg;base64,${student.image}` : student.image} primaryText={`${student.favoriteName} ${student.firstLastName}`}
        secondaryText={student.personalEmail} objectKey={student.idStudent}
        actions={[
          {
            icon: 'edit',
            onClick: () => { this.redirectToUpdateScholar(student.idStudent) }
          }
        ]}
        disabled={student.isActive} onClickDisabled={() => { this.onChangeScholarState(student) }} />
    });

    const confirmationModal = {
      title: ` ${!modal.value.isActive ? 'Enable' : 'Disable'} scholar`,
      messsage: `Are you sure about ${!modal.value.isActive ? 'enabling' : 'disabling'} the scholar ${modal.value.favoriteName} ${modal.value.firstLastName}?`,
      show: false,
      actions: [
        {
          text: "yes",
          onClick: this.toggleYesModal,
          disabled: false,
          type: "primary",
        },
        {
          text: "no",
          onClick: this.toggleNoModal,
          disabled: false,
          type: "primary",
        }
      ]
    }

    const styleSheetClass = process.env.PUBLIC_URL + '/listOption.css';

    return (
      <div className="listStudentView">
        <link rel="stylesheet" type="text/css" href={styleSheetClass} />
        <div className="titleSection">
          <Separator title='Scholar List' />
        </div>
        <div className='showInactiveScholars'>
          <CheckBox label={'Show Disabled Scholars'} objectKey={'1'} onChange={this.onChangeShowInactiveScholars} />
        </div>
        <Modal
          title={confirmationModal.title}
          show={modal.visibility}
          actions={confirmationModal.actions}
          onClickOut={this.toggleNoModal}>
          <p>{confirmationModal.messsage}</p>
        </Modal>
        <Paginator
          totalElements={pagination.totalElements}
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
        <Message type={message.type} text={message.value} visible={message.visible} onClick={this.closeMessage}></Message>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    /** List of students */
    students: state.studentReducer.students,
    /** Object with  the total elements by page, elements by page and page current*/
    pagination: state.studentReducer.pagination,
    /** Get a variable bool for display scholars, by default is true  */
    active: state.studentReducer.active,
    /** Object with the string message and type message */
    message: state.studentReducer.message,
    /** Object with the visibility of the modal and the actual value */
    modal: state.studentReducer.modal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: (payload) => dispatch(actions.GET_STUDENTS(payload)),
    getLeftPage: (payload) => dispatch(actions.GET_LEFT_PAGE(payload)),
    /** Method to get the list of twenty five next students */
    getRightPage: (payload) => dispatch(actions.GET_RIGHT_PAGE(payload)),
    /** Method to change the state of a student */
    changeScholarState: (payload) => dispatch(actions.CHANGE_SCHOLAR_STATE(payload)),
    /** Method to change the state of modal */
    setModal: (payload) => dispatch(actions.SET_MODAL(payload)),
    /** Method to change the active of checkbox */
    setIsActive: (payload) => dispatch(actions.SET_IS_ACTIVE(payload)),
    /** Method to change the state of message */
    setMessage: (payload) => dispatch(actions.SET_MESSAGE_STATE(payload)),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(List);