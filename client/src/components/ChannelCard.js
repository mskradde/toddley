import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10%;
  width: 45%;
  height: 150px;
  background-color: #ffffff;
  margin: 0.3em;
`;

const Circle = styled.div`
  background-color: #25386426;
  background-image: url(${({ imgSrc }) => imgSrc});
  border-radius: 100%;
  margin-top: 0.6em;

  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: 100px;
`;

const ChannelName = styled.p`
  /* text-align: center;
  grid-area: 4/1/5/5; */
  font-size: 0.7em;
  margin: 0.3em 0.2em;
`;

function ChannelCard({ title, imgSrc, onClick }) {
  return (
    <Card>
      <Circle imgSrc={imgSrc} onClick={onClick} />

      <ChannelName>{title}</ChannelName>
    </Card>
  );
}

export default ChannelCard;

ChannelCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
