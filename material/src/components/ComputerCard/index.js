import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'material-icons-react';
import InputField from '../InputField';
import Ink from 'react-ink'
import { DropTarget } from 'react-drag-drop-container';
import './style.css';

/** Use the Computer for show in different information in the application support name, ip, icon, editable and actions  */
function Computer({ name, objectKey, ip, user, icon, editable, onChange, onClickEdit, onBlur, onHit, readOnly }) {
 
  const onClickEditHandler = function () {
    onClickEdit(objectKey)
  }

  function onclickStopPropagation(event) {
    event.stopPropagation();
  }

  function handleOnBlur(event) {
    onBlur(objectKey);
    event.stopPropagation();
  }

  function handleOnChange(itemKey, value) {
    onChange(objectKey, itemKey, value)
  }

  function handleOnDrop(e) {
    onHit(objectKey, e)
  };

  const nameInput = !readOnly ? <InputField onChange={handleOnChange} objectKey="name" placeholder={'Name'} value={name} type="text" /> : <p>{name}</p>
  const ipInput = !readOnly ? <InputField onChange={handleOnChange} objectKey="ip" placeholder={'255.255.255.255'} value={ip} type="text" /> : ip
  const iconEdit = !readOnly ? <i className='material-icons' >{'save'}</i> : <i className='material-icons'>{'edit'}</i>;
  const actions = editable ?
    <div onClick={onclickStopPropagation} className="actionAreaComponent">
      <button className={`actionButtonComponent default selectedOption`} onClick={onClickEditHandler} >
        <Ink />
        {iconEdit}
      </button>
    </div> : '';

  return (
    <div className={`computerComponent ${editable ? 'disabledComputer' : ''}`} onBlur={handleOnBlur}>
      <DropTarget
        onHit={handleOnDrop}
        targetKey='computer'
      >
        <div className='computerCard'>
          <div className="computerContent">
            <div className='computerTitle'>
              {icon && <Icon icon={icon} />}
              {nameInput}
            </div>
            <div className='computerChildren'>
              {
                <div className={!readOnly ? "computerChildrenContent" : ""}>
                  <div className="textTitle">
                    <p className="text">IP:&nbsp;{ipInput}</p>
                    {user ? <p className="text">{`User: ${user}`}</p> : ''}
                    <div />
                  </div>
                  {actions}
                </div>
              }
            </div>
          </div>
        </div>
      </DropTarget>
    </div>
  );
}

Computer.defaultProps = {
  readOnly: true,
  name: '',
  ip: '',
  user: null,
  icon: 'computer',
  editable: false,
  onChange: () => {},
  onClickEdit: () => { },
  onBlur: () => { },
  onHit: () => { },
}

Computer.propTypes = {
  /** Name on the computer*/
  name: PropTypes.string,
  /** This is the ip for the computer*/
  ip: PropTypes.string,
  /** User data can be any */
  user: PropTypes.string,
  /** Icon in the title of the card computer */
  icon: PropTypes.string,
  /** This is for edit the inputs computer name and ip */
  onClickEdit: PropTypes.func,
  /** Action On blur for the Computer */
  onBlur: PropTypes.func,
  /** Option of the visibility Computer */
  editable: PropTypes.bool,
  /** Action On Hit for the Computer when drops Element, function(data, e) */
  onHit: PropTypes.func,
  /** Action to update editable values in component , function(objectKey, itemKey, value) */
  onChange: PropTypes.func,
  /** Option to change the read only of the card and edit the fields*/
  readOnly: PropTypes.bool,
}
export default Computer;