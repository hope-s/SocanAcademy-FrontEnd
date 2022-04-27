import React from "react";
import CardEpisode from "./cards/CardEpisode";
import { Row, Col } from "react-grid-system";
import svg from "../../assets/images/svg-podcast-background.svg";
import Container from "../../components/Container";

export default function ExpisodCards() {
  return (
    <div className="relative">
      <img
        src={svg}
        alt="layer"
        className="absolute z-0 -top-24  w-full none md:block"
      />
      <Container>
        <Row>
          {Array.from(Array(3)).map((_, index: number) => (
            <Col key={index} xs={12} md={6} xl={4} className="my-2 lg:p-2 ">
              <CardEpisode />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
