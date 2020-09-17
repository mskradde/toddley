import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import Header from "../components/Header";

export default {
  title: "Header",
  component: Header,
};

const Template = () => (
  <Router>
    <Header />
  </Router>
);

export const MainHeader = Template.bind({});
