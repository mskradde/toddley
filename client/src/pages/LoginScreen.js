import React, { useCallback, useContext } from "react";
import styled from "@emotion/styled";
import Bubble1 from "../assets/icons/bubble-dark-blue.svg";
import Bubble2 from "../assets/icons/bubble-light-blue.svg";
import ProfileIcon from "../assets/icons/profile-icon.svg";
import Logo from "../assets/icons/logo.svg";
import { Link, Redirect, useHistory } from "react-router-dom";
import app from "../firebase";
import { AuthContext } from "../components/Auth";

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

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  padding: 0.5em;
  width: 100%;
`;

const InputContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  margin: 0.3em;
  align-content: center;
`;

const Input = styled.input`
  border: none;
  margin: 0.2em;
  padding: 0.6em;
  border-radius: 20px;
  color: #000, 0.9;
  outline: none;
`;

const Button = styled.button`
  background-color: #f96e5c;
  border: none;
  border-radius: 20px;
  margin: 0.3em;
  padding: 0.8em;
  color: #fff;
  outline: none;
`;

function LoginScreen() {
  const history = useHistory();

  const handleLogin = useCallback(
    async (event) => {
      const { email, password } = event.target.elements;
      event.preventDefault();

      console.log(email.value);
      try {
        const userData = await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
        console.log(userData);
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <LoginContainer>
      <BubbleContainer1>
        <BubbleImg1 src={Bubble1} alt="Blue Bubble" />
      </BubbleContainer1>

      <LoginFormContainer>
        <AppLogo src={Logo} alt="Logo Toddley" />

        <Profile src={ProfileIcon} alt="Profil" />
        <Form onSubmit={handleLogin}>
          <InputContainer>
            <Input placeholder="Email" name="email" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Passwort" name="password" />
          </InputContainer>
          <Button>Einloggen</Button>
        </Form>
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
