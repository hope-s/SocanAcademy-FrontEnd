import React from "react";
import { Input } from "@nextui-org/react";
import styled from "styled-components";

const SearchInput = styled(Input)`
  @media only screen and (max-width: 567px) {
    width: 90vw;
  }
  @media only screen and (min-width: 568px) and (max-width: 991px) {
    width: 300px;
  }
  border: 1px solid #fcbf17 !important;
  line-height: 1.5;
  width: 400px;
  transform: unset !important;
  border-radius: 8px !important;

  & input {
    background: #0a0328 !important;
    color: #fcbf17;
    text-align: right;
    &::placeholder {
      color: #fcbf17 !important;
    }
  }
  & label {
    background: #0a0328 !important;
  }
  margin-top: 8px;
`;

export default function NavbarInput({ placeholder }: { placeholder: string }) {
  return <SearchInput placeholder={placeholder} />;
}
