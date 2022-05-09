import React from "react";
import { GridFill } from "react-bootstrap-icons";
import { Col, Row } from "react-grid-system";
import Container from "../../components/Container";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 15px 15px 15px 25px;
  overflow: hidden;
  height: 115px;
  width: 100%;
  background-color: hsl(0deg 0% 100% / 10%);
  backdrop-filter: blur(10px);
  cursor: pointer;
  & .cardImage {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    position: absolute;
    top: 16px;
    right: 1rem;
  }
  & .cardParagraph {
    color: #f2f2f2;
    margin-right: 4rem;
    margin-top: 13px;
    font-weight: bold;
    font-size: 1rem !important;
    transition: ease 300ms;
    &:hover {
      color: #fcbf17;
    }
  }

  & .cardFooter {
    display: flex;
    align-items: center;
    position: absolute;
    color: #f2f2f2;
    margin-top: -9px;
    font-size: 1rem !important;
    & .cardFooterAuhter {
      display: flex;
      margin-top: 1rem;
      & .cardImageIcon {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        margin-top: 1rem;
        margin-right: 10px;
      }
      & p {
        margin-right: 10px;
      }
    }
    & .cardFooterIcon {
      display: flex;
      margin-top: 1rem;
      & svg {
        display: inline;
        margin: 20px 20px 0 10px;
      }
    }
  }
  & .cardFooterIcon {
    & img {
      width: 20px;
      height: 20px;
      border-radius: 10px;
    }
  }
`;

export default function HeaderGlassCards() {
  return (
    <Container classes="mt-6 md:mb-4">
      <Row>
        <Col md={6} lg={4} className="px-8 py-2 md:p-2">
          <Card>
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
          <Card>
            <img
              src="https://fs.sokanacademy.com/api/files?token=app/statics/b4IjwpPT5OTNzv9XIQpwavlnnneMYE5ofQjwIKmR"
              alt="alt"
              className="h-fit"
            />
          </Card>
        </Col>
        <Col md={6} lg={4} className="px-8 py-2 md:p-2">
          <Card>
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
