import React, { useState } from "react";
import Stepper from "./Stepper";
import Accordion from "./Accordion";
import PreviewGuid from "./PreviewGuide";
import Publication from "./Publication";
import Link from "next/link";
import { commonUpdateHandler } from "@/lib/apis/services/common";
import { USERRESUME } from "@/lib/apis/endpoints";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Highlight({ data }) {
  const [saveLoading, setSaveLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("-------------------->");
    const storedId = localStorage.getItem("_id");
    const storedFormData = localStorage.getItem("formData");

    if (!storedId) {
      console.error("Error: _id not found in local storage");
      return;
    }

    try {
      const parsedFormData = storedFormData ? JSON.parse(storedFormData) : {};
      console.log("------------>>>>>>>>>>>", parsedFormData);

      const response2 = await commonUpdateHandler(
        `${USERRESUME}/${storedId}`,
        {
          ...parsedFormData,
          template: "65f5869675b548d4a6ecfbc8",
        },
        setSaveLoading
      );
      console.log("submit");

      console.log("Response from Axios request:", response2);
      // Update localStorage with the updated form data
      localStorage.setItem(
        "formData",
        JSON.stringify({
          ...parsedFormData,
        })
      );

      // Redirect to the highlights page
      // Router.push("/summary");
      router.push("/summary");
      toast.success("Highlights are saved successfully.");
    } catch (error) {
      console.error("Error updating Highlight:", error);
    }
  };
  // console.log("-------------------->", handleSubmit);

  return (
    <div className="grid md:grid-cols-12">
      <div className="md:col-span-7">
        <div className="md:w-[90%] mx-auto mt-5">
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
                { name: "Summary", active: false, href: "/summary" },
              ]}
            />
          </div>
          <div className="flex justify-between  my-8 px-1">
            <div className="">
              <p className="font-bold md:text-3xl font-bricolage-grotesque">
                Choose skills you want to highlight
              </p>
              <p className=" text-sm text-[#A1A7C4]">
                Differentiate yourself from the crowd by adding your special
                interests & talents
              </p>
            </div>
            <div className="hidden md:block">
              <div className=" flex items-start  cursor-pointer">
                <img src="/img2/tips.svg" className="mt-1 mr-1" />
                <p className="text-[#305EFF] font-semibold text-base">Tips</p>
              </div>
            </div>
          </div>
          <Accordion data={data} />
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
              {/* <Link href="/summary"> */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#2950DA] text-white font-semibold text-base  text-center w-full p-2 rounded-3xl border-solid border border-[#305EFF]"
              >
                Go next
              </button>
              {/* </Link> */}
            </div>

            {/* <button>Go next</button> */}
          </div>
        </div>
      </div>
      {/* <div class="w-3/12"> */}
      <div className="md:col-span-5 bg-[#f5f7ff]">
        <div className=" w-full h-screen bg-[#f5f7ff] ">
          <PreviewGuid />
        </div>
      </div>
    </div>
  );
}

export default Highlight;
