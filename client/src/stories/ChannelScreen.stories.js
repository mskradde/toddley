import React from "react";
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
