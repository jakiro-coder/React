import React, { useState, useEffect } from 'react';
import './style.css';
import ActionButton from '../ActionButton';
import PropTypes from 'prop-types';

/** Use action form to add buttons quickly. */

function ActionForm({ actions, title, children }) {
  const [disabled, setDisabled] = useState(false);
  const child = children ? React.Children.only(children) : '';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(function didComponentMout() {
    const dirtyInputs = formRef.current.querySelectorAll('input.dirty');
    setDisabled(!!dirtyInputs.length);
  });

  const titleAction = title ? <h1>{title}</h1> : null;

  const buttons = actions.map((button, index) =>
    <ActionButton
      key={index}
      text={button.text}
      type={button.type}
      icon={button.icon}
      onClick={button.onClick}
      disabled={button.type === 'primary' ? !disabled : false}
    />
  );
  const formRef = React.createRef();
  return (
    <div className="actionFormComponent" ref={formRef}>
      {titleAction}
      {child}
      {buttons}
    </div>
  );
}

ActionForm.defaultProps = {
  actions: [],
  title: ''
}

ActionForm.propTypes = {
  /** Dates of ActionButton */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The text on the button */
      text: PropTypes.string,
      /** The type of style of the button */
      type: PropTypes.string,
      /** The name of the icon class from material-icons */
      icon: PropTypes.string,
      /** The callback to execute when it's clicked-on */
      onClick: PropTypes.func,
      /** Enables or disables the button */
      disabled: PropTypes.bool,
    })
  ),
  /** The Text that will be seen at the beginning of the form. */
  title: PropTypes.string,
}

export default ActionForm;