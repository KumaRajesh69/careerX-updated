"use client";
import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const TestComponent = (props) => {
  const [tab, setTab] = useState(1);
  const containerRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const cardHeight = window.innerHeight;
      // Calculate the index of the active card based on scroll position
      const newIndex = Math.floor(scrollPosition / cardHeight);

      // Update the active card index if it has changed
      if (newIndex !== activeCardIndex) {
        setActiveCardIndex(newIndex);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeCardIndex]); // Re-run the effect when the activeCardIndex changes

  const cards = [
    {
      title: "Choose a Free Resume Template",
      description:
        "Getting that dream job can seem like an impossible task. We are here to change that Getting that dream job can seem like an impossible task. We’re here to change that.",
    },
    {
      title: "Choose a Free Resume Template",
      description:
        "Getting that dream job can seem like an impossible task. We are here to change that Getting that dream job can seem like an impossible task. We’re here to change that.",
    },
    {
      title: "Choose a Free Resume Template",
      description:
        "Getting that dream job can seem like an impossible task. We are here to change that Getting that dream job can seem like an impossible task. We’re here to change that.",
    },
  ];

  return (
    <ParallaxProvider>
      <div className="container mt-20" ref={containerRef}>
        <SectionHeading title={"Create Resume in Simple 3 Steps"} />
        <div className="select-none md:px-8 grid md:grid-cols-10 md:gap-10 mt-12">
          <div className="col-span-5 space-y-7">
            {cards.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveCardIndex(index)}
                className={`${
                  index === activeCardIndex
                    ? "text-lightBlue bg-white "
                    : "text-bluePrimary bg-[#77A9EE] bg-opacity-20"
                }  shadow-xl p-6 rounded-xl cursor-pointer`}
              >
                <div className="text-[26px] font-medium">
                  Choose a Free Resume Template
                </div>
                {index === activeCardIndex && (
                  <div className="text-xl mt-2 text-gray-500  transform translate duration-500">
                    Getting that dream job can seem like an impossible task.
                    We’re here to change that Getting that dream job can seem
                    like an impossible task. We’re here to change that. .
                  </div>
                )}
              </div>
            ))}
          </div>
          <Parallax translateX={["-100px", "200px"]}>
            <div className="col-span-5">
              <Image
                width={"1200"}
                height={"1200"}
                alt=""
                src={
                  tab === 1
                    ? "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdW1lfGVufDB8fDB8fHww"
                    : tab === 2
                    ? "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdW1lfGVufDB8fDB8fHww"
                    : "https://images.unsplash.com/photo-1504691342899-4d92b50853e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D"
                }
                className="w-full rounded-xl "
              />
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default TestComponent;
