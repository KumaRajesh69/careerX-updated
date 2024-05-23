import React from "react";

function Insights() {
  return (
    <div className="p-5 border rounded-b-2xl">
      <div className="my-2">
        <p className="font-semibold my-1">Insights</p>
        <p className="text-sm text-[#7A7A7A]">Enhance your score :P</p>
      </div>
      <div className="mt-5 space-y-4">
        <div className="flex space-x-2 bg-gray-100 p-3 rounded ">
          <div className="bg-[#00A251] text-xs text-white rounded-xl text-center flex justify-center items-center px-3  ">
            +125
          </div>
          <p>Add LinkedIn details</p>
        </div>
        <div className="flex space-x-2 bg-gray-100 p-3 rounded ">
          <div className="bg-[#00A251] text-xs text-white rounded-xl text-center flex justify-center items-center px-3  ">
            +100
          </div>
          <p>Add highlights</p>
        </div>
        <div className="flex space-x-2 bg-gray-100 p-3 rounded ">
          <div className="bg-[#00A251] text-xs text-white rounded-xl text-center flex justify-center items-center px-3  ">
            +50
          </div>
          <p>Upload your photo</p>
        </div>
      </div>
    </div>
  );
}

export default Insights;
