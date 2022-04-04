import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

const CustomCrad = styled.section`
  ${({ type }: { type?: string }) => {
    switch (type) {
      case "glass":
        return css`
          display: flex;
          border-radius: 15px 15px 15px 25px;
          overflow: hidden;
          height: 115px;
          max-width: 360px;
          width: 100%;
          padding: 5px;
          margin: 10px;
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
          background-color: #ffffff;
          border-radius: 15px;
          margin: 5px;
          padding: 1rem;
          text-align: center;
          & h6 {
            font-weight: bold;
            font-size: medium;
          }
          & svg {
            margin: 1rem auto 0rem auto;
          }
        `;
    }
  }}
`;

export default function Crad({
  children,
  type,
}: {
  children: ReactNode;
  type?: string;
}) {
  return <CustomCrad type={type}>{children}</CustomCrad>;
}
