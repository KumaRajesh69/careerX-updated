import React from "react";

const Template1 = ({ name }) => {
  return (
    <div className="w-full p-5 border rounded-xl shadow">
      <div className=" text-center p-3 rounded-xl bg-green-600 text-white font-bold w-1/2 text-2xl ">
        {name}
      </div>
    </div>
  );
};

export default Template1;
