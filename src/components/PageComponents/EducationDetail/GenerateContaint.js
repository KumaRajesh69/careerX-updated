import React from "react";

const chips = [
  { name: "Figma" },
  { name: "UI designer" },
  { name: "Usability testing" },
  { name: "UX management" },
  { name: "Collaborator" },
  { name: "Sprint master" },
  { name: "UX management" },
  { name: "Collaborator" },
  { name: "Sprint master" },
  { name: "Figma" },
];

function GenerateContent() {
  return (
    <div className="rounded-t-2xl p-5 py-10  shadow-md">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl text-[#192739]">
          Select keywords to define your work!
        </p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-[#7A7A7A] pb-5 pt-2">
        Select at least 3 and let AI create content!
      </p>
      <div className="flex flex-wrap gap-3">
        {chips.map((item, index) => (
          <div
            key={index}
            className="inline-block border rounded-[40px] px-3 py-1 text-[#192739]"
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <button className="flex space-x-1 font-semibold items-center mt-5 text-bluePrimary">
        <img src="/img2/addbut.svg" className="h-3" />
        <p>more</p>
      </button>
      <div className="mt-20 flex space-x-2">
        <img src="/img2/grow.svg" />
        <p className="text-xs text-[#768EA7]">
          Utilize our AI to generate an industry-standard description for you!
        </p>
      </div>
      <div className="w-full">
        <button className="font-semibold text-white bg-bluePrimary w-full rounded-3xl p-3 mt-5">
          Generate content
        </button>
      </div>
    </div>
  );
}

export default GenerateContent;
