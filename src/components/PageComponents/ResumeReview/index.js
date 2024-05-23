import React from "react";
import DownloadAndPrint from "./DownloadAndPrint";
import Insights from "./Insights";
import ResumeName from "./ResumeName";
import ResumeTools from "./ResumeTools";

function ResumeReview() {
  return (
    <>
      <div className="grid md:grid-cols-12 ">
        <div className="md:col-span-5">
          <div className="mx-auto md:px-20 px-5 ">
            <p className="font-bold font-bricolage-grotesque text-3xl mt-10">
              Resume review
            </p>
            <div>
              <div className=" bg-[#305EFF] mt-6 rounded-t-2xl relative">
                <img src="/img2/smile.svg" className="absolute top-0 right-0" />
                <div className="px-5 mx-auto py-5">
                  <p className="text-white font-semibold text-sm">
                    Resume score
                  </p>
                  <p className="mt-5 text-white text-7xl font-bold font-bricolage-grotesque">
                    450
                  </p>
                  <div className="mt-5">
                    <div className="w-full bg-[#6e8eff] rounded-full h-2 ">
                      <div
                        className="bg-[#FFBA35] w-[20%] h-2 rounded-full"
                        // style="width: 45%"
                      ></div>
                      <div className="flex justify-between mt-1 text-xs text-white">
                        <p>400</p>
                        <p>1000</p>
                      </div>
                    </div>
                    <p className="mt-10 text-xl text-white font-semibold">
                      Your resume needs more work. Check the insights below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Insights />
            <ResumeName />
            <ResumeTools />
          </div>
        </div>
        <div className="md:col-span-7 ">
          <DownloadAndPrint />
        </div>
      </div>
    </>
  );
}

export default ResumeReview;
