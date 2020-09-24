import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import ChannelScreen from "./pages/ChannelScreen";

function App() {
  return (
    <>
      <GlobalStyles />

      <Router>
        <ChannelScreen />
        <Footer />
      </Router>
    </>
  );
}

export default App;
