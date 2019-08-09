import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Icon from 'material-icons-react';
import './style.css';

/** This is a component to see the a person's information */

function Profile({ header, information, additionalInfo, type, excludedProfileFieldsList }) {

  const headerData = header.map((element, index) => (
    <div className="headerElement" key={index}>
      <h4>{element.title}</h4>
      <h5>{element.subtitle}</h5>
    </div>
  ))

  const contentInformation = Object.keys(information).map((element, index) => (
    excludedProfileFieldsList.includes(element) ? '' : <p className="capitalize" key={index}>{`${element}: ${information[element]}`}</p>
  ))

  const otherInformation = Object.keys(additionalInfo).map((element, index) => (
    <div key={index}>{additionalInfo[element]}</div>
  ))

  const IMAGE_TYPE = {
    picture: <Avatar urlImage={information.image} />,
    avatar: <Avatar username={information.name} />,
    icon: information.image ? <Icon icon={information.image} /> : '',
  }

  return (
    <div className="profileComponent">
      <div className="containerProfile">
        {IMAGE_TYPE[type]}
        <div className="headerProfile">
          {headerData}
        </div>
        <div className="profileBody">
          {contentInformation}
          <div className="otherData">
            {otherInformation}
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  header: [],
  information: {},
  additionalInfo: {},
  type: 'avatar',
  excludedProfileFieldsList: [],
};

Profile.propTypes = {
  /** The elements of the header */
  header: PropTypes.arrayOf(
    PropTypes.shape({
      /** Title of the header*/
      title: PropTypes.string,
      /** Subtitle of the header*/
      subtitle: PropTypes.string,
    })
  ),
  /** The elements of the body, should support *n attributes */
  information: PropTypes.object,
  /** Additional information in the body, should support *n attributes */
  additionalInfo: PropTypes.object,
  /** The type of image of the item, picture or icon */
  type: PropTypes.string,
  /** The excludedProfileFieldsList is a list for to exclude information */
  excludedProfileFieldsList: PropTypes.array,
}

export default Profile;