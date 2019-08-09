import React from 'react';
import { SideNavbar } from 'dev27-components';
import './style.css'
class menuleft extends React.Component {

  constructor(props) {

    super(props);

    this.trainerMenuEntries = [
      {
        icon: 'person_add',
        primary: 'Register',
        class: 'register',
        onClick: this.redirectToCreateStudent.bind(this),
      },
      {
        icon: 'list',
        primary: 'Scholar list',
        class: 'list',
        onClick: this.redirectToListStudent.bind(this),
      },
      {
        icon: 'search',
        primary: 'Search scholar',
        class: 'search',
        onClick: this.redirectToSearchStudent.bind(this),
      }
    ]
  }

  redirectToCreateStudent = () => {
    this.props.history.push('/scholars/create');
  }

  redirectToListStudent = () => {
    this.props.history.push('/scholars');
  }

  redirectToSearchStudent = () => {
    this.props.history.push('/scholars/search');
  }

  render() {
    return (
      <div className='menuLeft'>
        <SideNavbar header='Scholars' content={this.trainerMenuEntries} />
      </div>
    );
  }
}

export default menuleft;