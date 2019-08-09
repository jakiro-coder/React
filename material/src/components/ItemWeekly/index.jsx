import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'material-icons-react';
import './style.css';

/**
    ItemWeekly display a card.
*/

function ItemWeekly({ primary, secondaryData, icon }) {
  const dataToRender = secondaryData.map((data, index)=><span key={index}>{data}</span>);
  return (
    <div className='itemWeeklyComponent'>
      <div className='header'>
        <Icon icon={icon}></Icon>
        {<span className='primary'>{primary}</span>}
      </div>
      {dataToRender}
    </div>
  );
}

ItemWeekly.defaultProps = {
  primary: '',
  secondaryData: [],
  icon: 'schedule',
};

ItemWeekly.propTypes = {
  /** The primary text of the ItemWeekly */
  primary: PropTypes.string,
  /** The secondary data text of the ItemWeekly */
  secondaryData: PropTypes.arrayOf(
    PropTypes.string
  ),
  /** The icon to display to the ItemWeekly */
  icon: PropTypes.string,
}

export default ItemWeekly;