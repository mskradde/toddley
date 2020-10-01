import React from "react";
import styled from "@emotion/styled";
import BasicForm from "../components/BasicForm";
import Bubble1 from "../assets/icons/bubble-dark-blue.svg";
import Bubble2 from "../assets/icons/bubble-light-blue.svg";
import ProfileIcon from "../assets/icons/profile-icon.svg";
import Logo from "../assets/icons/logo.svg";
import MailIcon from "../assets/icons/mail-icon.svg";
import PasswortIcon from "../assets/icons/lock-icon.svg";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const LoginFormContainer = styled.div`
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

const Profile = styled.img`
  justify-content: center;
  width: 3.7em;
  margin: 0.7em 0;
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

function LoginScreen(props) {
  return (
    <LoginContainer>
      <BubbleContainer1>
        <BubbleImg1 src={Bubble1} alt="Blue Bubble" />
      </BubbleContainer1>

      <LoginFormContainer>
        <AppLogo src={Logo} alt="Logo Toddley" />

        <Profile src={ProfileIcon} alt="Profil" />

        <BasicForm
          label1="Email"
          label2="Passwort"
          placeholder1="Email"
          placeholder2="Passwort"
          btnLabel="Login"
          imgSrc1={MailIcon}
          imgSrc2={PasswortIcon}
        />
        <Link to="/register">
          <p>Jetzt registrieren</p>
        </Link>
      </LoginFormContainer>
      <div></div>
      <BubbleContainer2>
        <BubbleImg2 src={Bubble2} alt="Light-blue Bubble" />
      </BubbleContainer2>
    </LoginContainer>
  );
}

export default LoginScreen;
