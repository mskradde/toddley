import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 25%);
  border-radius: 10%;
  width: 50%;
  height: 170px;
  background-color: #ffffff;
`;

const Circle = styled.div`
  grid-column: 2/4;
  grid-row: 2/4;
  background-color: #25386426;
  background-image: url(${({ imgSrc }) => imgSrc});
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 5em;
`;

const ChannelName = styled.p`
  text-align: center;
  grid-area: 4/1/5/5;
  font-size: 0.8em;
  height: 25%;
  padding: 0.3em;
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
