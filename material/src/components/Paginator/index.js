import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import './style.css';

/** Use the Paginator for show paginated content */
function Paginator({ onClickGoBegin, onClickGoEnd, totalElements, elementsForPage, elementActive, children, onClickLeft, onClickRight, ...leftProps }) {
  const totalPages = Math.ceil(totalElements / elementsForPage);

  let disabledLeft = false;
  let disabledRight = false;

  if (elementActive === 1) {
    disabledLeft = true;
  }

  if (elementActive === totalPages) {
    disabledRight = true;
  }

  return (
    <div className='pagination'>
      <div className='viewPaginator'>{children}</div>
      <div className='paginator'>
        <span>{`Rows per page: `}</span>
        <Dropdown {...leftProps} />
        <span>{`${elementActive} of ${totalPages}`}</span>
        <button className='paginatorLeft' onClick={onClickGoBegin} disabled={disabledLeft}>|❮</button>
        <button className='paginatorLeft' onClick={onClickLeft} disabled={disabledLeft}>❮</button>
        <button className='paginatorRight' onClick={onClickRight} disabled={disabledRight}>❯</button>
        <button className='paginatorRight' onClick={onClickGoEnd} disabled={disabledRight}>❯|</button>
      </div>
    </div>
  );
};

Paginator.defaultProps = {
  options: [10, 15, 25, 50],
  totalElements: 1,
  elementsForPage: 1,
  elementActive: 1,
  onClickLeft: function () { },
  onClickRight: function () { },
  onClickGoBegin: function () { },
  onClickGoEnd: function () { },
  children: null,
}

Paginator.propTypes = {
  /** List of elements for select */
  options: PropTypes.array,
  /** Number of total elements */
  totalElements: PropTypes.number,
  /** Number of elements for page*/
  elementsForPage: PropTypes.number,
  /** Number of the current page */
  elementActive: PropTypes.number,
  /** Action for save number the previous page */
  onClickLeft: PropTypes.func,
  /** Action for save number the next page */
  onClickRight: PropTypes.func,
  /** Action for save number the first page */
  onClickGoBegin: PropTypes.func,
  /** Action for save number the last page */
  onClickGoEnd: PropTypes.func,
  /** The Children is required for the Paginator*/
  children: PropTypes.element.isRequired,
}

export default Paginator;