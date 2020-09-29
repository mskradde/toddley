import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import ChannelScreen from "./pages/ChannelScreen";

function App() {
  return (
    <>
      <GlobalStyles />

      <Router>
        <ChannelScreen />
      </Router>
    </>
  );
}

export default App;
