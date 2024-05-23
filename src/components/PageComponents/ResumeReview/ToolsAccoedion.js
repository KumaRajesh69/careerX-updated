import React, { useState } from "react";
import Collapsible from "react-collapsible";

import dynamic from "next/dynamic";

function ToolsAccoedion({ data }) {
  //   const [visibleItems, setVisibleItems] = useState();
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  return (
    <div className="">
      <div className="bg-transparent  flex flex-col justify-center items-center space-y-5">
        <div className=" w-full ">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={item.title}
              desc={item.desc}
              img={item.img}
              isOpen={openAccordionIndex === index}
              toggleAccordion={toggleAccordion}
              isLastItem={index === data.length - 1} // Add this prop
              component={item.component}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AccordionItem({
  index,
  title,
  component,
  isOpen,
  toggleAccordion,
  img,
  isLastItem,
}) {
  const isCustomSection = title === "Add custom section";

  return (
    <div
      className={` w-full   bg-white border-b  ${
        isCustomSection ? "text-blue-500" : ""
      } ${isLastItem ? "" : "border-b"} `}
    >
      <div
        className="p-5  space-x-2  flex justify-between items-center cursor-pointer rounded-2xl w-full "
        onClick={() => toggleAccordion(index)}
      >
        <div className="flex space-x-5 ">
          <div className="flex justify-center items-center">
            <img src={img} className="h-5 w-5" />
          </div>
          <p className="md:text-lg text-base font-medium  ">{title}</p>
        </div>
        <div className="text-2xl">
          {isOpen ? (
            <img src="/img2/darrow.svg" />
          ) : (
            <img src="/img2/darrow.svg" />
          )}
        </div>
      </div>
      <Collapsible open={isOpen}>
        <div className="bg-white md:px-5 pb-5 text-xs md:text-base rounded-b-xl text-[#4175ab]">
          {component}
        </div>
      </Collapsible>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ToolsAccoedion), {
  ssr: false,
});
