import React from "react";
import styled from "styled-components";
import { Card } from "@nextui-org/react";
import { Grid, Bookmark, Heart, Flower2 } from "react-bootstrap-icons";

const CustomCard = styled(Card)`
  position: relative;
  height: auto;
  display: flex;
  border-radius: 15px;
  & div {
    overflow: hidden;
    padding: 0 !important;
  }
  .card_avatar_profile {
    width: 40px;
    height: 40px;
    border-radius: 10px 10px 7px 10px;
  }
  .image_overly {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .card_post_body {
    display: flex;
    flex-direction: column;
    height: 200px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    .card_image_wrapper {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      &:hover {
        .card_text_wrapper {
          transform: translateY(5%);
        }
        img {
          transform: scale(1.125);
        }
      }
      & img {
        transition: all 0.4s;
      }
      &::before {
        background: linear-gradient(
          0deg,
          rgba(11, 3, 45, 0.9),
          rgba(11, 3, 45, 0.25)
        );
        width: 100%;
        height: 100%;
        border-radius: 20px 20px 0 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        content: " ";
      }
      .card_text_wrapper {
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 99;
        transform: translateY(70%);
        transition: 0.4s;
        .card_title {
          text-align: right;
          color: #ffffff;
          padding: 0 16px;
        }
        .card_description {
          text-align: right;
          color: #ffffff !important;
          padding: 0 16px;
        }
      }
    }
  }
  .card_footer {
    padding: 15px 5px !important;
    & span {
      color: #999999;
      font-size: 14px !important;
    }
    & i {
      padding: 0px 3px;
      cursor: pointer;
    }
  }
`;

export default function PlusChildCard() {
  return (
    <CustomCard>
      <header className="flex align-center px-2 py-2.5">
        <img
          src="https://fs.sokanacademy.com/api/files?token=app/profiles/WoGmVYgDkg0lcANKaQ2Oi0CemqLwL1qGXddsdGW6"
          className="card_avatar_profile"
          alt="avatar"
        />
        <h6 className="mt-2 mr-3">سهیل رستمی</h6>
      </header>
      <div className="card_post_body">
        <div className="card_image_wrapper">
          <img
            src="https://fs.sokanacademy.com/api/files?token=app/pluses/FSvpwZCqRXfrrUthbo4HubLhBMPpesnSu3CX1OzY"
            alt="img"
          />
          <div className="card_text_wrapper">
            <h5 className="card_title">
              ثروت سازی چیزی که به ما یاد ندادند با مدل OBD
            </h5>
            <p className="card_description">
              ثروت سازی چیزی که به ما یاد ندادند...
            </p>
          </div>
        </div>
      </div>
      <div className="card_footer">
        <div className="float-right flex">
          <i>
            <Grid size={20} />
          </i>
          <span className="mx-1">کسب‌وکار</span>
          <i className="text-yellow-500">
            <Flower2 size={20} />
          </i>
          <span>70</span>
        </div>
        <div className="float-left flex">
          <i className="text-pink-500">
            <Heart size={20} />
          </i>
          <i>
            <Bookmark size={20} />
          </i>
        </div>
      </div>
    </CustomCard>
  );
}
