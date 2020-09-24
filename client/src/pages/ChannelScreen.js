import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChannelCard from "../components/ChannelCard";
import { BrowserRouter as Router } from "react-router-dom";
import PlusIcon from "../assets/plus-icon.svg";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;

  > .ChannelCard {
    padding: 0.5em;
  }
`;
export function ChannelScreen() {
  return (
    <Router>
      <Container>
        <Header></Header>
        <Main>
          <ChannelCard
            title="Neuer Channel"
            imgSrc={PlusIcon}
            onClick={() => alert("Hallo")}
          />
        </Main>
        <Footer></Footer>
      </Container>
    </Router>
  );
}

export default ChannelScreen;

ChannelScreen.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
