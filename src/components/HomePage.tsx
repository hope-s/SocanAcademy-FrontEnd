import React, {Fragment} from "react";
import Header from "./Header";
import HeaderSvg from "../assets/images/header-svg.svg";
import styled from "styled-components";
import { Card, Grid, Text } from "@nextui-org/react";
import { icons } from "../data/data";

const HeaderSecetion = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  & h4 {
    margin-top: 0.75rem;
    margin-right: -25px;
    font-weight: bold;
  }
`;

const Container = styled(Grid.Container)`
  justify-content: center;
  margin-top: 1em;
  @media only screen and (min-width: 991px) {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;

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

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <main className="overflow-hidden">
        <HeaderSecetion>
          <img src={HeaderSvg} alt="header-bg" width="45" height="45" />
          <h4>آموزش با سکان آکادمی</h4>
        </HeaderSecetion>

        <Container gap={1}>
          <Grid xs={11} sm={3} md={3}>
            <CustomCard className="" color="default">
              <Text h4 className="flex justify-center py-3">
                {icons[1]}
                <span className="m-2">بلاگ</span>
              </Text>
              <CardBody>
                شما در سکان بلاگ به مقالات و چالشهای روز دنیای برنامه نویسی به
                زبان فارسی دسترسی خواهید داشت.
              </CardBody>
              <CardNumber className="cardNumber">
                <span>2700</span>
              </CardNumber>
            </CustomCard>
          </Grid>

          <Grid xs={11} sm={3} md={6}>
            <CustomCard color="default">
              <Text h4 className="flex justify-center p-0">
                {icons[2]}
                <span className="m-2">آکادمی</span>
              </Text>
              <CardBody className="m-0 xl:m-6">
                سکان آکادمی مرجع آموزش های به روز و رایگان در حوزه برنامه نویسی
                است. با ارا ئه دوره ها و مسیرهای تخصصی، شما را تا رسیدن به بازار
                کار همراهی می کنیم
              </CardBody>
              <CardNumber className="cardNumber">
                {icons[5]}
                <span>1079</span>
              </CardNumber>
              <CardFooter>
                قسمت منتشر شده در <span>34</span> دوره آموزشی
              </CardFooter>
            </CustomCard>
          </Grid>

          <Grid xs={11} sm={3} md={3}>
            <CustomCard color="default">
              <Text h4 className="flex justify-center py-3">
                {icons[4]}
                <span className="m-2">بلاگ</span>
              </Text>
              <CardBody>
                در فن واژه سکان آکادمی به واژه های تخصصی حوزه برنامه نویسی با
                دسته بندیهای مناسب دسترسی دارید
              </CardBody>
              <CardNumber className="cardNumber">
                <span>155</span>
              </CardNumber>
            </CustomCard>
          </Grid>
        </Container>
        <br />
        <br />
        <br />
        <br />
      </main>
    </Fragment>
  );
}
