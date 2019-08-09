import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

/** ToolBarView is a container for children that facilitates the display of a sent id. */

function ToolBarView({ scrollTo, onScrollTop, onScrollBottom, children }) {

  function handleScroll(event) {
    const scrollTop = event.target.scrollTop;

    if (scrollTop === 0) {
      onScrollTop();
    }

    if (event.target.scrollHeight - scrollTop === event.target.clientHeight) {
      onScrollBottom();
    }
  }

  function addClassToElementSelected(elementSelected) {
    elementSelected.classList.add('elementSelected');
  }

  function getPositionY(element) {
    const rect = element.getBoundingClientRect();
    return rect.top;
  }

  function getElement(element) {
    let elementToolBarView; 
    for (let i = 0; i < element.length; i++) {
      if(element[i].id === `${scrollTo}`)
      {
        elementToolBarView = element[i];
        break;
      }
    }
    return elementToolBarView;
  }

  const toolBarView = React.createRef();

  useEffect(function componentDidMount() {
    const elementToolBarView = toolBarView.current;
    const elementScrollTo = getElement(elementToolBarView.childNodes);
    if (elementScrollTo) {
      const positionToolBarTop = getPositionY(elementToolBarView);
      elementScrollTo.parentNode.scrollTop = elementScrollTo.offsetTop - positionToolBarTop;
      addClassToElementSelected(elementScrollTo);
    }
  });

  return (
    <section className='toolBarViewSectionComponent' onScroll={handleScroll} ref={toolBarView}>
      {children}
    </section>
  );
};

ToolBarView.defaultProps = {
  onScrollTop: () => { },
  onScrollBottom: () => { },
  scrollTo: '',
  children: null,
}

ToolBarView.propTypes = {
  /** This callback to execute when the scroll is top */
  onScrollTop: PropTypes.func,
  /** This callback to execute when the scroll is bottom */
  onScrollBottom: PropTypes.func,
  /** The id of the element on which the scroll is positioned */
  scrollTo: PropTypes.string
}

export default ToolBarView;