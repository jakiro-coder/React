import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ActionButton from '../ActionButton';
import './style.css';

/* The Action form contains childrens and have a list of actions */

function ActionFormValidator({ children, actions, title }) {
  const [disabled, setDisabled] = useState(false);

  const formRef = React.createRef();

  useEffect(() => {
    const invalidForm = isDirty() && validate();
    setDisabled(invalidForm);
  }, [formRef]);

  function isDirty() {
    const dirtyInputs = formRef.current.querySelectorAll('.dirty');
    if (dirtyInputs.length !== 0) {
      return true;
    }
    return false;
  }

  function validate() {
    const Inputs = formRef.current.querySelectorAll("input");
    const InputsArray = Array.from(Inputs)
    return InputsArray.every((input) => input.checkValidity())
  }


  const buttons = actions.map((action, key) => {
    return <ActionButton
      key={key}
      text={action.text}
      type={action.type}
      icon={action.icon}
      onClick={action.onClick}
      disabled={action.type === 'primary' ? !disabled : false}>
    </ActionButton>
  });

  return (
    <div className="actionFormValidatorComponent">
      <span className="title">{title}</span>
      <div className="actionForm" ref={formRef}>
        {children}
        <div className="buttonContent">
          {buttons}
        </div>
      </div>
    </div>
  );
}
ActionFormValidator.defaultProps = {
  actions: [],
  title: '',
}

ActionFormValidator.propTypes = {
  /** Array of ActionButton properties to render many buttons with diferent behaviors */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      onClick: PropTypes.func,
      type: PropTypes.string,
    })
  ),
  /**Shows a text above the form. */
  title: PropTypes.string,
  /**Contains an Array of Any elements */
  children: PropTypes.element,
}

export default ActionFormValidator;