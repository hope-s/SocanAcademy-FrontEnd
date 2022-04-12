import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../assets/svgs/Icons";
import styled from "styled-components";

const NavLinks = styled.nav`
    a {
    @media only screen and (max-width: 768px) {
      width: 100px !important;
    }
    width: 165px;
    font-size: 13px;
    color: #0b032d !important;
    transition: font-weight ease !important;
    transition: 0.1s !important;
    &:hover {
      font-weight: 600;
      letter-spacing: -0.25px;
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
  }
`;

export default function HeaderLinks() {
  return (
    <NavLinks className="max-width md:mx-auto flex justify-between pt-2 pb-1 md:py-4 text-center md:text-right">
      <Link to="/">
        {icons[0]} <span>آکادمی</span>
      </Link>
      <Link to="/">
        {icons[1]} <span>وبلاگ</span>
      </Link>
      <Link to="/">
        {icons[2]} <span>سکان پلاس</span>
      </Link>
      <Link to="/">
        {icons[3]} <span>رادیو فول استک</span>
      </Link>
      <Link to="/">
        {icons[4]} <span>فن واژه</span>
      </Link>
    </NavLinks>
  );
}
