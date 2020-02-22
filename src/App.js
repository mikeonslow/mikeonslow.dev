import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import EventsAndGroups from "./Pages/EventsAndGroups";
import NotFound from "./Pages/NotFound";
import NavigationBar from "./Components/NavigationBar";

const App = props => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/events_and_groups" component={EventsAndGroups} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
