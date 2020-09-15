import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import Footer from "../components/Footer";

export default {
  title: "Footer",
  component: Footer,
};

const Template = () => (
  <Router>
    <Footer />
  </Router>
);

export const Mainfooter = Template.bind({});
