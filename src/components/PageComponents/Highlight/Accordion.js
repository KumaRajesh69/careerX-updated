import React, { useState } from "react";
import Collapsible from "react-collapsible";
import InputMessageBox from "./InputMessageBox";
import App from "./App";
import QuillBox from "./QuillBox";
import dynamic from "next/dynamic";
import Publication from "./Publication";
import Certificates from "./Certificates";
import Awards from "./Awards";
import SocialWork from "./SocialWork";
import Languages from "./Languages";
import CustomSection from "./CustomSection";

function Accordion({ data }) {
  const [visibleItems, setVisibleItems] = useState();
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  // const showMore = () => {
  //   setVisibleItems(visibleItems + 3);
  // };

  return (
    <div className="mt-5">
      <div className="bg-transparent  flex flex-col justify-center items-center space-y-5">
        <div className=" w-full ">
          {data.slice(0, visibleItems).map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={item.title}
              desc={item.desc}
              img={item.img}
              isOpen={openAccordionIndex === index}
              toggleAccordion={toggleAccordion}
              component={item.component}
            />
          ))}
          {/* {visibleItems < data.length && (
            <div className="flex justify-center">
              <button
                className="mt-4 text-blue-500 font-normal text-base px-4 py-2 rounded"
                onClick={showMore}
              >
                See More
              </button>
            </div>
          )} */}
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
}) {
  const isCustomSection = title === "Add custom section";

  return (
    <div
      className={` w-full   bg-white border rounded-2xl my-4 ${
        isCustomSection ? "text-blue-500" : ""
      }`}
    >
      <div
        className="py-5 md:px-10 space-x-2  flex justify-between items-center cursor-pointer rounded-2xl w-full "
        onClick={() => toggleAccordion(index)}
      >
        <div className="flex space-x-5">
          <div className="flex justify-center items-center">
            <img src={img} className="h-5 w-5" />
          </div>
          <p className="md:text-lg text-base font-medium  ">{title}</p>
        </div>
        <div className="text-2xl">
          {isOpen ? (
            <img src="/img2/uparow.svg" />
          ) : (
            <img src="/img2/Plus.svg" />
          )}
        </div>
      </div>
      <Collapsible open={isOpen}>
        <div className="bg-white md:px-10 pb-5 text-xs md:text-base rounded-b-xl text-[#4175ab]">
          {component}
        </div>
      </Collapsible>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Accordion), {
  ssr: false,
});
