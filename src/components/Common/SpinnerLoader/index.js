import React from "react";
import { ClipLoader } from "react-spinners";

const SpinnerLoader = ({ color }) => {
  return (
    <ClipLoader size="20px" color={color !== "white" ? "#1450A3" : "#ffffff"} />
  );
};

export default SpinnerLoader;
