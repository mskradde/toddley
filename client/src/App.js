import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChannelScreen from "./pages/ChannelScreen";
import RegistrationScreen from "./pages/RegistrationScreen";
import LoginScreen from "./pages/LoginScreen";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/register">
            <RegistrationScreen />
          </Route>
          <Route exact path="/">
            <ChannelScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
