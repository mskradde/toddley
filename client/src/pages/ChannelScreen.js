import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChannelCard from "../components/ChannelCard";
import { BrowserRouter as Router } from "react-router-dom";
import PlusIcon from "../assets/plus-icon.svg";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Modal from "../components/Modal";
import { fetchChannels, postNewChannel } from "../api/channel";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;
const Main = styled.div``;

const NavMain = styled.nav`
  display: flex;
  flex-wrap: wrap;
  max-height: 60%;
  padding: 0 1em;
  overflow: auto;
`;

export function ChannelScreen() {
  const [channels, setChannels] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newChannel, setNewChannel] = useState("");
  const [newChannelImg, setNewChannelImg] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const allChannels = await fetchChannels();
      setChannels(allChannels);

      setLoading(false);
    }
    fetchData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const channel = { newChannel, newChannelImg };
    console.log(channel);

    try {
      await postNewChannel(channel);
      setNewChannel("");
      setNewChannelImg("");
    } catch (error) {
      console.error(error);
    }

    setShowModal(false);
  }

  function handleNewChannelChange(event) {
    setNewChannel(event.target.value);
  }

  function handleNewChannelImgChange(event) {
    setNewChannelImg(event.target.value);
  }

  if (loading || channels === null) {
    return <h2>Loading</h2>;
  } else {
    return (
      <Router>
        <Container>
          <Header headline="Alle Channels" />
          <Main>
            <NavMain>
              {showModal && (
                <Modal
                  onChange1={handleNewChannelChange}
                  onChange2={handleNewChannelImgChange}
                  onSubmit={handleSubmit}
                  value1={newChannel}
                  value2={newChannelImg}
                ></Modal>
              )}
              <ChannelCard
                title="Neuer Channel"
                imgSrc={PlusIcon}
                onClick={() => setShowModal(true)}
              />
              {channels.map((channel) => (
                <ChannelCard
                  key={channel.id}
                  title={channel.title}
                  imgSrc={channel.imgSrc}
                />
              ))}
            </NavMain>
          </Main>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default ChannelScreen;

ChannelScreen.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
};
