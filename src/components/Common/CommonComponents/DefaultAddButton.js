import { ExclamationCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

const DefaultAddButton = ({ buttonName, type }) => {
  return (
    <div>
      <button
        type={type}
        className="text-bluePrimary my-5 flex justify-center items-center space-x-2 font-semibold text-base bg-[#305EFF14] text-center w-full p-2 rounded-3xl border-dashed border border-[#305EFF]"
      >
        <img src="/img2/addbut.svg" />
        <p>{buttonName}</p>
      </button>
    </div>
  );
};

export default DefaultAddButton;
