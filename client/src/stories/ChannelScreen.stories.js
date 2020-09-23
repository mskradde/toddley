import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChannelCard from "../components/ChannelCard";
import PlusIcon from "../assets/plus-icon.svg";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "ChannelScreen",
  component: Header,
  Footer,
  ChannelCard,
};

const Template = () => (
  <Router>
    <Header></Header>
    <ChannelCard> title=`Neuer Channel` imgSrc={PlusIcon}</ChannelCard>
    <Footer></Footer>
  </Router>
);

export const ChannelScreen = Template.bind({});
