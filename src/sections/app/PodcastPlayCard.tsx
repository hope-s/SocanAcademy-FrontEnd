import React from "react";
import TitleSection from "./TitleSection";
import { Card, Text } from "@nextui-org/react";
import { icons } from "../../assets/svgs/Icons";
import MainButton from "../../theme/components/MainButton";
import Container from "../../components/Container";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import { Bookmark, Share } from "react-bootstrap-icons";
import PropTypes from "prop-types";

const CardPlayDesktop = styled(Card)`
  display: flex !important;
  border-radius: 25px 25px 25px 50px;
  margin-top: -9%;
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
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card
            css={{
              mw: "100%",
              h: "350px",
              display: "grid",
              mt: "2rem",
              borderRadius: "25px 25px 25px 50px",
            }}
          >
            <TitleSection type="svg" title={title} icon={icons[4]} mt="2rem" />
            <Text className="text-base text-right sm:my-4 px-4">
              شما از طریق رادیو فول استک به پادکست های گفتگو محور و موضوع محور
              دسترسی خواهید داشت. با گوش سپردن به رادیو فول استک با شخصیت های
              موفق حوزه برنامه نویسی و دیجیتال، مسیر و چالش هایی که سپری کرده
              اند آگاه خواهید شد. پادکست های گفتگو محور به موضوعات برنامه نویسی
              و چالش های روز این حوزه می پردازد.
            </Text>
            <MainButton className="mx-auto mt-2 md:mt-8">
              همه اپیزود ها
            </MainButton>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={10} className="mx-auto">
          <CardPlayDesktop>
            <div className="flex flex-wrap md:flex-nowrap justify-center">
              <img
                className="card_image"
                src="	https://fs.sokanacademy.com/api/files?token=app/episodes/zQtlDPy5y41SV7OPPoQ43wE8NA2OYFv2nfptuw5w"
                alt="img"
              />

              <div className="w-full px-3">
                <div className="flex justify-between mt-3 md:mt-0">
                  <a className="card_play_title" href="#d">
                    <span>ایلیا وکیلی - مدیر ارشد ابروان</span>
                  </a>
                  <div>
                    <button>
                      <Share size={25} color="#ffffff" />
                    </button>
                    <button className="mr-3">
                      <Bookmark size={25} color="#ffffff" />
                    </button>
                  </div>
                </div>
                <a className="card_play_p" href="#d">
                  <p>ایلیا وکیلی - مدیر ارشد ابروان</p>
                </a>
              </div>
            </div>
          </CardPlayDesktop>
        </Col>
      </Row>
    </Container>
  );
}

PodcastPlayCard.propTypes = {
  title: PropTypes.string.isRequired,
};
