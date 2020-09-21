import React from "react";
import styled from "@emotion/styled";
import PlusIcon from "../assets/plus-icon.svg";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  width: 50vw;
  height: 50vw;
  background-color: #ffffff;
  padding: 5%;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #25386426;
  border-radius: 100%;
`;

function AddChannelCard() {
  return (
    <>
      <Card>
        <Circle>
          <img src={PlusIcon} alt="Channel hinzufügen" />
        </Circle>
      </Card>
    </>
  );
}

export default AddChannelCard;
