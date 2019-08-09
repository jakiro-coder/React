import React from 'react';
import PropTypes from 'prop-types';
import ActionsArea from '../ActionArea';
import Icon from 'material-icons-react';
import './style.css';

/** Use use the Card for show in different information in the application support title, actions and content  */
function Card({ title, actions, icon, children }) {
  const child = children ? React.Children.only(children) : null;

  const onclickStopPropagation = (event) => {
    event.stopPropagation();
  }

  return (
    <div className="cardComponent" >
      <div className="card">
        <div className="content">
          <div className='title'>
            {icon && <Icon icon={icon} />}
            <h2 >{title}</h2>
          </div>
          <div className='children'>{child}</div>
          <div onClick={onclickStopPropagation}>
            <ActionsArea actions={actions} />
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  title: '',
  actions: [],
  children: null,
  icon: ''
}

Card.propTypes = {
  /** Title on the Modal*/
  title: PropTypes.string,
  /** Actions for the Modal*/
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      /** Action for the Modal*/
      onClick: PropTypes.func,
      /** Option of the visibility Modal*/
      disabled: PropTypes.bool,
      /** Option that changes the color of the button*/
      type: PropTypes.string,
      /** Icon for the button in the Modal*/
      icon: PropTypes.string,
      /** Text for the button in the Modal*/
      text: PropTypes.string
    })
  ),
  /** The Children is required for the modal */
  children: PropTypes.element.isRequired,
  /** The icon for the title */
  icon: PropTypes.string
}

export default Card;