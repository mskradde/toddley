import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 25%);
  border-radius: 10%;
  width: 50vw;
  height: 50vw;
  background-color: #ffffff;
`;

const Circle = styled.div`
  grid-column: 2/4;
  grid-row: 2/4;
  background-color: #25386426;
  background-image: url(${({ imgSrc }) => imgSrc});
  border-radius: 100%;
`;

const ChannelName = styled.p`
  justify-self: center;
  grid-column: 1/ 5;
  grid-row: 4 /5;
`;

function ChannelCard({ title, imgSrc }) {
  return (
    <Card>
      <Circle imgSrc={imgSrc} />

      <ChannelName>{title}</ChannelName>
    </Card>
  );
}

export default ChannelCard;

ChannelCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
