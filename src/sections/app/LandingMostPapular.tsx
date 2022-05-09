import React from "react";
import { Row, Col } from "react-grid-system";
import Container from "../../components/Container";
import { icons } from "../../assets/svgs/Icons";
import { Flower2, Grid, Heart } from "react-bootstrap-icons";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  box-shadow: 5px 5px 15px rgb(0 0 0 / 16%);
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
    i svg {
      width: 25px;
      height: 25px;
    }
  }
  .card_expisode_content {
    margin-right: 0.75rem !important;
    display: grid;
    align-items: stretch;
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

  .icons {
    display: flex;
    position: absolute;
    left: 1rem;
    bottom: 0.9rem;
    .fill_transparent svg {
      fill: transparent !important;
      stroke: #000000 !important;
    }
  }
`;

function CardEpisode() {
  return (
    <Card>
      <div className="card_episode_image">
        <img
          src="https://fs.sokanacademy.com/api/files?token=app/blogs/nIcoTrR0i687Em2AGhaolgKBn0MwVLKQ5lj2wUJC"
          alt="_image"
        />
        <i className="absolute top-3 right-6 bg-white rounded-lg p-1">
          {icons[1]}
        </i>
      </div>
      <div className="card_expisode_content">
        <p className="my-1">تفاوت همدلی با همدردی در طراحی تجربه...</p>
        <h6>هدف این مقاله این است که شما در تمرین...</h6>
        <div className="card_expisode_footer">
          <i>
            <Grid size={20} />
          </i>
          <span>کسب و کار</span>
          <i className="text-yellow-500 mr-1 -ml-2">
            <Flower2 size={20} />
          </i>
          <span>120</span>
        </div>
        <div className="icons">
          <i className="text-red-400 -ml-1">
            <Heart size={20} />
          </i>
          <i className="fill_transparent">{icons[6]}</i>
        </div>
      </div>
    </Card>
  );
}

export default function LandingMostPapular() {
  return (
    <Container>
      <Row>
        {Array.from(Array(6)).map((_, index: number) => (
          <Col xs={12} md={6} className="my-2" key={index}>
            <CardEpisode />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
