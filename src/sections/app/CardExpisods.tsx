import React from "react";
import CardEpisode from "../../theme/components/CardEpisode";
import { Row, Col } from "react-grid-system";
import { icons } from "../../assets/svgs/Icons";
import { Grid } from "react-bootstrap-icons";
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
              <CardEpisode>
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
              </CardEpisode>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
