import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  padding: 0.5em;
`;

const IconContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  margin: 0.4em;
  padding: 0.3em;
  align-content: center;
`;

const Input = styled.input`
  border: none;
  margin: 0.2em;
  padding: 0.3em;
  border-radius: 20px;
  color: #000, 0.9;
`;

const Button = styled.button`
  background-color: #f96e5c;
  border: none;
  border-radius: 20px;
  margin: 0.3em;
  padding: 0.6em;
  color: #fff;
`;

function BasicForm({
  label1,
  label2,
  placeholder1,
  placeholder2,
  btnLabel,
  imgSrc1,
  imgSrc2,
}) {
  return (
    <Form>
      {!imgSrc1 && !imgSrc2 && (
        <>
          <Input label={label1} placeholder={placeholder1} />
          <Input label={label2} placeholder={placeholder2} />
          <Button>{btnLabel}</Button>
        </>
      )}
      {imgSrc1 && imgSrc2 && (
        <>
          <IconContainer>
            {" "}
            <img src={imgSrc1} alt="Mail" />
            <Input label={label1} placeholder={placeholder1} />
          </IconContainer>
          <IconContainer>
            {" "}
            <img src={imgSrc2} alt="Passwort" />
            <Input label={label2} placeholder={placeholder2} />
          </IconContainer>
          <Button>{btnLabel}</Button>
        </>
      )}
    </Form>
  );
}

export default BasicForm;

BasicForm.propTypes = {
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  placeholder1: PropTypes.string.isRequired,
  placeholder2: PropTypes.string.isRequired,
  btnLabel: PropTypes.string.isRequired,
  imgSrc1: PropTypes.string,
  imgSrc2: PropTypes.string,
};
