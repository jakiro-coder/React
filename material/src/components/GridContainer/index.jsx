import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/** The GridContainer creates visual consistency between layouts while allowing flexibility across a wide variety of designs.*/

function GridContainer({ children }) {
  return (
    <div className="gridContainerComponent">
      {children}
    </div>
  );
}

GridContainer.defaultProps = {
  children: null
};

GridContainer.propTypes = {
  /** children can be GridRow */
  children: PropTypes.object,
};

export default GridContainer;