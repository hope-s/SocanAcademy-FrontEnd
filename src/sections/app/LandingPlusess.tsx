import React from "react";
import { Col, Row } from "react-grid-system";
import Container from "../../components/Container";
import styled from "styled-components";
import Title from "../../components/Title";
import { PersonFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Card = styled.section`
  position: relative;
  background-color: #f2f2f2;
  margin: 30px auto;
  border-radius: 50px;
  max-width: 1300px;
  box-shadow: inset 5px 5px 15px rgb(0 0 0 / 15%);
  z-index: 0;
`;

const CardRight = styled.div`
  max-width: 350px;
  border-radius: 25px;
  & .content {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8902);
    border-radius: 25px;
    position: relative;
    & .bg-image {
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
`;

const CardLeft = styled.div`
  .card_image {
    max-width: 168px;
    height: 120px;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
  .content {
    & span .bg-avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

function Card1() {
  return (
    <CardRight className="md:mx-auto">
      <div className="content px-4 py-2 md:px-6 md:py-4">
        <img
          className="bg-image"
          src="https://fs.sokanacademy.com/api/files?token=app/blogs/aQiaIEQCTJF4D8F8PnOzKQvIbQ2KqgFZDkNrS8JF"
          alt="img"
        />
        <div className="flex items-center">
          <div className="w-9 h-9 bg-yellow-500 rounded-lg flex justify-center items-center">
            <PersonFill size={20} />
          </div>
          <p className="text-yellow-500 mr-3">فاطمه خانکی</p>
        </div>
        <div className="text-white">
          <h5>افزایش سرعت پروژه لاراول با Laravel Octane</h5>
          <p className="mt-2">
            Laravel Octane یک پکیج متن باز است که با استفاده از سرورهای پر قدرت،
            از جمله Open Swoole، Swoole و RoadRunner، عملکرد برنامه ی شما را
            افزایش می دهد. Octane برنامه را تنها یک بار bootstrap می کند، آن را
            در حافظه نگه می دارد و سپس درخواست های آن را با سرعت مافوق صوت پاسخ
            می دهد. در این مقاله قصد داریم در مورد Laravel Octane صحبت کنیم و
            مقایسه ای روی سرعت برنامه های Laravel با و بدون آن، انجام دهیم.
          </p>
        </div>
      </div>
    </CardRight>
  );
}

function Card2({ index }: { index: number }) {
  return (
    <CardLeft>
      <Row
        className={`${
          index > 0 && "md:mt-4"
        } mt-4 justify-center lg:justify-start`}
      >
        <Col sm={12} md={4} className="md:p-0">
          <img
            className="card_image"
            src="https://fs.sokanacademy.com/api/files?token=app/blogs/JkNlBVyF8mu4uDwpfxAoTQcVBygIIhoMU42RqdgI"
            alt="img"
          />
        </Col>
        <Col sm={12} md={6} className="md:p-0 mr-3">
          <div className="flex items-center my-3 md:mt-0">
            <span className="w-9 h-9">
              <span className="bg-avatar">
                <img
                  className="rounded-lg"
                  src="https://fs.sokanacademy.com/api/files?token=app/profiles/MFdzMThpZsKdMxhOHr7BU3cMlIsteRmIN44bcEBg"
                  alt="img"
                />
              </span>
            </span>
            <Link to="/" className="mr-2">
              <span>سپهر نوری</span>
            </Link>
          </div>
          <h5>تاریخچه جذاب علم UX</h5>
          <p>
            مفهوم UX از کجا پدیدار شده است؟ چه فاکتورها و بایدهایی به آن مفهومی
            که ما امروزه می‌شناسیم
          </p>
        </Col>
      </Row>
    </CardLeft>
  );
}

export default function LandingPlusess({ title }: { title: string }) {
  return (
    <Container>
      <Card className="px-4 py-4 md:px-0 md:py-8">
        <Title iconType="image" mt="0" title="قلم های داغ به انتخاب سردبیر" />
        <Row>
          <Col lg={6}>
            <Card1 />
          </Col>
          <Col lg={6}>
            {Array.from(Array(2)).map((_, index: number) => (
              <Card2 key={index} index={index} />
            ))}
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
