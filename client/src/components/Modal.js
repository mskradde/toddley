import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";
import BasicForm from "./BasicForm";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
`;

const Container = styled.div`
  background-color: var(--bg-main-color);
  z-index: 2;
  border-radius: 15px;
  width: 60%;
  max-width: 500px;
  height: 40%;
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
`;

function Modal({ value1, value2, onChange1, onChange2, onSubmit }) {
  return (
    <>
      <Backdrop />
      <ModalContainer>
        <Container>
          <BasicForm
            label1="Channel Name"
            label2="Channel Bild"
            placeholder1="Channel Name"
            placeholder2="Channel Bild"
            btnLabel="Erstellen"
            value1={value1}
            value2={value2}
            onChange1={onChange1}
            onChange2={onChange2}
            onSubmit={onSubmit}
          />
        </Container>
      </ModalContainer>
    </>
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  value1: PropTypes.string,
  value2: PropTypes.string,
  onChange1: PropTypes.func,
  onChange2: PropTypes.func,
  onSubmit: PropTypes.func,
};
