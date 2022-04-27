import React from "react";
import CardPost from "./cards/CardPost";
import { Row, Col } from "react-grid-system";
import styled from "styled-components";
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import Container from "../../components/Container";

const Dots = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const DotButtons = styled.button`
  border-radius: 8px;
  background-color: #fcbf17;
  color: #ffffff;
`;

export default function CardPosts() {
  const data = {
    srcLink:
      "	https://fs.sokanacademy.com/api/files?token=app/sections/LlCLSgvo6GgKFSxEOTIJWlU5JyXuLzVjzZyfFIhm",
    day: 2,
    title: "مقدمه ای بر تجربه طراحی رابط کاربری",
    writer: "سپهر نوری",
    scale: "برنامه نویس",
    description: "تجربه طراحی رابط کاربری...",
  };
  return (
    <Container>
      <Row>
        {Array.from(Array(4)).map((_, index: number) => (
          <Col key={index} className="my-2 lg:p-2" xs={12} sm={6} lg={3}>
            <CardPost {...data} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Dots className="sm:justify-center">
            <DotButtons className="p-2.5 mx-4 sm:mx-12">
              <CaretRight size={20} />
            </DotButtons>
            <h4 className="m-0 text-lg">جدیدترین موضوعات</h4>
            <DotButtons className="p-2.5 mx-4 sm:mx-12">
              <CaretLeft size={20} />
            </DotButtons>
          </Dots>
        </Col>
      </Row>
    </Container>
  );
}
