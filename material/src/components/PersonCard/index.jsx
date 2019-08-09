import React from 'react';
import PropTypes from 'prop-types';
import ActionsArea from '../ActionArea';
import Avatar from '../Avatar';
import Icon from 'material-icons-react';
import './style.css';

/** Use the PersonCard for show in different information in the application, support: primaryText, secondaryText, additionalInformation, actions, disabled*/

function PersonCard({ primaryText, secondaryText, image, additionalInformation, actions, disabled, onClickDisabled, objectKey, onClick, type }) {

  const informations = additionalInformation.map((information, index) => {
    return <p key={index}>{information}</p>;
  })

  function handleDisabled() {
    onClickDisabled(objectKey)
  }

  function onclickStopPropagation(event) {
    event.stopPropagation();
  }

  const IMAGE_TYPE = {
    picture: image ? <Avatar urlImage={image} /> : <Avatar username={primaryText} />,
    avatar: <Avatar username={primaryText} />,
    icon: image ? <Icon icon={image} /> : '',
  }

  return (
    <div className='personCardComponent' onClick={disabled ? onClick : () => { }}>
      <div className={`content ${disabled ? '' : 'disabled'}`}>
        <div className='body'>
          <div className='avatar'>
            {IMAGE_TYPE[type]}
          </div>
          <div className='title'>
            <h2>{primaryText}</h2>
            <h3>{secondaryText}</h3>
          </div>
          <div onClick={onclickStopPropagation} className='toogleSwitch'>
            <label className='switch' >
              <input type='checkbox' onClick={handleDisabled} defaultChecked={disabled ? false : true} ></input>
              <span className='slider round'></span>
            </label>
          </div>
        </div>
        <div className='additionalInformation'>
          {informations}
        </div>
        <div onClick={onclickStopPropagation} className={disabled ? '' : 'actionsAreaDisabled'}>
          <ActionsArea actions={actions} />
        </div>
      </div>
    </div>
  );
}

PersonCard.defaultProps = {
  primaryText: '',
  secondaryText: '',
  additionalInformation: [],
  actions: [],
  disabled: false,
  objectKey: null,
  onClickDisabled: () => { },
  onClick: () => { },
  type: 'picture'
}

PersonCard.propTypes = {
  /** The title of the person */
  primaryText: PropTypes.string,
  /** The sub title of the person */
  secondaryText: PropTypes.string,
  /** The array with the aditional information about the person */
  additionalInformation: PropTypes.array,
  /** The array with the action of the person  */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      /** Action for the CustomCard*/
      onClick: PropTypes.func,
      /** Option of the visibility CustomCard actions*/
      disabled: PropTypes.bool,
      /** Option that changes the color of the button*/
      type: PropTypes.string,
      /** Icon for the button in the CustomCard*/
      icon: PropTypes.string,
      /** Text for the button in the CustomCard*/
      text: PropTypes.string
    })
  ),
  /** Option for disabled or enabled a button  */
  disabled: PropTypes.bool,
  /** Key for disabled or enabled a button  */
  objectKey: PropTypes.string,
  /** Action for disable/enable the CustomCard  */
  onClickDisabled: PropTypes.func,
  /** Action for the CustomCard  */
  onClick: PropTypes.func,
  /** The type of the avatar*/
  type: PropTypes.string,
}

export default PersonCard;