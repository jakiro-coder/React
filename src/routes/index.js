import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "../views/List";
import Register from '../views/Register';
import Dashboard from "../views/Dashboard";
import Menuleft from "../views/MenuLeft";
import Search from "../views/Search";
import UpdateScholar from "../views/UpdateScholar";
import Profile from '../views/Profile';

function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" component={Dashboard} />
        <Route path="/" component={Menuleft} />
        <Route exact path="/" component={List} />
        <Switch>
          <Route exact path="/scholars/create" component={Register} />
          <Route exact path="/scholars" component={List} />
          <Route exact path="/scholars/search" component={Search} />
          <Route exact path="/scholars/:id/update" component={UpdateScholar} />
          <Route exact path="/scholars/:id/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default Routes;