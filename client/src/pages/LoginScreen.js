import React from "react";
import styled from "@emotion/styled";
import BasicForm from "../components/BasicForm";
import Bubble1 from "../assets/icons/bubble-dark-blue.svg";
import Bubble2 from "../assets/icons/bubble-light-blue.svg";
import ProfileIcon from "../assets/icons/profile-icon.svg";
import Logo from "../assets/icons/logo.svg";
import MailIcon from "../assets/icons/mail-icon.svg";
import PasswortIcon from "../assets/icons/lock-icon.svg";

const LoginContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
`;
const BubbleImg1 = styled.img`
  grid-column: 3/4;
  grid-row: 0/1;
`;
function LoginScreen(props) {
  return (
    <LoginContainer>
      <BubbleImg1 src={Bubble1} alt="Blue Bubble" />

      <img src={Logo} alt="Logo Toddley" />
      <div>
        <img src={ProfileIcon} alt="Profil" />
      </div>
      <BasicForm
        label1="Email"
        label2="Passwort"
        placeholder1="Email"
        placeholder2="Passwort"
        btnLabel="Login"
        imgSrc1={MailIcon}
        imgSrc2={PasswortIcon}
      />
      <div>
        <img src={Bubble2} alt="Light-blue Bubble" />
      </div>
    </LoginContainer>
  );
}

export default LoginScreen;
