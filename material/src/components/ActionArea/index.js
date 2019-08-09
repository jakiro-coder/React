import React from 'react';
import PropTypes from 'prop-types';
import ButttonsComponent from '../ActionButton';
import './style.css';

/** Use the ActionArea for show in differents actions in the application */
function ActionArea({ actions }) {
  const mappedElements = actions.map((element, index) =>
    <ButttonsComponent
      key={index}
      text={element.text}
      onClick={element.onClick}
      disabled={element.disabled}
      type={element.type}
      icon={element.icon}
    />
  );
  return (
    <div className="actionAreaComponent" >
      {mappedElements}
    </div>
  );
}

ActionArea.defaultProps = {
  actions: [],
}

ActionArea.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      /** Action for the Modal*/
      onClick: PropTypes.func,
      /** Option of the visibility Modal*/
      disabled: PropTypes.bool,
      /** Supports the types of primary, danger and default*/
      type: PropTypes.oneOf([
        'primary',
        'danger',
        'default'
      ]),
      /** Icon for the button in the Modal*/
      icon: PropTypes.string,
      /** Text for the button in the Modal*/
      text: PropTypes.string
    })
  ),
}

export default ActionArea;