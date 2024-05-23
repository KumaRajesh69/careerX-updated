import Image from "next/image";
import React from "react";

const DashboardCtaButton = ({ title, image, description, callback }) => {
  return (
    <button
      onClick={callback}
      className="rounded-2xl shadow-xl p-4 flex space-x-4 items-center hover:scale-110 hover:shadow-2xl transform duration-150"
    >
      <div className="w-20">
        <Image height={40} width={40} className="w-20" src={image} alt="logo" />
      </div>
      <div className="text-left">
        <div className="text-[#1450A3] mb-1 text-lg font-semibold">{title}</div>
        <div className="text-xs">{description}</div>
      </div>
    </button>
  );
};

export default DashboardCtaButton;
