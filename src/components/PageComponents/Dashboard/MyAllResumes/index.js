"use client";
import {
  ArrowDownTrayIcon,
  PencilIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ResumeOptionsMenuBlue from "../ResumeOptionsMenuBlue";
import ResumePreviewDialog from "../../../Dialogs/ResumePreviewDialog";

const MyAllResumes = () => {
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState(false);
  const value = 362;

  return (
    <div className="container">
      <div>
        <div className="w-max">
          <div className="text-bluePrimary text-xl md:text-3xl font-medium">
            All Resumes
          </div>
          <div className="h-1 bg-bluePrimary w-1/5 mt-2 rounded-full"></div>
        </div>
        {/* LIST */}
        <div className="mt-5 mb-10 ">
          <div className="w-full h-12 flex items-center bg-bluePrimary text-white rounded-t-3xl">
            <div className="w-full grid grid-cols-5 gap-10">
              <div className="text-center">File Resume</div>
              <div className="text-center">Resume Score</div>
              <div className="text-center">Completion Status</div>
              <div className="text-center">Last Updated</div>
              <div className="text-center">Actions</div>
            </div>
          </div>
          <div className="space-y-3 w-full mt-3">
            {[0, 1, 2, 3].map((resume, index) => (
              <div
                key={index}
                className="w-full rounded-xl p-4 border shadow-md grid grid-cols-5 gap-10 hover:shadow-2xl cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <div className="flex space-x-2 items-center">
                  <div className="w-10">
                    <Image
                      src="/Resume.svg"
                      className="h-10 w-10"
                      width={50}
                      height={50}
                      alt="resume logo"
                    />
                  </div>
                  <div className="text-bluePrimary font-semibold">
                    Surya Shakti Resume
                  </div>
                  <PencilIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditName(true);
                    }}
                    className="text-bluePrimary w-4"
                  />
                </div>
                <div className="flex items-center space-x-2 justify-center">
                  <div className="h-12 w-10">
                    <CircularProgressbar
                      value={value}
                      minValue={0}
                      maxValue={1000}
                      className="h-12"
                      strokeWidth={15}
                      styles={buildStyles({
                        pathColor:
                          value < 300
                            ? "#FF7878"
                            : value > 300 && value < 650
                            ? "#FBB034"
                            : "#A3FB34",
                      })}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-xl leading-5 font-bold text-[#FBB034]">
                      {value}
                    </div>
                    <div className="text-xs leading-3">Poor</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-1">Completion Status</div>
                  <div class="w-full bg-gray-200 rounded-full">
                    <div
                      className={`bg-bluePrimary text-xs font-medium text-white text-center h-[10px] leading-none rounded-full w-[65%]`}
                    ></div>
                  </div>
                </div>
                <div className="text-black text-center h-full flex items-center justify-center">
                  12th April, 2023
                </div>
                <div className="h-full flex justify-center items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      // Handle action button click
                    }}
                  >
                    <PencilSquareIcon className="w-5 h-5 text-bluePrimary" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      // Handle action button click
                    }}
                  >
                    <ArrowDownTrayIcon className="w-5 h-5 text-bluePrimary" />
                  </button>
                  <div
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      // Handle action button click
                    }}
                  >
                    <ResumeOptionsMenuBlue />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="text-bluePrimary font-semibold">See More</button>
        </div>
      </div>
      {open && <ResumePreviewDialog isOpen={open} setIsOpen={setOpen} />}
    </div>
  );
};

export default MyAllResumes;
