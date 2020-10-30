import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListOverviewPage from "./containers/ListOverview/ListOverview";
import SingleListPage from "./containers/SingleList/SingleList";
import TagsProvider from "./providers/TagsProvider";

function App() {
  return (
    <TagsProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <ListOverviewPage />
          </Route>
          <Route exact path="/:id">
            <SingleListPage />
          </Route>
        </Switch>
      </Router>
    </TagsProvider>
  );
}

export default App;
