import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const MainHeader = styled.header`
  width: 100%;
  background: #253864;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 1.7rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  color: #ffffff;
  width: 100%;
`;
const Navbutton = styled.p`
  color: ${({ active }) => (active ? "#ADE1CD" : "#ffffff")};
`;

function Header() {
  const location = useLocation();

  return (
    <>
      <MainHeader>
        <Heading>Alle Channels</Heading>
        <Navbar>
          <Link to="/">
            <Navbutton active={location.pathname === "/"}>Channels </Navbutton>
          </Link>
          <Link to="/messages">
            <Navbutton active={location.pathname === "/messages"}>
              Nachrichten
            </Navbutton>
          </Link>
        </Navbar>
      </MainHeader>
    </>
  );
}

export default Header;
