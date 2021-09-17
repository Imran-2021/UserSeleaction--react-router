import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import UserDetails from "./Components/UserDetails/UserDetails";
import Users from "./Components/Users/Users";
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/users">
          <Users/>
          </Route>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/userDetails">
            <UserDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
