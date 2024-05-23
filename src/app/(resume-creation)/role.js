import DefaultInput from "@/component/inputs/DefaultInput";
import Link from "next/link";
import React, { useState } from "react";

function role() {
  const [isFresher, setIsFresher] = useState(null);
  const [targetRole, setTargetRole] = useState("");
  const [targetCompany, setTargetCompany] = useState("");

  const handleFresherSelection = (value) => {
    setIsFresher(value);
  };
  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-12">
        <div className="relative md:col-span-3 bg-bluePrimary h-screen">
          <img
            src="/img2/briefcase.svg"
            className="absolute bottom-0 left-0 h-[250px]"
          />
        </div>
        <div className="md:col-span-9 flex md:ml-10  items-center">
          <div>
            <div className="mb-5">
              <img src="/img2/suitcase.svg" />
            </div>
            <p className="font-bold md:text-3xl font-bricolage-grotesque">
              Create a resume for a role
            </p>
            <p className="text-[#64748B] text-xs ">
              3 questions to help us create a tailored resume
            </p>
            <div className="my-5 space-y-6">
              <div className="space-y-3">
                <p className=" font-bricolage-grotesque font-bold text-xl">
                  1. What role are you targeting?
                </p>
                <DefaultInput
                  placeholder={`eg. Product manager`}
                  value={targetCompany}
                  onChange={(newValue) => setTargetCompany(newValue)}
                />
              </div>{" "}
              <div className="space-y-3">
                <p className=" font-bricolage-grotesque font-bold text-xl">
                  2. What company are you targeting?
                </p>
                <div className="space-x-2">
                  <DefaultInput
                    placeholder={`eg. Google`}
                    value={targetRole}
                    onChange={(newValue) => setTargetRole(newValue)}
                  />
                </div>
              </div>{" "}
              <div className="space-y-3">
                <p className=" font-bricolage-grotesque font-bold text-xl">
                  3. Are you a fresher?
                </p>
                <div className="space-x-2">
                  <button
                    className={`py-2 px-5 rounded-3xl border ${
                      isFresher === true
                        ? "bg-blue-500 text-white"
                        : "border-gray-200"
                    }`}
                    onClick={() => handleFresherSelection(true)}
                  >
                    Yes!
                  </button>
                  <button
                    className={`py-2 px-5 rounded-3xl border ${
                      isFresher === false
                        ? "bg-blue-500 text-white"
                        : "border-gray-200"
                    }`}
                    onClick={() => handleFresherSelection(false)}
                  >
                    Nope!
                  </button>
                </div>
              </div>
            </div>

            <div>
              <button className="text-bluePrimary hover:text-white font-semibold rounded-3xl hover:bg-bluePrimary bg-blue-200 w-full p-2 mt-6">
                Next
              </button>
            </div>
            <div className="flex space-x-4 mt-5">
              <button className="text-bluePrimary flex space-x-2 items-center font-semibold text-xs">
                <img src="/img2/arrowback.svg" />
                <p>Back</p>
              </button>
              <Link href="/resumematch">
                <button className="font-medium border border-bluePrimary rounded-2xl py-1 px-6 text-xs text-bluePrimary">
                  Skip
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default role;
