import React from "react";
import { data } from "./headerData/data";
import styled from "styled-components";

const Card = styled.div`
  width: 165px;
  height: 160px;
  z-index: 99;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 5px;
  padding: 1rem;
  text-align: center;
  transition: ease 500ms;
  user-select: none;
  cursor: pointer;
  & h6 {
    font-weight: 700;
    font-size: medium;
  }
  & p {
    font-size: 14px !important;
  }
  & svg {
    margin: 1rem auto 0rem auto;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

export default function HeaderCards() {
  return (
    <div className="flex justify-center py-4 md:pb-6 md:pt-10 min-w-800">
      {data.map((i, index) => (
        <Card key={index}>
          <h6>{i.title}</h6>
          {i.icon}
          <p>{i.description}</p>
        </Card>
      ))}
    </div>
  );
}
