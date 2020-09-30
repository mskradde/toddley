import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import addIcon from "../assets/add-contact-icon.svg";
import PropTypes from "prop-types";

const MainHeader = styled.header`
  width: 100%;
  background: #253864;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headline = styled.h2`
  color: #ffffff;
  font-size: 1.7rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  color: #ffffff;
  width: 100%;
`;
const Nav = styled.span`
  display: block;
  color: ${({ active }) => (active ? "#ADE1CD" : "#ffffff")};
  text-decoration: none;
  margin: 0.6em;
`;

const AddContactIcon = styled.img`
  position: absolute;
  right: 2px;
  margin: 13px 9px;
  display: ${({ active }) => (active ? "inline" : "none")};
`;

function Header(props) {
  const location = useLocation();
  //   const [activePage, setActivePage] = useState(true);

  return (
    <>
      <MainHeader>
        <Link to="/contacts">
          <AddContactIcon
            active={location.pathname === "/messages"}
            src={addIcon}
            alt="Kontakt hinzufügen"
          />
        </Link>
        <Headline>{props.headline}</Headline>
        <Navbar>
          <Link to="/">
            <Nav active={location.pathname === "/"}>Channels </Nav>
          </Link>
          <Link to="/messages">
            <Nav active={location.pathname === "/messages"}>Nachrichten</Nav>
          </Link>
        </Navbar>
      </MainHeader>
    </>
  );
}

export default Header;

Header.propTypes = {
  headline: PropTypes.string.isRequired,
};
