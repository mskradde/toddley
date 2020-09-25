import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChannelCard from "../components/ChannelCard";
import { BrowserRouter as Router } from "react-router-dom";
import PlusIcon from "../assets/plus-icon.svg";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Modal from "../components/Modal";
import BasicForm from "../components/BasicForm";

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
  const [channels, setChannels] = useState([
    {
      title: "Regenbogen-Gruppe",
      imgSrc:
        "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Schmetterlings-Gruppe",
      imgSrc:
        "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setChannels([
      ...channels,
      {
        title: "Schmetterlings-Gruppe",
        imgSrc:
          "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
    ]);
    setShowModal(false);
  }

  return (
    <Router>
      <Container>
        <Header />
        <Main>
          {showModal && (
            <Modal>
              <BasicForm onSubmit={handleSubmit} />
            </Modal>
          )}
          <ChannelCard
            title="Neuer Channel"
            imgSrc={PlusIcon}
            onClick={() => setShowModal(true)}
          />
          {channels.map((channel) => (
            <ChannelCard
              key={channel.title}
              title={channel.title}
              imgSrc={channel.imgSrc}
            />
          ))}
        </Main>
        <Footer />
      </Container>
    </Router>
  );
}

export default ChannelScreen;

ChannelScreen.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
