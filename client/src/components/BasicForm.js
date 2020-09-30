import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  padding: 0.5em;
`;

const InputContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  margin: 0.3em;
  align-content: center;
  & > img {
    margin-left: 0.5em;
  }
`;

const Input = styled.input`
  border: none;
  margin: 0.2em;
  padding: 0.8em;
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

function BasicForm({
  label1,
  label2,
  placeholder1,
  placeholder2,
  btnLabel,
  imgSrc1,
  imgSrc2,
  value1,
  value2,
  onChange1,
  onChange2,
  onSubmit,
}) {
  return (
    <Form onSubmit={onSubmit}>
      {!imgSrc1 && !imgSrc2 && (
        <>
          <InputContainer>
            <Input
              onChange={onChange1}
              value={value1}
              label={label1}
              placeholder={placeholder1}
            />
          </InputContainer>
          <InputContainer>
            <Input
              onChange={onChange2}
              value={value2}
              label={label2}
              placeholder={placeholder2}
            />
          </InputContainer>
          <Button type="submit">{btnLabel}</Button>
        </>
      )}
      {imgSrc1 && imgSrc2 && (
        <>
          <InputContainer>
            {" "}
            <img src={imgSrc1} alt="Mail" />
            <Input label={label1} placeholder={placeholder1} />
          </InputContainer>
          <InputContainer>
            {" "}
            <img src={imgSrc2} alt="Passwort" />
            <Input label={label2} placeholder={placeholder2} />
          </InputContainer>
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
  value1: PropTypes.string,
  value2: PropTypes.string,
  onChange1: PropTypes.func,
  onChange2: PropTypes.func,
  onSubmit: PropTypes.func,
};
