import React from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';
import './style.css';

/** Show the hour and minutes */

function TimeOption({ optionsList, currentOption, onClick, active, className}) {

  function clickOption() {
    currentOption.isSelected = !currentOption.isSelected;
    onClick(currentOption);
  }

  const list = optionsList.map((option, index) => (
    <div className="timeOption" key={index}>
      {option}
    </div>
  ));

  const addActive = active ? "active" : "";

  return (
    <div className={`timeOptionComponent ${className} ${addActive}`} onClick={clickOption}>
      {list}
      <Ink />
    </div>
  );
}

TimeOption.propTypes = {
  /** The text on the button */
  optionsList: PropTypes.array,
  /** The current Option should be a hour or minute*/
  currentOption: PropTypes.object,
  /** The callback to execute when it's clicked-on */
  onClick: PropTypes.func,
  /** The state of the time option */
  active: PropTypes.bool,
  /** The current schedule */
  className: PropTypes.string,
}

export default TimeOption;