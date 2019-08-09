import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Ink from 'react-ink'

/** Displays a list of values as individual, keyboard accessible, chips. */

function Chip({ chipContent, objectKey, onClick, active }) {

  const clickChip = () => {
    onClick(objectKey, active);
  }

  const list = chipContent.map((chip, index) => (
    <div className="chip" key={index}>
      {chip}
    </div>
  ));

  const addActive = active ? "active" : "";
  console.log(active, "active");

  return (
    <div className={`chipsContainer ${addActive}`} id="chip" onClick={clickChip}>
      {list}
      <Ink />
    </div>
  );
}

Chip.defaultProps = {
  chipContent: [],
  objectKey: '',
  onClick: () => console.log("Click"),
  active: false,
};

Chip.propTypes = {

  /** The text on the chip */
  listChips: PropTypes.arrayOf(PropTypes.string),
  /** Thekey of the chip */
  objectKey: PropTypes.string,
  /** The callback to execute when it's clicked-on */
  onClick: PropTypes.func,
  /** Enable or disable the chip */
  active: PropTypes.bool,
}

export default Chip;