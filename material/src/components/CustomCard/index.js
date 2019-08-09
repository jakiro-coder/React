import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './style.css';

/** Use the CustomCard for show in different information in the application support title, icon, informationList, disabled and actions*/
function CustomCard({ title, icon, informationList, disabled, actions }) {

  const informations = informationList.map((information, index) => {
    return <p key={index}>{information}</p>
  });

  return (
    <div className={`customCardComponent ${disabled ? 'disabledCustomCard' : ''}`}>
      <div className='customCard'>
        <Card title={title} icon={icon} actions={actions}>
          <div>{informations}</div>
        </Card>
      </div>
    </div>
  );
}

CustomCard.defaultProps = {
  title: '',
  icon: '',
  informationList: [],
  disabled: false,
  actions: []
}

CustomCard.propTypes = {
  /** Title on the CustomCard*/
  title: PropTypes.string,
  /** Icon in the title on the CustomCard*/
  icon: PropTypes.string,
  /** Information for the child of the card*/
  informationList: PropTypes.array,
  /** Enable o disable the card */
  disabled: PropTypes.bool,
  /** Actions for the CustomCard*/
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
}
export default CustomCard;