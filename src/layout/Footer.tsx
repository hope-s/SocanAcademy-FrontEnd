import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import { Row, Col } from "react-grid-system";
import Logo from "../components/Logo";
import { Instagram, Whatsapp, Linkedin, Twitter } from "react-bootstrap-icons";

const Background = styled.footer`
  background-color: #0b032d;
  padding-top: 90px;
  border-top-left-radius: 40px;
`;
const Ul = styled.ul`
  color: #fefefe;
  font-size: 1rem !important;
  font-weight: bold;
  li a {
    font-weight: normal;
    display: flex;
    color: #fefefe !important;
  }
`;

const SocialFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 15px 5px;
  background-color: #fcbf17;
  border-radius: 15px 15px 0 0;
`;

export default function Footer() {
  return (
    <Background>
      <Container classes="px-4">
        <Row>
          <Col sm={12} lg={6}>
            <Logo />
            <p className="text-white">
              در سکان امیدواریم بتوانیم در علاقمندسازی جوانان ایرانی به دنیای
              برنامه‌نویسی، که یکی از پردرآمدترین مشاغل دنیا است، تأثیری مثبت،
              هرچند کوچک، داشته باشیم و جایگاه کشورمان را در دورانی که تحت‌
              عنوان عصر فناوری شناخته می‌شود، ارتقاء بخشیم (در همین راستا،‌ سکان
              آکادمی اولین سایت به زبان فارسی است که اقدام به تألیف دورهٔ آموزش
              برنامه‌نویسی به کودکان نموده است.)
            </p>
          </Col>
          <Col sm={12} lg={6}>
            <Row>
              <Col sm={6}>
                <Ul>
                  <li>
                    خدمات سکان آکادمی
                    {Array.from(Array(3)).map((_, index: number) => (
                      <a href="/">سکان پلاس</a>
                    ))}
                  </li>
                </Ul>
              </Col>
              <Col sm={6}>
                <Ul>
                  <li>
                    دسترسی سریع
                    {Array.from(Array(3)).map((_, index: number) => (
                      <a href="/">درباره ما</a>
                    ))}
                  </li>
                </Ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <p className="text-center text-primary text-sm">
          کلیه حقوق مادی و معنوی این وب‌سایت متعلق به شرکت نوآوری دیجیتال صدرا
          می باشد.
        </p>
        <Row justify="center">
          <Col xs={8} sm={6} md={4} lg={3}>
            <SocialFooter className="justify-around md:justify-evenly">
              <Instagram size={35} className="bg-block rounded-md text-primary hover:bg-white duration-200 p-1.5 cursor-pointer"/>
              <Whatsapp size={35} className="bg-block rounded-md text-primary hover:bg-white duration-200 p-1.5 cursor-pointer"/>
              <Linkedin size={35} className="bg-block rounded-md text-primary hover:bg-white duration-200 p-1.5 cursor-pointer"/>
              <Twitter size={35} className="bg-block rounded-md text-primary hover:bg-white duration-200 p-1.5 cursor-pointer"/>
            </SocialFooter>
          </Col>
        </Row>
      </Container>
    </Background>
  );
}
