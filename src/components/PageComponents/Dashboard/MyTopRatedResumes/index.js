import { ArrowDownTrayIcon, PencilIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React, { use, useState } from "react";
import ResumeOptionsMenu from "../ResumeOptionsMenu";
import ResumePreviewDialog from "@/components/Dialogs/ResumePreviewDialog";

const MyTopRatedResumes = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container my-5 md:mt-20 mb-10">
      <div className="w-max">
        <div className="text-bluePrimary text-xl md:text-3xl font-medium">
          Top Rated Resumes
        </div>
        <div className="h-1 bg-bluePrimary w-1/5 mt-2 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 md:gap-20 pt-10">
        {[0, 1, 2].map((item, index) => (
          <div
            className="z-10 group relative cursor-pointer shadow-xl rounded-2xl"
            key={index}
          >
            <Image
              src={"/resume2.png"}
              width={"600"}
              height={"801"}
              alt={""}
              className=" rounded-xl mx-auto z-10"
              onClick={() => setOpen(true)}
            />
            <div className="absolute bottom-0 left-0 h-20 w-full rounded-b-xl bg-bluePrimary backdrop-blur-2xl bg-opacity-25 flex p-3">
              <div className="flex-1">
                <div className="text-white flex space-x-2 ">
                  <div className="text-white font-medium text-lg">
                    My Resume
                  </div>
                  <PencilIcon className="text-white w-4" />
                </div>
                <div className="text-white italic text-base font-light">
                  Modified On: 2 May, 2023
                </div>
              </div>
              <div className="flex space-x-1 items-center">
                <Image
                  src={"/download.svg"}
                  width={50}
                  height={10}
                  alt="download"
                  className="w-5"
                />
                <ResumeOptionsMenu />
              </div>
            </div>
          </div>
        ))}
      </div>

      {open && <ResumePreviewDialog isOpen={open} setIsOpen={setOpen} />}
    </div>
  );
};

export default MyTopRatedResumes;
