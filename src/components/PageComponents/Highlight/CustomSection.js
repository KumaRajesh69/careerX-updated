import React from "react";
import DefaultInput from "../../Common/Inputs/ResumeCreation/DefaultInput";
import QuillBox from "./QuillBox";
import DefaultAddButton from "../../Common/CommonComponents/DefaultAddButton";

function CustomSection() {
  return (
    <div>
      <div>
        <DefaultInput placeholder="Title of the section" />
      </div>
      <div className="mt-5">
        <p className="text-[#5A607F] mb-1">Description</p>
        <QuillBox />
      </div>
      <DefaultAddButton type="submit" buttonName="Add another paper" />
      <div className="flex space-x-2 my-5 border-t-2 pt-10">
        <button
          type="button"
          className="text-[#2950DA] font-semibold text-base  text-center w-full p-3 rounded-3xl border-solid border border-[#305EFF]"
        >
          Preview
        </button>
        <button
          type="submit"
          className="bg-[#2950DA] text-white font-semibold text-base  text-center w-full p-2 rounded-3xl border-solid border border-[#305EFF]"
        >
          Go next
        </button>
        {/* <button>Go next</button> */}
      </div>
    </div>
  );
}

export default CustomSection;
