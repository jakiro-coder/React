import React from 'react';
import { SideNavbar } from 'dev27-components';
import './style.css'
class menuleft extends React.Component {

  constructor(props) {

    super(props);

    this.hideMenu = function () {
      let sidenavbar = document.querySelector('.sidenavbarComponent');
      sidenavbar.style.width = '500px';
    }

    this.actions = [
      {
        click: this.hideMenu,
        text: '',
        icon: 'apps'
      }
    ]

    this.trainerMenuEntries = [
      {
        icon: 'person_add',
        primary: 'Register',
        class: 'register',
        onClick: this.redirectToCreateTrainer.bind(this),
      },
      {
        icon: 'list',
        primary: 'Trainer list',
        class: 'list',
        onClick: this.redirectToListTrainer.bind(this),
      },
      {
        icon: 'search',
        primary: 'Search trainer',
        class: 'search',
        onClick: this.redirectToSearchTrainer.bind(this),
      }
    ]
  }

  redirectToCreateTrainer = () => {
    this.props.history.push('/trainers/create');
  }

  redirectToListTrainer = () => {
    this.props.history.push('/trainers');
  }

  redirectToSearchTrainer = () => {
    this.props.history.push('/trainers/search');
  }

  render() {

    return (
      <div className='menuLeft'>
        <SideNavbar header='Trainers' content={this.trainerMenuEntries} />
      </div>
    );
  }
}

export default menuleft;