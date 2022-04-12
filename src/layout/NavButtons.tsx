import React from "react";
import styled from "styled-components";
import Button from "../theme/components/Button";

const NavButtonsStyle = styled.div`
  display: flex;
  & button:nth-child(1) {
    @media only screen and (max-width: 768px) {
      display: none !important;
    }
  }
`;

export default function NavbarButtons() {
  return (
    <NavButtonsStyle>
      <Button ghost className="my-2 mx-1.5">
        نوشتن در سکان آکادمی
      </Button>
      <Button className="my-2 mx-1.5"> ورود / ثبت نام </Button>
    </NavButtonsStyle>
  );
}
