import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PersonCard from '../PersonCard';
import ButtonComponet from '../ActionButton';
import Dropdown from '../Dropdown';
import InputField from '../InputField';
import Icon from 'material-icons-react';
import './style.css';

/** Use the ModuleCard for show in different information in the application support title, icon, disabled, lisItems, action, options, objectKey, value, and leftProps for PersonCard component*/
function ModuleCard({ secondaryTitle, icon, disabled, action, listItems, options, objectKey, value, onClickDisabled, workLoadItem, ...leftProps }) {

  const [visible, setVisible] = useState('hidden');
  const [workLoadHour, setWorkLoadHour] = useState('');

  const removeItem = (event) => {
    listItems.splice(event.target.id, 1);
    workLoadItem.splice(event.target.id, 1);
    action(objectKey, listItems, workLoadItem);
  }

  const handleOnChangeInput = (objectKey, value) => {
    setWorkLoadHour(value);
  }

  const items = listItems.map((item, index) => {
    return <div className='item' key={index}>
      <p>{item}<br />{workLoadItem[index]}&nbsp;hours</p>
      <div className={`action ${disabled ? 'actionDisabled' : ''}`}>
        <div className='button'>
          <Icon icon='clear' id={index} onClick={removeItem} />
        </div>
      </div>
    </div>
  });

  const addItem = function (key, value) {
    listItems.unshift(value);
    workLoadItem.unshift(workLoadHour);
    action(key, listItems, workLoadItem)
  }

  const showInput = function () {
    setVisible('visible')
  }

  const handleOnBlur = function (key, value) {
    addItem(key, value);
    setVisible('hidden')
  }

  const handleOnclick = function () {
    onClickDisabled(objectKey)
  }

  return (
    <div className='containerModuleCardComponent'>
      <div className='moduleCardComponent'>
        <PersonCard {...leftProps} onClickDisabled={handleOnclick} disabled={!disabled}></PersonCard>
        <div className='module'>
          <div className={`title ${disabled ? 'titleDisabled' : ''}`}>
            <div>
              <h3>{secondaryTitle}</h3>
            </div>
            <div className='action'>
              <ButtonComponet onClick={showInput} icon={icon} />
            </div>
          </div>
          <div className='containerList'>
            <div className={visible}>
              <InputField
                label={'Workload'}
                onChange={handleOnChangeInput}
                objectKey={'workLoad'}
                type={'number'}
                required={false}
                width={'30'} />
              <Dropdown objectKey={objectKey} options={options} onChange={handleOnBlur} value={value} width={60} />
            </div>
            <div className={visible === 'hidden' ? 'items' : 'itemsHidden'}>
              {items}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ModuleCard.defaultProps = {
  secondaryTitle: '',
  icon: 'add',
  disabled: false,
  action: () => { },
  listItems: [],
  workLoadItem: [],
  options: [],
  value: '',
}

ModuleCard.propTypes = {
  /** Title on the ModuleCard*/
  secondaryTitle: PropTypes.string,
  /** Icon in the title on the ModuleCard*/
  icon: PropTypes.string,
  /** Enable o disable the ModuleCard */
  disabled: PropTypes.bool,
  /** Action for the ModuleCard*/
  action: PropTypes.func,
  /** listitem on the ModuleCard*/
  listItems: PropTypes.array,
  /** options on the ModuleCard */
  workLoadItem: PropTypes.array,
  /** options on the ModuleCard */
  options: PropTypes.array,
  /** value on the ModuleCard for Dropdown*/
  value: PropTypes.string,

}

export default ModuleCard;