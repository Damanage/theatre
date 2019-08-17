import React from "react";
import BaseLayout from "./layouts/Base";
import { Route, Switch, RouteProps } from "react-router-dom";
import history from "./utils/history";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router } from "react-router";
import * as routes from "./constants/routes";
import  performancesMockData  from "./mocks/performances/performancesMock";
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
              component={BaseLayout(Home, performancesMockData)}
            />
            <Route
              path={routes.tickets.path}
              exact={routes.tickets.exact}
              component={BaseLayout(Tickets, performancesMockData)}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
