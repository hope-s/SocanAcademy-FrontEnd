import React from "react";
import styled from "styled-components";
import { icons } from "../data/data";
import { Grid } from "react-bootstrap-icons";

const CustomCardPost = styled.div`
  overflow: hidden !important;
  border-radius: 25px;
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
        border-radius: 30%;
      }
    }
  }
  & img {
    position: absolute;
    transition: 0.4s;
    background-color: #bfbfbf;
    &:hover {
      transform: scale(1.1);
      background-color: unset;
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

export default function CardPost() {
  return (
    <CustomCardPost>
      <img
        src="https://fs.sokanacademy.com/api/files?token=app/courses/6rlTeAJ4kmcCJXnEwjdMwYouasbZ5TPgSCUbpS0k"
        alt=""
      />
      <div className="svg">{icons[4]}</div>
      <div className="bookmarkSvg">{icons[6]}</div>
      <div className="cardWrapper">
        <span className="cardWrapperTimer"> 4 روز پیش</span>
        <h6>مقدمه ای بر تجربه کاربری</h6>
        <div className="cardWrapperFooter">
          <img
            width="25"
            height="25"
            className="iconWrapper"
            src="https://sokanacademy.com/imgs/fallbacks/fallback-user.jpg"
            alt="user-icon"
          />
          <span className="mr-8 ml-2">حمیدرضا معدنی</span>
          <i>{<Grid size={20} />}</i>
          <span className="mr-1"> برنامه نویس</span>
        </div>
        <p className="cardWarpperDescription">
          یکی از شاخه‌های محبوب طراحی دیجیتال، "طراحی تجربه‌ی کاربری" (UX/User
          ...
        </p>
      </div>
    </CustomCardPost>
  );
}
