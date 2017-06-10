import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../main";
import Results from "../common/results";
import Saved from "../common/saved";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path = "results" component={Results}/> 
    <Route path = "saved" component={Saved}/> 
    <IndexRoute component = {Results}/>
    </Route>
  </Router>
);

export default routes;
