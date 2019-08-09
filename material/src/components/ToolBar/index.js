import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../ActionButton';
import Avatar from '../Avatar';
import './style.css';

/** ToolBar is a container for title, actions and children. */

function ToolBar({ title, actions, children }) {

  const arrayAction = actions.map((action, key) => {
    return (
      <ActionButton 
      key={key} 
      onClick={action.click} 
      type={'primary'} 
      text={action.value} 
      icon={action.icon} 
      />
    );
  });

  return (
    <section className='toolBarComponent'>
      <div className='actionsElementToolBar'>
        {arrayAction}
        <div className='logoToolBar'>
      </div>
      </div>
      <div className='titleToolBar titleElementToolBar'>
        <h2>{title}</h2>
      </div>
      <div className='childrenElementToolBar'>
        {children? children: <Avatar username={'guest'}/>}
      </div>
    </section>
  )
}

ToolBar.defaultProps = {
  title: '',
  actions: [],
  children: null,
};

ToolBar.propTypes = {
  /** The title on the ToolBar */
  title: PropTypes.string,
  /** The actions that will be execute in the ToolBar */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      click: PropTypes.func,
      value: PropTypes.string,
      icon: PropTypes.string,
    })
  )
};

export default ToolBar;