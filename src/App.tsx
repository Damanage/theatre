import React from "react";
import BaseLayout from "./layouts/Base";
import { Route, Switch } from "react-router-dom";
import history from "./utils/history";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router } from "react-router";
import * as routes from "./constants/routes";
import  perfData  from "./mocks/performances/performancesMock";
import  sessData  from "./mocks/sessions/sessionsMocks";
import Home from "./views/Home";
import Tickets from "./views/Tickets";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Router history={history}>
        <div>
          <Switch>
            <Route
              path={routes.home.path}
              exact={routes.home.exact}
              component={BaseLayout(Home, perfData)}
            />
            <Route
              path={routes.tickets.path}
              exact={routes.tickets.exact}
              component={BaseLayout(Tickets, {performanceData: perfData, sessionData: sessData})}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
