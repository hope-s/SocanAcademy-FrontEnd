import React from "react";
import { Card, Text } from "@nextui-org/react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import { Bookmark, Share } from "react-bootstrap-icons";
import PropTypes from "prop-types";
import Title from "../../../components/Title";
import { icons } from "../../../assets/svgs/Icons";
import MainButton from "../../../theme/components/MainButton";
import Container from "../../../components/Container";

const CustomCard = styled(Card)`
  display: grid;
  border-radius: 25px 25px 25px 50px;
  @media only screen and (min-width: 992px) {
    height: 130%;
  }
`;

const CardPlay = styled(Card)`
  display: flex !important;
  border-radius: 25px 25px 25px 50px;
  background-color: #0a0328;
  padding: 10px;
  .card_image {
    @media screen and (max-width: 768px) {
      width: auto;
      max-height: 220px;
    }
    width: 178px;
    height: 100%;
    max-height: 125px;
    border-radius: 15px 15px 25px 15px;
  }
  .card_play_title {
    color: #fcbf17;
    font-size: 15px !important;
    font-weight: 700 !important;
  }
  .card_play_p {
    text-align: right !important;
    color: #ffffff;
    margin-top: 5px;
  }
`;

export default function PodcastPlayCard({ title }: { title: string }) {
  const data = {
    text: "شما از طریق رادیو فول استک به پادکست های گفتگو محور و موضوع محور دسترسی خواهید داشت. با گوش سپردن به رادیو فول استک با شخصیت هایموفق حوزه برنامه نویسی و دیجیتال، مسیر و چالش هایی که سپری کردهاند آگاه خواهید شد. پادکست های گفتگو محور به موضوعات برنامه نویسی و چالش های روز این حوزه می پردازد.",
    cardTitle: "ایلیا وکیلی - مدیر ارشد ابروان",
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <CustomCard className="py-4 lg:py-6 mt-4">
            <Title iconType="svg" title={title} icon={icons[4]} mt="2rem" />
            <Text className="text-base text-right sm:my-4 px-4">
              {data.text}
            </Text>
            <MainButton className="mx-auto mt-6">همه اپیزود ها</MainButton>
          </CustomCard>
        </Col>
      </Row>
      <Row>
        <Col lg={10} className="mx-auto">
          <CardPlay className="mt-4 ">
            <div className="flex flex-wrap md:flex-nowrap justify-center">
              <img
                className="card_image"
                src="	https://fs.sokanacademy.com/api/files?token=app/episodes/zQtlDPy5y41SV7OPPoQ43wE8NA2OYFv2nfptuw5w"
                alt="img"
              />

              <div className="w-full px-3">
                <div className="flex justify-between mt-3 md:mt-0">
                  <a className="card_play_title" href="#d">
                    <span>{data.cardTitle}</span>
                  </a>
                  <div>
                    <button>
                      <Share size={20} color="#ffffff" />
                    </button>
                    <button className="mr-3">
                      <Bookmark size={20} color="#ffffff" />
                    </button>
                  </div>
                </div>
                <a className="card_play_p" href="#d">
                  <p>{data.cardTitle}</p>
                </a>
              </div>
            </div>
          </CardPlay>
        </Col>
      </Row>
    </Container>
  );
}

PodcastPlayCard.propTypes = {
  title: PropTypes.string.isRequired,
};
