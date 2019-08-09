import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'material-icons-react';
import './style.css';

import iconTrainers from '../utilities/customIcons/trainer.svg';
import iconStudent from '../utilities/customIcons/student.svg';
import iconLab from '../utilities/customIcons/lab.svg';
import iconProgram from '../utilities/customIcons/program.svg';
import iconModule from '../utilities/customIcons/module.svg';
import iconSave from '../utilities/customIcons/customSave.svg';
import iconSaveBlack from '../utilities/customIcons/customSaveBlack.svg';

/** Icon Component that support Material Icon icons and also custom icons from utility folder */
function CustomIcon({ icon, size}) {

  const CUSTOM_ICONS = {
    app_trainers: iconTrainers,
    app_students: iconStudent,
    app_labs: iconLab,
    app_programs: iconProgram,
    app_modules: iconModule,
    custom_save: iconSave,
    custom_save_black: iconSaveBlack
  }

  const chooser = CUSTOM_ICONS[icon] ? <img src={CUSTOM_ICONS[icon]} alt="" /> : <Icon icon={icon} />;

  return (
    <div className={`customIconComponent ${size}`}>
      {chooser}
    </div>
  );
}

CustomIcon.defaultProps = {
  icon: '',
  size: 'm'
}

CustomIcon.propTypes = {
  /** This is the icon name, can be either Material Icon or custom names */
  icon: PropTypes.string,
  /** Size can be s, m, or l  */
  size: PropTypes.string
}

export default CustomIcon;