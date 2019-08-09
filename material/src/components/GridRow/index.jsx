import React from 'react';
import PropTypes from 'prop-types';

/** Grid Row is based on a 12-column grid layout.*/
function GridRow({ children }) {
  return (
    <div className="row">
      {children}
    </div>
  );
}

GridRow.defaultProps = {
  children: null
};

GridRow.propTypes = {
  /** children can be GridItem */
  children: PropTypes.object,
};

export default GridRow;