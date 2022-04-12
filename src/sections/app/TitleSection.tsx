import React from "react";
import HeaderSvg from "../../assets/svgs/header-svg.svg";
import styled from "styled-components";

const HeaderSecetion = styled.div<{ marginTop?: string }>`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ marginTop }) => marginTop};
  display: flex;
  justify-content: center;
  & h4 {
    margin-top: 0.75rem;
    margin-right: -25px;
    font-weight: bold;
  }
`;

HeaderSecetion.defaultProps = {
  marginTop: "1rem",
};

export default function TitleSection({
  title,
  marginTop,
}: {
  title: string;
  marginTop?: string;
}) {
  return (
    <HeaderSecetion marginTop={marginTop}>
      <img src={HeaderSvg} alt="title-layer" width="45" height="45" />
      <h4>{title}</h4>
    </HeaderSecetion>
  );
}
