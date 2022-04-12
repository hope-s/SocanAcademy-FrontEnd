import React from "react";
import styled from "styled-components";
import HeaderLinks from "../../layout/NavLinks";
import HeaderGlassCards from "./HeaderGlassCards";
import HeaderCards from "./HeaderCards";
import background from "../../assets/images/header-background.jpg";

const HeaderStyles = styled.header`
  position: relative !important;
  background: #0a0328 url(${background}) no-repeat center !important;
  background-size: cover;
  bottom: 0;
  padding: 2rem 0;
  &::before {
    background-color: #0b032d;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    content: " ";
  }
`;

const OverflowContainer = styled.div`
  &::-webkit-scrollbar {
    display: none !important;
  }
  & {
    -ms-overflow-style: none !important;
    scrollbar-width: none !important;
  }
  overflow-x: scroll !important;
`;

export default function Header() {
  return (
    <div className="relative lg:rounded-bl-4xl bg-zinc-100 overflow-hidden">
      <HeaderStyles className="lg:rounded-bl-30% lg:before:rounded-bl-30%">
        <OverflowContainer>
          <HeaderCards />
        </OverflowContainer>
        <HeaderGlassCards />
      </HeaderStyles>
      <HeaderLinks />
    </div>
  );
}
