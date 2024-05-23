"use client";
import Image from "next/image";
import React, { useState } from "react";

function PreviewGuid() {
  const [tab, setTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handelOnClick = (number) => {
    setTab(number);
  };
  return (
    <div>
      <div className="flex md:w-[82%] mx-auto space-x-5  overflow-x-scroll md:overflow-x-hidden  text-sm text-gray-500 font-medium border-b-2 mt-5">
        <div
          onClick={() => handelOnClick(1)}
          className={` ${
            tab === 1
              ? "text-[#305EFF]  py-3  font-semibold text-base    border-[#305eff] border-b-[3px] w-5/5  cursor-pointer"
              : "text-[#768EA7]  py-3 font-semibold text-base  border-transparent cursor-pointer"
          } `}
        >
          Preview
        </div>

        <div
          onClick={() => handelOnClick(2)}
          className={` ${
            tab === 2
              ? "text-[#305EFF]  py-3  font-semibold text-base    border-[#305eff] border-b-[3px] w-5/5  cursor-pointer"
              : "text-[#768EA7]  py-3 font-semibold text-base  border-transparent cursor-pointer"
            // ? " flex-1 p-3  text-black  shadow-lg border-b-4 border-b-[#13478F]"
            // : " flex-1 p-3   shadow-lg "
          } `}
        >
          Resume guide
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-8">
        {tab === 1 ? (
          <Image
            alt="resume preview image"
            width={1000}
            height={2000}
            src="/img2/resume.svg"
            className="w-[82%]"
          />
        ) : undefined}
      </div>
    </div>
  );
}

export default PreviewGuid;
