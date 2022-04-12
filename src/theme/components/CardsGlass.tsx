import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

const CustomCard = styled.section`
  ${({ type }: { type?: string }) => {
    switch (type) {
      case "glass":
        return css`
          border-radius: 15px 15px 15px 25px;
          overflow: hidden;
          height: 115px;
          width: 100%;
          background-color: hsla(0, 0%, 100%, 0.05);
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          cursor: pointer;
          & .cardImage {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            position: absolute;
            top: 18px;
            right: 1rem;
          }
          & .cardParagraph {
            color: #f2f2f2;
            margin-right: 4rem;
            margin-top: 8px;
            font-weight: bold;
            transition: ease 300ms;
            &:hover{
            color: #fcbf17;
            }
          }
          }
          & .cardFooter {
            display: flex;
            position: absolute;
            color: #f2f2f2;
            bottom: -1px;
            & p {
              font-size: 14px;
            }
            & .cardFooterAuhter {
              display: flex;
              margin-top: 1rem;
              & .cardImageIcon {
                width: 20px;
                height: 20px;
                border-radius: 10px;
                margin-top: 1rem;
                margin-right: 10px;
              }
              & p {
                margin-right: 10px;
              }
            }
            & .cardFooterIcon {
              display: flex;
              margin-top: 1rem;
              & svg {
                display: inline;
                margin: 20px 20px 0 10px;
              }
            }
          }

          & .cardFooterIcon {
            & img {
              width: 20px;
              height: 20px;
              border-radius: 10px;
            }
          }
        `;
      default:
        return css`
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
            font-weight: bold;
            font-size: medium;
          }
          & svg {
            margin: 1rem auto 0rem auto;
          }
          &:hover {
            transform: scale(1.03);
          }
        `;
    }
  }}
`;

export default function Card({
  children,
  type,
}: {
  children: ReactNode;
  type?: string;
}) {
  return <CustomCard type={type}>{children}</CustomCard>;
}
