import React from "react";
import logo from "../assets/svgs/logo.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img className="cursor-pointer" src={logo} alt="logo" />
    </Link>
  );
}
