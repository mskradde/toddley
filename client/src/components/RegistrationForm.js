import React, { useCallback } from "react";
import styled from "@emotion/styled";
import app from "../firebase";

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

function RegistrationForm() {
  const handleSignup = useCallback(async (event) => {
    const { name, email, password } = event.target.elements;
    event.preventDefault();
    console.log(name.value);
    console.log(email.value);
    try {
      app.auth().createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Form onSubmit={handleSignup}>
        <InputContainer>
          <Input placeholder="Name" name="name" />
        </InputContainer>
        <InputContainer>
          <Input placeholder="Email" name="email" />
        </InputContainer>
        <InputContainer>
          <Input placeholder="Passwort" name="password" />
        </InputContainer>
        {/* <InputContainer>
          <Input placeholder="Passwort bestätigen" name="confirm-password"/>
 ()        </InputContainer> */}
        <Button>Jetzt registrieren</Button>
      </Form>
    </>
  );
}

export default RegistrationForm;
