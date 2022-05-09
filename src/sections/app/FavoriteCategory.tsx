import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import Container from "../../components/Container";
import { Col, Row } from "react-grid-system";
import programmingSvg from "../../assets/svgs/programming.svg";
import GridSvg from "../../assets/svgs/grid-svg.svg";

const Card = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2rem;
  padding: 2rem 1rem 5rem 1rem;
  border-radius: 0.5rem;
  background-color: #f5f5f5;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  .grid_buttom {
    position: absolute;
    bottom: 0;
    left: 70px;
  }
  .grid_top {
    position: absolute;
    top: 50px;
    right: 70px;
  }
`;

const CardItem = styled.div`
  min-height: 330px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.16));
  header {
    background-color: #fcbf17;
    padding: 0.3rem;
    border-radius: 20px 20px 10px 10px;
    padding: 15px 20px;
    height: 76px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .content {
    padding: 1rem;
    .text_container {
      display: flex;
      align-items: baseline;
      justify-content: right;
      span {
        width: 17px;
        height: 13px;
        background-color: #fcbf17;
        border-radius: 2px;
      }
      a {
        text-align: justify;
        padding-right: 0.7rem;
      }
    }
  }
`;

export default function FavoriteCategory({ title }: { title: string }) {
  return (
    <>
      <Card>
        <Title title={title} iconType="image" />
        <Container>
          <Row>
            {Array.from(Array(3)).map((_, index) => (
              <Col
                className="my-2 px-0 sm:px-2 z-50"
                xs={12}
                sm={6}
                md={4}
                key={index}
              >
                <CardItem>
                  <header>
                    <img src={programmingSvg} alt="img" className="w-12 h-12" />
                    <h4 className="mr-2">برنامه نویسی</h4>
                  </header>
                  <div className="content">
                    {Array.from(Array(5)).map((_, index) => (
                      <div className="text_container my-2">
                        <span />
                        <a key={index} href="no_ref">
                          افزونه وردپرس چیست؟ چگونه بهترین افزونه های وردپرس را
                          برای سایت پیدا کنیم؟
                        </a>
                      </div>
                    ))}
                  </div>
                </CardItem>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="grid_top none lg:block">
          <img src={GridSvg} alt="img" style={{width: 130}}/>
        </div>
        <div className="grid_buttom none lg:block">
          <img src={GridSvg} alt="img" />
        </div>
      </Card>
    </>
  );
}
