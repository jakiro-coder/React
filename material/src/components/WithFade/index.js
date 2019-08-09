import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './style.css';

/** WithFade adds behavior for to hide and appear your child */

function WithFade({ visible, type, onclickFade, children }) {

  const classVisible = visible ? 'show' : 'hidden';
  const containerElement = document.createElement('div');

  const handlePRopagation = (event) => {
    event.stopPropagation();
  }

  const content = (
    <div className={`withFadeComponent ${classVisible} ${type}`} onClick={onclickFade}>
      <div onClick={handlePRopagation}>
        {children}
      </div>
    </div>
  );

  useEffect(() => {
    document.body.appendChild(containerElement)
    ReactDOM.render(content, containerElement);
    return () => {
      ReactDOM.unmountComponentAtNode(containerElement);
      document.body.removeChild(containerElement);
    }
  })

  return null;
}

WithFade.defaultProps = {
  visible: false,
  type: '',
  onclickFade: () => { },
  children: null,
}

WithFade.propTypes = {
  /** Defines if it can be visible or hidden */
  visible: PropTypes.bool,
  /** The type of background of fade, should be: white or black */
  type: PropTypes.string,
  /** This callback to hide property visible */
  onclickFade: PropTypes.func,
  /** This should be any object */
  children: PropTypes.object,
}

export default WithFade;