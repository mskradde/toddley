import React from "react";
import styled from "@emotion/styled";
import Bubble1 from "../assets/icons/bubble-dark-blue.svg";
import Bubble2 from "../assets/icons/bubble-light-blue.svg";
import Logo from "../assets/icons/logo.svg";
import RegistrationForm from "../components/RegistrationForm";
import { Link } from "react-router-dom";

const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const RegistrationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #253864;

    p {
      margin: 0;
      font-size: 0.6em;
    }
  }
`;

const BubbleImg1 = styled.img`
  object-fit: contain;
`;

const AppLogo = styled.img`
  align-content: center;
  margin-bottom: 1em;
`;

const BubbleImg2 = styled.img`
  object-fit: contain;
`;

const BubbleContainer1 = styled.div`
  z-index: -1;
  position: fixed;
  top: -30%;
  right: -30%;
  @media only screen and (min-height: 800px) {
    top: -12%;
    right: -18%;
  }
`;
const BubbleContainer2 = styled.div`
  z-index: -1;
  position: fixed;
  bottom: -30%;
  left: -30%;
  @media only screen and (min-height: 800px) {
    bottom: -12%;
    left: -13%;
  }
`;

function RegistrationScreen(props) {
  return (
    <>
      <RegistrationContainer>
        <BubbleContainer1>
          <BubbleImg1 src={Bubble1} alt="Blue Bubble" />
        </BubbleContainer1>

        <RegistrationFormContainer>
          <AppLogo src={Logo} alt="Logo Toddley" />

          <RegistrationForm />

          <p>
            Du hast bereits einen Account? Dann hier{" "}
            <Link to="/login">einloggen</Link>
          </p>
        </RegistrationFormContainer>

        <BubbleContainer2>
          <BubbleImg2 src={Bubble2} alt="Light-blue Bubble" />
        </BubbleContainer2>
      </RegistrationContainer>
    </>
  );
}

export default RegistrationScreen;
