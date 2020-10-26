import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListOverviewPage from "./pages/ListOverview/ListOverview";
import SingleListPage from "./pages/SingleList/SingleList";
import TagsProvider from "./providers/TagsProvider";

function App() {
  return (
    <TagsProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <ListOverviewPage />
          </Route>
          <Route exact path="/:listName">
            <SingleListPage />
          </Route>
        </Switch>
      </Router>
    </TagsProvider>
  );
}

export default App;
