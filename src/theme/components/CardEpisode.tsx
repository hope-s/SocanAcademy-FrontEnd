import React, { ReactNode } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px rgb(0 0 0 / 16%);
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

export default function CardEpisode({ children }: { children: ReactNode }) {
  return <Card>{children}</Card>;
}

CardEpisode.propTypes = {
  children: PropTypes.any
}