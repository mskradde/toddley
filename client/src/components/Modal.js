import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

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
  position: fixed;
  top: 20%;
  bottom: 20%;
  left: 10%;
  right: 10%;
  background-color: var(--bg-main-color);
  z-index: 2;
  border-radius: 15px;
  display: flex;
`;

function Modal({ children }) {
  return (
    <>
      <Backdrop />
      <Container>{children}</Container>
    </>
  );
}

export default Modal;

Modal.propTypes = { children: PropTypes.node };
