import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import AccountIcon from "../assets/account-icon.svg";
import ChatIcon from "../assets/message-icon.svg";
import SettingsIcon from "../assets/settings-icon.svg";

const MainFooter = styled.footer`
  width: 100%;
  background: #ade1cd;
`;

const Navbar = styled.nav`
  display: flex;
  margin: 0.2 em;
  justify-content: space-around;
  align-items: center;
`;

const NavImage = styled.img`
  margin: 10px 0;
  opacity: ${({ active }) => (active ? "0.5" : "1")};
`;

function Footer() {
  const location = useLocation();

  return (
    <>
      <MainFooter>
        <Navbar>
          <Link to="/account">
            <NavImage
              src={AccountIcon}
              alt="Mein Profil"
              active={location.pathname === "/account"}
            />
          </Link>
          <Link to="/">
            <NavImage
              src={ChatIcon}
              alt="Startseite"
              active={location.pathname === "/"}
            />
          </Link>
          <Link to="/settings">
            <NavImage
              src={SettingsIcon}
              alt="Meine Einstellungen"
              active={location.pathname === "/settings"}
            />
          </Link>
        </Navbar>
      </MainFooter>
    </>
  );
}

export default Footer;
