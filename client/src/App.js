import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Footer> </Footer>
      </Router>
    </>
  );
}

export default App;
