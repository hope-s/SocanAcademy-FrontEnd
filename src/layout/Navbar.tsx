import React from "react";
import styled from "styled-components";
import { Visible, Hidden } from "react-grid-system";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import NavbarInput from "../components/SearchInput";
import NavbarButtons from "./NavButtons";
import Container from "../components/Container";

const NavbarStyles = styled.nav`
  background: #0a0328;
  box-shadow: 0 2px 0 #0a0328;
  padding: 0.5rem 0rem;
  position: sticky;
  top: 0;
  z-index: 9999;
  & > div {
    @media only screen and (max-width: 768px) {
      justify-content: space-between;
      padding-right: 10px;
      padding-left: 10px;
      & svg {
        bottom: 0.5rem !important;
      }
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    & svg {
      left: 0.7rem;
      bottom: .5rem;
      position: absolute;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      color: #fcbf17;
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarStyles>
      <Container>
        <Hidden xs sm>
          <Link to="/">
            <Logo />
          </Link>
          <div className="relative">
            <NavbarInput placeholder="دنبال چه میگردی؟" />
            <Search />
          </div>
          <NavbarButtons />
        </Hidden>

        <Visible xs sm>
          <Logo />
          <NavbarButtons />
          <div className="relative">
            <NavbarInput placeholder="دنبال چه میگردی؟" />
            <Search />
          </div>
        </Visible>
      </Container>
    </NavbarStyles>
  );
}
