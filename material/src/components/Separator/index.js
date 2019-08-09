import React from 'react';
import './style.css';

function Separator({ title }) {
  return (
    <div className='sectionSeparatorComponent'>
      <div>{title}</div>
    </div>
  );
}

export default Separator;