import React from "react";
import CardPost from "./CardPost";
import { Container, Row, Col } from "react-grid-system";

export default function CardPosts() {
  return (
    <Container>
      <Row>
        {Array.from(Array(4)).map((_, index: number) => (
          <Col key={index} className="my-2 lg:p-2" xs={12} sm={6} lg={3}>
            <CardPost />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
