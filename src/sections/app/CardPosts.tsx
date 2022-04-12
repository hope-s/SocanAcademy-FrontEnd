import React from "react";
import CardPost from "./CardPost";
import { Row, Col } from "react-grid-system";

export default function CardPosts() {
  const data = {
    srcLink:
      "	https://fs.sokanacademy.com/api/files?token=app/sections/LlCLSgvo6GgKFSxEOTIJWlU5JyXuLzVjzZyfFIhm",
    day: 1,
    title: "مقدمه ای بر تجربه طراحی رابط کاربری",
    writer: "سپهر نوری",
    scale: "برنامه نویس",
    description: "تجربه طراحی رابط کاربری...",
  };
  return (
    <Row>
      {Array.from(Array(4)).map((_, index: number) => (
        <Col key={index} className="my-2 lg:p-2" xs={12} sm={6} lg={3}>
          <CardPost {...data} />
        </Col>
      ))}
    </Row>
  );
}
