import React from "react";
import { Button, styled } from "@nextui-org/react";
import PropTypes from "prop-types";

export default function CustomButton(props: any) {
  const MyStyledButton = styled<any, any>(Button, {
    borderRadius: "10px 10px 10px 15px",
    padding: "0 16px !important",
    whiteSpace: "nowrap !important",
    fontSize: "1rem",
    minWidth: "unset !important",
    fontWeight: "bold",
    boxShadow: "0 1px 5px rgba(142,105,2,.18)!important",
    "&:hover": {
      boxShadow: "0 3px 8px rgba(142,105,2,.18)!important",
    },
    variants: {
      color: {
        normal: {
          color: "$main !important",
          width: "120px !important",
        },
      },
    },
  });
  return (
    <MyStyledButton {...props} color="normal">
      {props.children}
    </MyStyledButton>
  );
}

CustomButton.propTypes = {
  children: PropTypes.any,
  ghost: PropTypes.bool,
  className: PropTypes.string,
};
