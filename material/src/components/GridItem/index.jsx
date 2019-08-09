import React from 'react';
import PropTypes from 'prop-types';

/** GridItem suport max 12-column.*/
function GridItem({ xs, sm, md, lg, children }) {
  const colXs = xs ? `col-xs-${xs}` : '';
  const colSm = sm ? `col-sm-${sm}` : '';
  let colMd = md ? `col-md-${md}` : '';
  const colLg = md ? `col-lg-${lg}` : '';

  if (!xs && !sm && !md && !lg) {
    colMd = 'col-md-12';
  }

  return (
    <div className={`${colXs} ${colSm} ${colMd} ${colLg}`}>
      {children}
    </div>
  );
}

GridItem.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  children: null
};

GridItem.propTypes = {
  /** Defines maximun width for Extra small (for smartphones) */
  xs: PropTypes.number,
  /** Defines maximun width for Small (for tablets) */
  sm: PropTypes.number,
  /** Defines maximun width for Medium (for laptops) */
  md: PropTypes.number,
  /** Defines the maximum width Extra Large (for desktops) */
  lg: PropTypes.number,
  /** Children can be any */
  children: PropTypes.object,
};

export default GridItem;