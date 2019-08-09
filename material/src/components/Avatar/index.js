import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/** 
  A circular image displaying a picture or initials.
*/

function Avatar({ urlImage, username }) {

  function getInitials(name) {

    let initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

    return initials;
  };

  const IMAGE_TYPE = {

    picture: <img src={urlImage} alt='' />,
    initials: <p> {getInitials(username)} </p>,
    default: <p> {'NE'} </p>
  }

  const type = (!username && !urlImage) ? 'default' : (urlImage ? 'picture' : 'initials');

  return (

    <div className='avatarComponent'>
      {IMAGE_TYPE[type]}
    </div>
  );
}

Avatar.defaultProps = {
  urlImage: '',
  username: '',
}

Avatar.propTypes = {
  /** The url for the picture */
  urlImage: PropTypes.string,
  /** The name of the user */
  username: PropTypes.string,
}

export default Avatar;