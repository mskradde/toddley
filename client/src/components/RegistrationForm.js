import React from "react";
import styled from "@emotion/styled";

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
  return (
    <>
      <Form>
        <InputContainer>
          <Input placeholder="Name" />
        </InputContainer>
        <InputContainer>
          <Input placeholder="Email" />
        </InputContainer>
        <InputContainer>
          <Input placeholder="Passwort" />
        </InputContainer>
        <InputContainer>
          <Input placeholder="Passwort bestätigen" />
        </InputContainer>
        <Button>Jetzt registrieren</Button>
      </Form>
    </>
  );
}

export default RegistrationForm;
