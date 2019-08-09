import React from 'react';
import PropTypes from 'prop-types';

/** This is the component for show items order by columns */

function DraggableItem({ children, style }) {
  return (
    <div className={'draggableItemComponent'} style={style}>
      {children}
    </div>
  );
}

DraggableItem.defaultProps = {
  children: null
}

DraggableItem.propTypes = {
  /** The content of DraggableItem */
  children: PropTypes.object,
}

export default DraggableItem;