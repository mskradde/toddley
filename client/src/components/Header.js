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
const Navbutton = styled.div`
  color: ${({ active }) => (active ? "#ADE1CD" : "#ffffff")};
  text-decoration: none;
  margin: 0.6em;
`;

const AddContactIcon = styled.img`
  position: absolute;
  right: 3px;
  margin: 10px 0;
  display: ${({ active }) => (active ? "inline" : "none")};
`;

function Header(props) {
  const location = useLocation();
  //   const [activePage, setActivePage] = useState(true);

  return (
    <>
      <MainHeader>
        <AddContactIcon
          active={location.pathname === "/messages"}
          src={addIcon}
          alt="Kontakt hinzufügen"
        />
        <Heading>{props.heading}</Heading>
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

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
