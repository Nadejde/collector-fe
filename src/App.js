import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CardScanner from "./components/CardScanner"
import ResponsiveDrawer from "./components/ResponsiveDrawer"
import Home from "./components/Home"

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/check/:id">
            <ResponsiveDrawer>
              <CardScanner />
            </ResponsiveDrawer>
          </Route>
          <Route path="/">
            <ResponsiveDrawer>
              <Home />
            </ResponsiveDrawer>
          </Route>
        </Switch>
    </Router>
  );
}

function WelcomePage() {
  return <div>Choose a collection from the list.</div>
}
