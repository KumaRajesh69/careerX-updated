import React from "react";
import DefaultInput from "../../Common/Inputs/ResumeCreation/DefaultInput";
import DefaultAddButton from "../../Common/CommonComponents/DefaultAddButton";

function Hobbies() {
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <img src="/img2/dlt.svg" className="h-[15px]" />
        <DefaultInput placeholder="I love to paint" />
      </div>
      <DefaultAddButton buttonName="Add another hobby" />
    </div>
  );
}

export default Hobbies;
