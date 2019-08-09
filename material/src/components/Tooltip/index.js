import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/** Tooltip provides a text label that is displayed when the user hovers over an element. */

function Tooltip({ title, position, children }) {
  const tooltipPosition = !position ? '' : position;
  return (
    <div className="tooltipComponent">
      <div className="tooltipElement" data-tooltip={title}>
        <i className={`position${tooltipPosition}`} data-tooltip={title}>{children}</i>
      </div>
    </div>
  );
}

Tooltip.defaultProps = {
  title: '',
  position: ''
}

/** Example:  <Tooltip title={Text to show} position='Left'>{child}</Tooltip>*/
/** Positions: Right, Left and Top. */
/** The Position by default is Bottom */
/** Example:  <Tooltip title={Text to show}>{child}</Tooltip>*/

Tooltip.propTypes = {
  /** The text on the Tooltip */
  title: PropTypes.string,
  /** The position of the Tooltip */
  position: PropTypes.string,
}
export default Tooltip;