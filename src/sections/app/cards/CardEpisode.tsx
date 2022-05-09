import React from "react";
import { icons } from "../../../assets/svgs/Icons";
import { Grid } from "react-bootstrap-icons";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px rgb(0 0 0 / 16%);
  background-color: #ffffff;
  height: 120px;
  border-radius: 25px;
  cursor: pointer;
  .card_episode_image {
    height: 100%;
    max-height: 120px;
    img {
      width: 130px;
      height: 100%;
      object-fit: cover;
      border-radius: 0px 25px 25px 0px;
    }
  }
  .card_expisode_content {
    margin-right: 0.75rem !important;
    h6 {
      font-size: 14px !important;
      font-weight: 900;
    }
    svg {
      margin-left: 10px;
      width: 25px;
    }
  }

  .card_expisode_footer {
    display: flex;
    align-items: center;
  }

  .bookmark-svg {
    position: absolute;
    left: 1rem;
    bottom: 1.25rem;
    svg {
      fill: transparent;
      stroke: #000000;
    }
  }
`;

export default function CardEpisode() {
  return (
    <Card>
      <div className="card_episode_image">
        <img
          src="https://fs.sokanacademy.com/api/files?token=app/episodes/3zBWkspmu5ce6qkhIeDKI95uQMJOKNNj9GrHC3qQ"
          alt="_image"
        />
      </div>
      <div className="card_expisode_content">
        <div className="flex items-center -mt-3">
          {icons[3]}
          <p>رادیو فول استک</p>
        </div>
        <h6>ایلیا وکیلی - مرشد بودن</h6>
        <div className="card_expisode_footer">
          <Grid size={20} />
          <span>کسب و کار</span>
          <span>120</span>
        </div>
        <div className="bookmark-svg">{icons[6]}</div>
      </div>
    </Card>
  );
}
