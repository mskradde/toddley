import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChannelCard from "../components/ChannelCard";
import { BrowserRouter as Router } from "react-router-dom";
import PlusIcon from "../assets/plus-icon.svg";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 30%);
  grid-template-columns: repeat(3, 30%);
  justify-items: center;

  & > Footer {
    grid-area: 4/1/5/5;
  }
`;

function ChannelScreen({ title, imgSrc }) {
  return (
    <Router>
      <Container>
        <Header></Header>
        <main>
          <ChannelCard title="Neuer Channel" imgSrc={PlusIcon} />
        </main>
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
