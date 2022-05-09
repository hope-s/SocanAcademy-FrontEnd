import React from "react";
import styled from "styled-components";
import { Visible, Hidden } from "react-grid-system";
import { Search } from "react-bootstrap-icons";
import Logo from "../components/Logo";
import NavbarInput from "./SearchBar";
import NavbarButtons from "./NavButtons";
import Container from "../components/Container";
// import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import { icons } from "../assets/svgs/Icons";

const Room = styled.div`
  background: #f2f2f2;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 25px;
  a {
    @media only screen and (max-width: 768px) {
      width: 100px !important;
    }
    width: 165px;
    color: #0b032d;
    & span {
      transition: all 0.2s;
    }
    svg {
      display: inline;
      transition: 0.2s;
      @media only screen and (max-width: 768px) {
        display: block;
        text-align: center;
        margin: auto;
      }
    }
    &:hover svg {
      transform: scale(1.1);
    }
  }
`;

// function HeaderLinks() {
//   return (
//     <Room>
//       <Link to="/">
//         {icons[0]} <span>آکادمی</span>
//       </Link>
//       <Link to="/">
//         {icons[1]} <span>وبلاگ</span>
//       </Link>
//       <Link to="/">
//         {icons[2]} <span>سکان پلاس</span>
//       </Link>
//       <Link to="/">
//         {icons[3]} <span>رادیو فول استک</span>
//       </Link>
//       <Link to="/">
//         {icons[4]} <span>فن واژه</span>
//       </Link>
//     </Room>
//   );
// }

const NavbarStyles = styled.nav`
  background: #0a0328;
  box-shadow: 0 2px 0 #0a0328;
  padding: 0.7rem 0rem;
  position: sticky;
  top: 0;
  z-index: 9999;
  border-bottom-left-radius: 25px;
  & > div {
    @media only screen and (max-width: 768px) {
      justify-content: space-between;
      padding-right: 10px;
      padding-left: 10px;
      & .search_icon {
        bottom: 0.5rem !important;
      }
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    & .search_icon {
      left: 0.7rem;
      bottom: 0.5rem;
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
    <>
      <NavbarStyles>
        <Container>
          <Hidden xs sm>
            <Logo />
            <div className="relative">
              <NavbarInput placeholder="دنبال چه میگردی؟" />
              <Search className="search_icon" />
            </div>
            <NavbarButtons />
          </Hidden>

          <Visible xs sm>
            <Logo />
            <NavbarButtons />
            <div className="relative">
              <NavbarInput placeholder="دنبال چه میگردی؟" />
              <Search className="search_icon" />
            </div>
          </Visible>
        </Container>
      </NavbarStyles>
      {/* <Headroom>
            <HeaderLinks />
          </Headroom> */}
    </>
  );
}
