import React from "react";
import HeaderSvg from "../../assets/svgs/header-svg.svg";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderSecetion = styled.div<{ mt?: string; mb?: string; isSvg: boolean }>`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  display: flex;
  justify-content: center;
  align-items: center;
  & h4 {
    margin-top: ${({ isSvg }) => (isSvg ? "0" : "0.75rem")};
    margin-right: ${({ isSvg }) => (isSvg ? "10px" : "-25px")};
    font-weight: bold;
  }
`;

HeaderSecetion.defaultProps = {
  mt: "1rem",
  mb: "0.75rem",
};

export default function TitleSection({
  title,
  icon,
  type,
  mt,
  mb,
}: {
  title: string;
  icon?: any;
  type: "svg" | "img";
  mt?: string;
  mb?: string;
}) {
  return (
    <HeaderSecetion {...mt} {...mb} isSvg={type === "svg" && true}>
      {icon && type === "svg" ? (
        <>
          {icon}
          <h4>{title}</h4>
        </>
      ) : (
        <>
          <img src={HeaderSvg} alt="title-layer" width="45" height="45" />
          <h4>{title}</h4>
        </>
      )}
    </HeaderSecetion>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired, //
  icon: PropTypes.any,
  type: PropTypes.string.isRequired,
  mt: PropTypes.string,
  mb: PropTypes.string,
};
