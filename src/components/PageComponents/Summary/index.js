"use client";
import React, { useState } from "react";
import Stepper from "../Highlight/Stepper";
import PreviewGuid from "../Highlight/PreviewGuide";
import QuillBox from "../Highlight/QuillBox";
import dynamic from "next/dynamic";
import Link from "next/link";
import { USERRESUME } from "@/lib/apis/endpoints";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

import "react-quill/dist/quill.snow.css";
import { commonUpdateHandler } from "../../../lib/apis/services/common";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Summary() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const [saveLoading, setSaveLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const storedId = localStorage.getItem("_id");
    const storedFormData = localStorage.getItem("formData");

    if (!storedId) {
      console.error("Error: _id not found in local storage");
      return;
    }

    const parsedFormData = storedFormData ? JSON.parse(storedFormData) : {};
    // const response2 = await commonUpdateHandler(
    //   `${USERRESUME}/${storedId}`,
    //   {
    //     summary: value,
    //     ...parsedFormData,
    //     template: "65f5869675b548d4a6ecfbc8",
    //   },
    //   setSaveLoading
    // );
    // console.log("submit");

    // console.log("Response from Axios request:", response2);
    // toast.success("Summary are saved successfully.");

    try {
      const response2 = await commonUpdateHandler(
        `${USERRESUME}/${storedId}`,
        {
          summary: value,
          ...parsedFormData,
          template: "65f5869675b548d4a6ecfbc8",
        },
        setSaveLoading
      );

      console.log("Response from Axios request:", response2);
      toast.success("Summary saved successfully.");
      router.push("/resumereview");
    } catch (error) {
      console.error("There was a problem with your Axios request:", error);
      toast.error("Failed to save summary. Please try again.");
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-12 ">
        <div className="col-span-7">
          <form onSubmit={submitHandler} className="md:w-[90%] mx-auto mt-5">
            <div className="hidden md:block">
              <Stepper
                steps={[
                  { name: "Contact", active: true, href: "/" },
                  {
                    name: "Experience",
                    active: true,
                    href: "/workexperience",
                  },
                  { name: "Education", active: true, href: "/education" },
                  { name: "Skills", active: true, href: "/skills" },
                  { name: "Extras", active: true, href: "/highlights" },
                  { name: "Summary", active: true, href: "/summary" },
                ]}
              />
            </div>
            <div className="flex justify-between  my-8 px-1">
              <div className="">
                <p className="font-bold md:text-3xl font-bricolage-grotesque">
                  Professional summary
                </p>
              </div>
              <div className="hidden md:block">
                <div className=" flex items-start  cursor-pointer">
                  <img src="/img2/tips.svg" className="mt-1 mr-1" />
                  <p className="text-[#305EFF] font-semibold text-base">Tips</p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[#5A607F] mb-1">Professional summary</p>
              <div>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
                {/* <button className="custom-button">Button</button> */}
              </div>
            </div>
            <div className="grid md:grid-cols-2 my-5 gap-5">
              <div>
                <button
                  type="button"
                  className="text-[#2950DA] font-semibold text-base  text-center w-full p-2 rounded-3xl border-solid border border-[#305EFF]"
                >
                  Preview
                </button>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#2950DA] text-white font-semibold text-base  text-center w-full p-2 rounded-3xl border-solid border border-[#305EFF]"
                >
                  Go next
                </button>
              </div>

              {/* <button>Go next</button> */}
            </div>
          </form>
        </div>
        <div className="col-span-5 bg-[#f5f7ff]">
          <div className=" w-full h-screen bg-[#f5f7ff] ">
            <PreviewGuid />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Summary;
export default dynamic(() => Promise.resolve(Summary), {
  ssr: false,
});
