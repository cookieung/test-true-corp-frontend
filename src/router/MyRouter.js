import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import { Dashboard } from '../pages/Dashboard'
import { Create } from '../pages/Create'
import { Update } from '../pages/Update'

export const MyRouter = (props) => {
  return (
    <Switch>
      <Route exact from="/" to="/dashboard" children={<Dashboard />}/>
      <Route path="/create" children={<Create />}/>
      <Route path="/edit/:user_id" children={<Update />}/>
    </Switch>
  );
}
