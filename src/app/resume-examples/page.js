import SectionHeading from "@/components/Common/SectionHeading";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  {
    name: "All",
    icon: "/all.svg",
  },
  {
    name: "Classic",
    icon: "/diamond.svg",
  },
  {
    name: "Professional",
    icon: "/briefcase.svg",
  },
  {
    name: "Mordern",
    icon: "/flash.svg",
  },
  {
    name: "Creative",
    icon: "/magicpen.svg",
  },
];

const Templates = () => {
  return (
    <div className="container my-10">
      <SectionHeading title="Learn From Successful Resume Examples" />

      {/* SEARCH SECTION */}

      <div className="w-full py-4 px-8 bg-[#D2E2F9] my-10 rounded-xl">
        <div className="flex items-center space-x-2 bg-white p-2 w-full rounded-md border">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <input
            type="search"
            className="flex-1 outline-none"
            placeholder="Search by keywords like Wipro or Software Engineer"
          />
        </div>
      </div>

      {/* RESUME EXAMPLES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-20">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
          <div
            className="z-10 group relative cursor-pointer shadow-xl rounded-2xl"
            key={index}
          >
            <div className="mb-2 text-center font-medium text-bluePrimary">
              Software Developer
            </div>
            <Image
              src={"/resume2.png"}
              width={"600"}
              height={"801"}
              alt={""}
              className=" rounded-xl mx-auto z-10"
            />
            <Link
              href="/resume-examples/123"
              className={`${"group-hover:block hidden absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "}  px-6 md:py-4 py-2 w-max  text-white bg-bluePrimary rounded-2xl hover:bg-lightBlue transition duration-100  `}
            >
              View Resume
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 flex space-x-2 mt-2 items-center mx-auto w-max">
              <div className="text-sm mt-px font-medium text-bluePrimary whitespace-nowrap">
                Hired By :
              </div>
              <Image
                src={"/walmart.svg"}
                alt={"logo"}
                width={100}
                height={40}
                className="h-4 w-auto "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
