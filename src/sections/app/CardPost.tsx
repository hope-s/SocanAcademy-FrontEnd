import React from "react";
import styled from "styled-components";
import { icons } from "../../assets/svgs/Icons";
import { Grid } from "react-bootstrap-icons";

const CardPostStyle = styled.div`
  overflow: hidden !important;
  border-radius: 20px 20px 25px 25px;
  height: 260px;
  display: flex;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  & .cardWrapper {
    background-color: #ffffff !important;
    border-radius: 25px 25px 0 0;
    transform: translate(0, 60%);
    width: 100%;
    padding: 1rem;
    transition: all 0.5s;
    &:hover {
      transform: translate(0, 25%);
      & .cardWarpperDescription {
        opacity: 1;
        margin-top: -100px;
      }
      & .cardWrapperFooter {
        opacity: 0;
      }
    }
    & .cardWarpperDescription {
      font-size: 14px;
      color: #999999;
      opacity: 0;
    }
    & .cardWrapperFooter {
      opacity: 1;
      display: flex;
      align-items: center;
      transition: all 0.5s;

      margin-bottom: 5rem !important;
      font-size: 12px;
      & img {
        border-radius: 100%;
      }
    }
  }
  & img:not(.iconWrapper) {
    position: absolute;
    transition: 0.4s;
    filter: brightness(0.8);
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      filter: unset;
    }
  }
  & .cardWrapperTimer {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: #fcbf17;
    font-size: 13px;
  }
  & h6 {
    margin-top: 1.5rem;
  }
  & .svg {
    cursor: pointer;
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 0.3rem 0.5rem;
    & svg {
      padding: 0 !important;
    }
  }
  & .bookmarkSvg {
    cursor: pointer;
    position: absolute;
    left: 1rem;
    top: 1rem;
    & svg {
      stroke: #ffffff !important;
      fill: transparent;
    }
  }
`;

interface cardProps {
  srcLink: string;
  day: number;
  title: string;
  writer: string;
  scale: string;
  description: string;
}

export default function CardPost({
  srcLink,
  day,
  title,
  writer,
  scale,
  description,
}: cardProps) {
  return (
    <CardPostStyle>
      <img src={srcLink} alt="post_iamge" />
      <div className="svg">{icons[4]}</div>
      <div className="bookmarkSvg">{icons[6]}</div>
      <div className="cardWrapper">
        <span className="cardWrapperTimer"> {day} روز پیش</span>
        <h6>{title}</h6>
        <div className="cardWrapperFooter">
          <img
            width="25"
            height="25"
            className="iconWrapper"
            src="https://sokanacademy.com/imgs/fallbacks/fallback-user.jpg"
            alt="user-icon"
          />
          <span className="mr-2 ml-3">{writer}</span>
          <i>{<Grid size={20} />}</i>
          <span className="mr-1">{scale}</span>
        </div>
        <p className="cardWarpperDescription">{description}</p>
      </div>
    </CardPostStyle>
  );
}
