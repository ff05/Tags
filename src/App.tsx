import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListOverviewPage from "./containers/ListOverview/ListOverview";
import SingleListPage from "./containers/SingleList/SingleList";
import TagsProvider from "./providers/TagsProvider";
import PageWrapperStyles from "./containers/shared/PageWrapperStyles";

function App() {
  return (
    <TagsProvider>
      <PageWrapperStyles>
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
      </PageWrapperStyles>
    </TagsProvider>
  );
}

export default App;
