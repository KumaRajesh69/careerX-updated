import { ChevronDownIcon } from "@heroicons/react/solid";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

import React from "react";

function DownloadAndPrint() {
  return (
    <div className="md:px-20 mx-auto border-l p-5 md:p-0">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-12 lg:gap-12 pt-24 ">
        <button className="rounded-2xl  border-2 justify-center items-center md:h-24 md:w-40 p-5 md:p-0  ">
          <div className="flex justify-center items-center flex-col space-y-4">
            <img src="/img2/arrowdownload.svg" className="h-5" />
            <p className="font-semibold text-bluePrimary text-sm">Download</p>
          </div>
        </button>
        <button className="rounded-2xl  border-2 justify-center items-center md:h-24 md:w-40 p-5 md:p-0 ">
          <div className="flex justify-center items-center flex-col space-y-4">
            <img src="/img2/print.svg" className="h-5" />
            <p className="font-semibold text-bluePrimary text-sm">Print</p>
          </div>
        </button>
        <button className="rounded-2xl  border-2 justify-center items-center md:h-24 md:w-40 p-5 md:p-0 ">
          <div className="flex justify-center items-center flex-col space-y-4">
            <img src="/img2/msgbox.svg" className="h-5" />
            <p className="font-semibold text-bluePrimary text-sm">Email</p>
          </div>
        </button>
        <button className="rounded-2xl  justify-center items-center md:h-24 md:w-40 p-5 md:p-0 ">
          <div className="flex justify-center items-center space-x-1">
            <p className="font-semibold text-bluePrimary text-sm">More</p>
            {/* <ChevronDownIcon className="text-bluePrimary h-5" /> */}-
          </div>
        </button>
      </div>
      <div className=" mt-10">
        <img src="/img2/preresume.svg" />
      </div>
    </div>
  );
}

export default DownloadAndPrint;
