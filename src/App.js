import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EbayListing from "./components/EbayListing"

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ebaylisting/:id">
            <EbayListing />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
    </Router>
  );
}

function WelcomePage() {
  return <div>This is the public side of tool!</div>
}
