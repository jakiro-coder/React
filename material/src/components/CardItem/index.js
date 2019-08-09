import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import './style.css';

/**
    Each item displayed by a Grid.
*/

function CardItem({ ...leftProps }) {
  return (
    <div className='cardItemComponent'>
      <ListItem {...leftProps} />
    </div>
  );
}

CardItem.defaultProps = {

  primary: '',
  secondary: '',
  image: null,
  type: 'iconList',
  onClick: () => { },
  objectKey: '',
  actions: []
};

CardItem.propTypes = {

  /** The primary text of the item */
  primary: PropTypes.string,
  /** The secondary text of the item */
  secondary: PropTypes.string,
  /** The url of the picture or classname of the icon */
  image: PropTypes.string,
  /** The type of image of the item, picture or icon */
  type: PropTypes.string,
  /** The callback to be executed when an item is clicked on */
  onClick: PropTypes.func,
  /** The id of the item */
  objectKey: PropTypes.string,
  /** The actions of the list item */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
}

export default CardItem;