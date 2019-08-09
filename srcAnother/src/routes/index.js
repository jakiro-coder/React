import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from '../views/Register';
import List from "../views/List";
import Dashboard from "../views/Dashboard";
import menuleft from "../views/MenuLeft";
import Search from "../views/Search";
import Update from "../views/UpdateTrainer";
import Profile from '../views/Profile';

function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" component={Dashboard} />
        <Route path="/" component={menuleft} />
        <Route exact path="/" component={List} />
        <Switch>
          <Route exact path="/trainers/create" component={Register} />
          <Route exact path="/trainers" component={List} />
          <Route exact path="/trainers/search" component={Search} />
          <Route exact path="/trainers/:id/update" component={Update} />
          <Route exact path="/trainers/:id/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Routes;
