import React from "react";
import { Input } from "@nextui-org/react";
import styled from "styled-components";
import Button from "./Button";
import logo from "../assets/logo.svg";
import { Visible, Hidden } from "react-grid-system";
import { Search } from "react-bootstrap-icons";

interface imgType {
  src: any;
  alt: string;
  title?: string;
}

const NavContainer = styled.div`
  @media only screen and (max-width: 567px) {
    justify-content: space-between;
    & svg {
      bottom: 0.5rem !important;
    }
  }
  display: flex;
  justify-content: space-evenly;
  background: #0a0328;
  box-shadow: 0 2px 0 #0a0328;
  flex-wrap: wrap;
  padding: 0.5rem 0.2rem;
  position: sticky;
  top: 0;
  z-index: 9999;
  & svg {
    left: 0.7rem;
    bottom: 1.2rem;
    position: absolute;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    color: #fcbf17;
  }
`;

const NavabrButtons = styled.div`
  display: flex;
  & button:nth-child(1) {
    @media only screen and (max-width: 767px) {
      display: none !important;
    }
  }
`;

const CustomInput = styled(Input)`
  @media only screen and (max-width: 567px) {
    width: 90vw;
    margin-right: 9px;
  }
  @media only screen and (min-width: 568px) and (max-width: 991px) {
    width: 300px;
  }
  border: 1px solid #fcbf17 !important;
  line-height: 1.5;
  width: 400px;
  & input {
    background: #0a0328 !important;
    color: #fcbf17;
    text-align: right;
  }
  & label {
    background: #0a0328 !important;
  }
  &:hover {
    transform: translate(0 0) !important;
  }
  &:focus {
    transform: translate(0 0) !important;
  }
  margin-top: 0.3rem;
`;

const NavbarBrand = styled.img<imgType>`
  margin-bottom: 10px;
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <NavContainer>
      <Hidden xs sm>
        <NavbarBrand src={logo} alt="logo" />
        <div className="relative">
          <CustomInput initialValue="دنبال چه میگردی؟" />
          <Search />
        </div>
        <NavabrButtons>
          <Button
            ghost
            className="my-2 mx-1.5"
          >{`نوشتن در سکان آکادمی`}</Button>
          <Button className="my-2 mx-1.5">{`ورود / ثبت نام `}</Button>
        </NavabrButtons>
      </Hidden>
      <Visible xs sm>
        <NavbarBrand src={logo} alt="logo" style={{ marginRight: 10 }} />
        <Button className="m-2">{`ورود / ثبت نام `}</Button>
        <div className="relative">
          <CustomInput initialValue="دنبال چه میگردی؟" />
          <Search />
        </div>
      </Visible>
    </NavContainer>
  );
}
