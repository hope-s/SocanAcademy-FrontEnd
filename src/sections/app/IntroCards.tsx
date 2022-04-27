import React from "react";
import styled from "styled-components";
import { Card } from "@nextui-org/react";
import { icons } from "../../assets/svgs/Icons";
import { Row, Col } from "react-grid-system";
import Title from "./Title";
import Container from "../../components/Container";

const CustomCard = styled(Card)`
  border-radius: 25px !important;
  & div {
    @media only screen and (max-width: 768px) {
      height: 250px;
    }
    overflow-y: hidden !important;
    height: 300px;
    justify-content: center;
    align-items: center;
    &:hover .cardNumber h1 {
      opacity: 1 !important;
      }
    }
  }
`;

const CardBody = styled.p`
  color: #828282;
  text-align: center;
  line-height: 1.25rem;
`;

const CardNumber = styled.div`
  color: #fcbf17;
  display: flex;
  justify-content: center;
  & > h1 {
    opacity: 0.3;
    font-size: 56px;
    margin-top: 5px !important;
    transition: 0.5s;
  }
  & svg {
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
    <Container>
      <Row>
        <Col className="my-1 lg:p-2" xs={12} lg={3}>
          <CustomCard color="default">
            <Title title="بلاگ" icon={icons[1]} type="svg" mb="-2px" />
            <CardBody>
              شما در سکان بلاگ به مقالات و چالشهای روز دنیای برنامه نویسی به
              زبان فارسی دسترسی خواهید داشت.
            </CardBody>
            <CardNumber className="cardNumber">
              <h1>2700</h1>
            </CardNumber>
          </CustomCard>
        </Col>

        <Col className="my-1 lg:p-2" xs={12} lg={6}>
          <CustomCard color="default">
            <Title title="آکادمی" icon={icons[2]} type="svg" mb="-2px" />
            <CardBody className="m-0 xl:m-6">
              سکان آکادمی مرجع آموزش های به روز و رایگان در حوزه برنامه نویسی
              است. با ارا ئه دوره ها و مسیرهای تخصصی، شما را تا رسیدن به بازار
              کار همراهی می کنیم
            </CardBody>
            <CardNumber className="cardNumber">
              {icons[5]}
              <h1>1079</h1>
            </CardNumber>
            <CardFooter>
              قسمت منتشر شده در <span>34</span> دوره آموزشی
            </CardFooter>
          </CustomCard>
        </Col>

        <Col className="my-1 lg:p-2" xs={12} lg={3}>
          <CustomCard color="default">
            <Title
              title="فن واژه"
              icon={icons[4]}
              type="svg"
              mb="-2px"
            />
            <CardBody>
              در فن واژه سکان آکادمی به واژه های تخصصی حوزه برنامه نویسی با دسته
              بندیهای مناسب دسترسی دارید
            </CardBody>
            <CardNumber className="cardNumber">
              <h1>155</h1>
            </CardNumber>
          </CustomCard>
        </Col>
      </Row>
    </Container>
  );
}
