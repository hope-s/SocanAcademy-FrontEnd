import React from "react";
import { Card, Text } from "@nextui-org/react";
import styled from "styled-components";
import { Col, Row } from "react-grid-system";
import Title from "../../../components/Title";
import { icons } from "../../../assets/svgs/Icons";
import Container from "../../../components/Container";
import MainButton from "../../../theme/components/MainButton";
import PlusChildCard from "./PlusChildCard";

const CardPlus = styled(Card)`
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
  padding: 40px 30px 100px 30px;
  border-radius: 25px 50px 25px 25px !important;
`;

export default function SocanPlusCard({ title }: { title: string }) {
  return (
    <Container>
      <Row>
        <Col lg={12} xl={10} className="mx-auto">
          <CardPlus className="">
            <Title title={title} iconType="svg" icon={icons[2]} />
            <Text className="text-center md:text-sm">
              اگر به دنبال فضایی تخصصی برای تولید محتوا و انتشار مقاله‌های خود
              هستید، سکان پلاس، خدمتیست که این فضا را برای شما فراهم می‌کند. با
              تولید محتوای .باکیفیت نه تنها روی برندینگ شخصیتان سرمایه گزاری می
              کنید، بلکه می توانید با به دست آوردن تایید ویژه ی سکان آکادمی کسب
              درآمد کنید.
            </Text>
            <MainButton className="mx-auto mt-4"> + ایجاد پست</MainButton>
          </CardPlus>
          <Row className="px-2 lg:px-12 mt-1 md:mx-0">
            {Array.from(Array(3)).map((_, index: number) => (
              <Col
                key={index}
                sm={6}
                md={4}
                lg={4}
                className="mx-auto mt-3 px-1 lg:-mt-20"
              >
                <PlusChildCard />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <MainButton className="mx-auto mt-4"> همه پلاس ها</MainButton>
    </Container>
  );
}
