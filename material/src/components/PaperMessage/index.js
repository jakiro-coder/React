import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'material-icons-react';
import './style.css';

/** Use the PaperMessage for show Message */
function PaperMessage({ paperText, fontSize, iconType, messageType }) {

  const sizeText = {
    SMALL: 'small',
    MEDIUM: 'medium',
    BIG: 'big'
  };

  const TYPE_STYLE = {
    WARNING: 'warning',
    DANGER: 'danger',
    SUCCESS: 'success',
    INFOALERT: 'infoAlert',
  };

  const isPaperMessageWhitIcon = () => {
    if (iconType) {
      return (
        <div className={`${TYPE_STYLE[messageType]} container`}>
          <div className={`icon ${sizeText[fontSize]}`}>
            {iconType && <Icon icon={iconType} />}
          </div>
          <div className={`text ${sizeText[fontSize]} textStart`}>
            {paperText}
          </div>
        </div>
      )
    } else {
      return (
        <div className={`${TYPE_STYLE[messageType]} container`}>
          <div className={`text ${sizeText[fontSize]}`}>
            {paperText}
          </div>
        </div>
      )
    }
  }

  return (
    <div className='paperMessageComponent'>
      {isPaperMessageWhitIcon()}
    </div>
  )
}

PaperMessage.defaultProps = {
  paperText: '',
  fontSize: 'SMALL',
  iconType: '',
  messageType: 'WARNING'
}

PaperMessage.propTypes = {
  /** String of paper text */
  paperText: PropTypes.string,
  /** String for text size*/
  fontSize: PropTypes.string,
  /** String of icon type */
  iconType: PropTypes.string,
  /** String of  type */
  messageType: PropTypes.string
}

export default PaperMessage;