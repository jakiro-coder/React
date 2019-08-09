import React from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';
import Icon from 'material-icons-react';
import CustomIcon from '../CustomIcon'
import WithFade from '../WithFade';
import './style.css';

/**
    Vertical menu to switch between views.
*/

function SideNavbar({ icon, header, content, colDisplay, onClose, isActive }) {

  const closeButton = icon ? <Icon  icon='apps'><Ink /></Icon> : null;

  const entries = content.map((item, index) => {
    const sideNavBarItemClass = `sidenavbarItem ${item.class}`;
    const defineSize = item.iconSize ? item.iconSize : 'm';

    return (
      <div className={sideNavBarItemClass} onClick={item.onClick} key={index}>
        <Ink />
        {item.icon ? <CustomIcon icon={item.icon} size={defineSize} /> : ''}
        <p>{item.primary}</p>
      </div>
    )
  });

  const menuState = isActive ? 'openMenu' : 'closeMenu';

  return (
    <div className={`sidenavbarComponent ${colDisplay} ${menuState}`}>
      <div className='appIcon' onClick={onClose}>
        {closeButton}
      </div>
      <p className='menuTitle'>{header}</p>
      <div className='menuEntries'>{entries}</div>
      <WithFade visible={isActive} type='black' onclickFade={onClose}>
      </WithFade>
    </div >
  );
}

SideNavbar.defaultProps = {
  icon: '',
  header: '',
  content: [],
  colDisplay: 'single',
  onClose: () => { }
}

SideNavbar.propTypes = {
  /** The icon to click-on to minimize the menu */
  icon: PropTypes.string,
  /** The tittle on the top of the component  */
  header: PropTypes.string,
  /** The menu entries to renderize */
  content: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    primaryText: PropTypes.string,
    objectKey: PropTypes.string,
    iconSize: PropTypes.string
  })),
  /** Defines if the menu items are arranged in a single or double column */
  colDisplay: PropTypes.string,
  /** Callback to close the sidenav menu */
  onClose: PropTypes.func,
}

export default SideNavbar;