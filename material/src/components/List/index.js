import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import { DragDropContainer } from 'react-drag-drop-container';
import './style.css';

/**
    Lists are continuous, vertical indexes of text.
*/

function List({ handler, type, content, onDrop, droppable }) {

  let listed = content.map((item, index) =>
    <DragDropContainer
      targetKey={'computer'}
      dragData={item}
      onDrop={onDrop}
      key={index}
    >
      <ListItem primary={item.primary}
        secondary={item.secondary}
        image={item.image}
        type={type}
        onClick={handler}
        objectKey={item.objectKey}
      />
    </DragDropContainer>
  );

  if (!droppable) {
    listed = content.map((item, index) =>
      <ListItem
        primary={item.primary}
        secondary={item.secondary}
        image={item.image}
        type={type}
        onClick={handler}
        objectKey={item.objectKey}
      />
    );
  }
  return (
    <div className="listComponent">
      {listed}
    </div>
  );
}

List.defaultProps = {
  handler: () => { },
  type: '',
  content: [],
  onDrop: () => { },
  droppable: false,
};

List.propTypes = {
  /** The callback to be executed when an item is clicked on */
  handler: PropTypes.func,
  /** The type of images the list items will display */
  type: PropTypes.string,
  /** The array of objects to renderize */
  content: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    objectKey: PropTypes.string.isRequired
  })).isRequired,
  /** The callback to be executed when item is drop */
  onDrop: PropTypes.func,
  /** Defines if item to be droppable */
  droppable: PropTypes.bool,
}

export default List;