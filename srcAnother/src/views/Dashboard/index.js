import React, { useState } from 'react';
import { SideNavbar, ToolBar } from 'dev27-components';
import './style.css'

function Dashboard() {

  const redirectToMainPageOfTrainer = () => {
    window.open(`${process.env.REACT_APP_TRAINER_URL}`, "_self")
  }

  const redirectToMainPageOfStudent = () => {
    window.open(`${process.env.REACT_APP_SCHOLAR_URL}`, "_self")
  }

  /** This function redirect to Classroom app when the option is chosen */
  const redirectToMainPageOfClassroom = () => {
    window.open(`${process.env.REACT_APP_CLASSROOM_URL}`, "_self")
  }

  function redirectToProgramAppMainPage () {
    window.open( `${process.env.REACT_APP_PROGRAM_URL}`,"_self")
  }

  function redirectToModulesAppMainPage () {
    window.open( `${process.env.REACT_APP_MODULE_URL}`,"_self")
  }

  /** Redirect to Tools app */
  function redirectToToolsAppMainPage () {
    window.open( `${process.env.REACT_APP_TOOLS_URL}`,"_self")
  }

  const [isActive, setIsActive] = useState(false);

  const actions = [
    {
      click: openMenu,
      text: '',
      icon: 'apps'
    }
  ]

  const appMenuEntries = [
    {
      icon: 'app_students',
      primary: 'Scholars',
      onClick: redirectToMainPageOfStudent.bind(this),
    },
    {
      icon: 'app_trainers',
      primary: 'Trainers',
      onClick: redirectToMainPageOfTrainer.bind(this),
    },
    {
      icon: 'app_labs',
      primary: 'Labs',
      onClick: redirectToMainPageOfClassroom.bind(this),
    },
    {
      icon: 'app_programs',
      primary: 'Programs',
      onClick: redirectToProgramAppMainPage.bind(this),
    },
    {
      icon: 'app_modules',
      primary: 'Modules',
      onClick: redirectToModulesAppMainPage.bind(this),
    },
    {
      icon: 'build',
      primary: 'Tools',
      onClick: redirectToToolsAppMainPage,
    }
  ]

  function openMenu() {
    setIsActive(true);
  }

  function closeMenu() {
    setIsActive(false);
  }

  return (
    <div className='dashboardView'>
      <ToolBar title={'YACHAQ'} actions={actions} >
      </ToolBar>
      <SideNavbar icon={'apps'} header={'Apps'} content={appMenuEntries} colDisplay={'double'} onClose={closeMenu} isActive={isActive} />
    </div>
  );

}

export default Dashboard;