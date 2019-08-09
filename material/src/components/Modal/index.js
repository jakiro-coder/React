import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './style.css';

/** Use use the modal for the extra actions in the application support title, actions and content  */
function Modal({ title, actions, show, onClickOut, children }) {
  const child = children ? React.Children.only(children) : null;

  return (
    <div className={`modalComponent ${show ? 'visible' : 'hidden'}`}>
      {show ?
        <>
          <div className='modal' onClick={onClickOut}></div>
          <Card title={title} actions={actions}>
            {child}
          </Card>
        </>
        : ''
      }
    </div>
  );
}

Modal.defaultProps = {
  title: '',
  actions: [],
  show: false,
  onClickOut: () => { },
  children: null
}

Modal.propTypes = {
  /** Title on the Modal*/
  title: PropTypes.string,
  /** Actions for the Modal*/
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      /** Action for the Modal*/
      onClick: PropTypes.func,
      /** Option of the visibility Modal*/
      disabled: PropTypes.bool,
      /** Option that changes the color of the button*/
      type: PropTypes.string,
      /** Icon for the button in the Modal*/
      icon: PropTypes.string,
      /** Text for the button in the Modal*/
      text: PropTypes.string
    })
  ),
  /** This argument show or not the Modal*/
  show: PropTypes.bool,
  /** This callback when click outside of Card*/
  onClickOut: PropTypes.func,
  /** The Children is required for the modal */
  children: PropTypes.object
}

export default Modal;