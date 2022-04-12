import React from "react";
import styled from "styled-components";
import { Text, Card } from "@nextui-org/react";
import { icons } from "../../assets/svgs/Icons";
import { Row, Col } from "react-grid-system";

const CustomCard = styled(Card)`
  border-radius: 25px !important;
  & div {
    @media only screen and (max-width: 768px) {
      height: 250px;
    }
    overflow-y: hidden !important;
    height: 300px;
    justify-content: center;
    &:hover .cardNumber span {
      opacity: 1 !important;
      }
    }
  }
`;

const CardBody = styled.p`
  color: #828282;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const CardNumber = styled.h1`
  color: #fcbf17;
  display: flex;
  justify-content: center;
  & > span {
    opacity: 0.3;
    transition: 0.5s;
  }
  & svg {
    margin-top: 1rem !important;
    margin-left: 0.45rem;
  }
`;

const CardFooter = styled.p`
  text-align: center;
  margin-top: -11px;
  & span {
    color: #fcbf17;
  }
`;

export default function LandingIntroCards() {
  return (
    <Row>
      <Col className="my-1 lg:p-2" xs={12} lg={3}>
        <CustomCard color="default">
          <Text h4 className="flex justify-center py-3">
            {icons[1]}
            <span className="m-2">بلاگ</span>
          </Text>
          <CardBody>
            شما در سکان بلاگ به مقالات و چالشهای روز دنیای برنامه نویسی به زبان
            فارسی دسترسی خواهید داشت.
          </CardBody>
          <CardNumber className="cardNumber">
            <span>2700</span>
          </CardNumber>
        </CustomCard>
      </Col>

      <Col className="my-1 lg:p-2" xs={12} lg={6}>
        <CustomCard color="default">
          <Text h4 className="flex justify-center p-0">
            {icons[2]}
            <span className="m-2">آکادمی</span>
          </Text>
          <CardBody className="m-0 xl:m-6">
            سکان آکادمی مرجع آموزش های به روز و رایگان در حوزه برنامه نویسی است.
            با ارا ئه دوره ها و مسیرهای تخصصی، شما را تا رسیدن به بازار کار
            همراهی می کنیم
          </CardBody>
          <CardNumber className="cardNumber">
            {icons[5]}
            <span>1079</span>
          </CardNumber>
          <CardFooter>
            قسمت منتشر شده در <span>34</span> دوره آموزشی
          </CardFooter>
        </CustomCard>
      </Col>

      <Col className="my-1 lg:p-2" xs={12} lg={3}>
        <CustomCard color="default">
          <Text h4 className="flex justify-center py-3">
            {icons[4]}
            <span className="m-2">بلاگ</span>
          </Text>
          <CardBody>
            در فن واژه سکان آکادمی به واژه های تخصصی حوزه برنامه نویسی با دسته
            بندیهای مناسب دسترسی دارید
          </CardBody>
          <CardNumber className="cardNumber">
            <span>155</span>
          </CardNumber>
        </CustomCard>
      </Col>
    </Row>
  );
}
