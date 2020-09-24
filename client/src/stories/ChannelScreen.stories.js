import React from "react";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import ChannelCard from "../components/ChannelCard";

import { BrowserRouter as Router } from "react-router-dom";
import ChannelScreen from "../pages/ChannelScreen";

export default {
  title: "ChannelScreen",
  // component: Header,
  // Footer,
  // ChannelCard,
};

const Template = () => (
  <Router>
    <ChannelScreen></ChannelScreen>
  </Router>
);

export const ChannelScreens = Template.bind({});
