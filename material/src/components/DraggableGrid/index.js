import React from 'react';
import PropTypes from 'prop-types';
import DraggableItem from '../DraggableItem';
import './style.css';

/** This is the component for show items */

function DraggableGrid({ numberColumns, numberRows, items }) {

  const widthColumns = numberColumns > 0 ? (100 / numberColumns) : 0;
  const styleRow = {
    width: `${widthColumns}%`,
  }

  const dragableItems = items.map((item, i) => {
    return (
      <DraggableItem style={styleRow} key={i}>
        {item}
      </DraggableItem>
    )
  });

  return (
    <div className={'draggableGridComponent'}>
      {dragableItems}
    </div>
  );
}

DraggableGrid.defaultProps = {
  numberColumns: 3,
  numberRows: 3,
  items: []
}

DraggableGrid.propTypes = {
  /** The number of columns in the container */
  numberColumns: PropTypes.number,
  /** The number of rows in the container */
  numberRows: PropTypes.number,
  /** The array of objects to renderize, must be any object */
  // items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default DraggableGrid;