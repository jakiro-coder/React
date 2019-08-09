import React from 'react';
import Ink from 'react-ink'
import PropTypes from 'prop-types';
import Icon from 'material-icons-react';
import ToolTip from '../Tooltip';
import Avatar from '../Avatar';
import './style.css';

/**
    Each item displayed by a list.
*/

function ListItem({ primary, secondary, image, type, onClick, objectKey, actions, disabled }) {

  const buttonsOfListItem = actions.map((action, index) => {
    return (
      <ToolTip title={action.text} position='right' key={index}>
        <button onClick={action.onClick} className='listItemButton'>
          {action.icon ? <Icon icon={action.icon} /> : ''}
        </button>
      </ToolTip>
    )
  });

  const itemHandler = function (element) {

    onClick(element);
  }

  const IMAGE_TYPE = {

    picture: <Avatar urlImage={image} />,
    avatar: <Avatar username={primary} />,
    icon: image ? <Icon icon={image} /> : '',
  }
  const isDisabled = disabled ? 'disabled' : '';
  return (
    <div
      key={objectKey}
      className={`listitemComponent ${isDisabled}`}
      onClick={() => itemHandler(objectKey)}
    >
      {disabled ? null : <Ink />}
      {IMAGE_TYPE[type]}
      <div className='textContainer'>
        <div className='primaryText' >{primary}</div>
        <div className='secondaryText'>{secondary}</div>
      </div>
      {buttonsOfListItem}
    </div>
  );
}

ListItem.defaultProps = {

  primary: '',
  secondary: '',
  image: null,
  type: 'iconList',
  onClick: () => { },
  objectKey: '',
  actions: [],
  disabled: false,
};

ListItem.propTypes = {

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
  /** Defines if the component is disabled/enabled*/
  disabled: PropTypes.bool
}

export default ListItem;