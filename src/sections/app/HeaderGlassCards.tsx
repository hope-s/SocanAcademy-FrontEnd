import React from "react";
import Card from "../../theme/components/CardsGlass";
import { GridFill } from "react-bootstrap-icons";
import { Col, Row } from "react-grid-system";
import Container from "../../components/Container";

export default function HeaderGlassCards() {
  return (
    <Container classes="mt-6 md:mb-4">
      <Row>
        <Col md={6} lg={4} className="px-8 py-2 md:p-2">
          <Card type="glass">
            <p className="cardParagraph">آموزش ردیس</p>
            <img
              src="https://fs.sokanacademy.com/api/files?token=app/courses/X8FefLxgRBqwM6P0PiOO2MKA3vREEejqOK8X3WKD"
              alt="img"
              className="cardImage"
            />
            <div className="cardFooter">
              <div className="cardFooterAuhter">
                <img
                  src="https://sokanacademy.com/imgs/fallbacks/fallback-user.jpg"
                  alt="user-icon"
                  className="cardImageIcon"
                />
                <p>تیم تولید محتوا سکان آکادمی </p>
              </div>
              <div className="cardFooterIcon">
                <GridFill />
                <p> وردپردس مقدماتی</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={6} lg={4} className="px-8 py-2 md:p-2">
          <Card type="glass">
            <img
              src="https://fs.sokanacademy.com/api/files?token=app/statics/b4IjwpPT5OTNzv9XIQpwavlnnneMYE5ofQjwIKmR"
              alt="alt"
              className="h-fit"
            />
          </Card>
        </Col>
        <Col md={6} lg={4} className="px-8 py-2 md:p-2">
          <Card type="glass">
            <p className="cardParagraph">آموزش ویو جی اس</p>
            <img
              src="https://fs.sokanacademy.com/api/files?token=app/courses/RT9zjJmTKnNtVPaxARJFmRFTwGu87jAnXzhGqxGG"
              alt="img"
              className="cardImage"
            />
            <div className="cardFooter">
              <div className="cardFooterAuhter">
                <img
                  src="https://sokanacademy.com/imgs/fallbacks/fallback-user.jpg"
                  alt="user-icon"
                  className="cardImageIcon"
                />
                <p>بهزاد مردادی</p>
              </div>
              <div className="cardFooterIcon">
                <GridFill />
                <p>آموزش ویو جی اس مقدماتی</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
