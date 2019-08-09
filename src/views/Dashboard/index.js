import React, { useState } from 'react';
import { SideNavbar, ToolBar } from 'dev27-components';
import './style.css'

function Dashboard() {

  const [isActive, setIsActive] = useState(false);

  function openMenu() {
    setIsActive(true);
  }

  function closeMenu() {
    setIsActive(false);
  }

  function redirectToScholarAppMainPage () {
    window.open( `${process.env.REACT_APP_SCHOLAR_URL}`,"_self")
  }
  
  function redirectToTrainerAppMainPage () {
    window.open( `${process.env.REACT_APP_TRAINER_URL}`,"_self")
  }

  /** Redirect to Classroom app */
  function redirectToMainPageOfClassroom () {
    window.open(`${process.env.REACT_APP_CLASSROOM_URL}`, "_self")
  }

  function redirectToProgramAppMainPage () {
    window.open( `${process.env.REACT_APP_PROGRAM_URL}`,"_self")
  }

  function redirectToModulesAppMainPage () {
    window.open( `${process.env.REACT_APP_MODULE_URL}`,"_self")
  }

  function redirectToToolsAppMainPage () {
    window.open( `${process.env.REACT_APP_TOOLS_URL}`,"_self")
  }

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
      onClick: redirectToScholarAppMainPage
    },
    {
      icon: 'app_trainers',
      primary: 'Trainers',
      onClick: redirectToTrainerAppMainPage
    },
    {
      icon: 'app_labs',
      primary: 'Labs',
      onClick: redirectToMainPageOfClassroom
    },
    {
      icon: 'app_programs',
      primary: 'Programs',
      onClick: redirectToProgramAppMainPage
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

  return (
    <div className='dashboardView'>
      <ToolBar title={'YACHAQ'} actions={actions} >
      </ToolBar>
      <SideNavbar
        icon={'apps'}
        header={'Apps'}
        content={appMenuEntries}
        colDisplay={'double'}
        onClose={closeMenu}
        isActive={isActive}
      />
    </div>
  );
}

export default Dashboard;