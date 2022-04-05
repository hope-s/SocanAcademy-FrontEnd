import React from "react";
import Header from "./Header";
import HeaderSvg from "../assets/images/header-svg.svg";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderSecetion = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  & h4 {
    margin-top: 0.75rem;
    margin-right: -25px;
    font-weight: bold;
  }
`;

export default function HomePage({ array: data }: { array: any }) {
  console.log(data);
  return (
    <React.Fragment>
      <Header />
      <main
      >
        <HeaderSecetion>
          <img src={HeaderSvg} alt="header-bg" width="45" height="45" />
          <h4>آموزش با سکان آکادمی</h4>
        </HeaderSecetion>
      </main>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ),
};
