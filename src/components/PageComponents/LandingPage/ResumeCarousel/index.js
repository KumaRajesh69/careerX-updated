"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1531913223931-b0d3198229ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683531060429-9a47d55ddf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdW1lfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1531913223931-b0d3198229ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdW1lfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1555601568-c9e6f328489b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdW1lfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1616628188467-8fb29f49bbe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1510442650500-93217e634e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1531913223931-b0d3198229ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683531060429-9a47d55ddf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdW1lfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1531913223931-b0d3198229ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdW1lfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1555601568-c9e6f328489b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdW1lfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1616628188467-8fb29f49bbe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1510442650500-93217e634e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1531913223931-b0d3198229ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683531060429-9a47d55ddf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdW1lfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1531913223931-b0d3198229ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdW1lfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1555601568-c9e6f328489b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdW1lfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1616628188467-8fb29f49bbe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1510442650500-93217e634e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fENWfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHwxfDB8fHww",
];

const ResumeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [swiper, setSwiper] = useState(null);

  const handleSliderChange = (event) => {
    if (swiper) {
      swiper.slideTo(event.target.value);
    }
  };

  const handleSliderChangeLibrary = (event) => {
    if (swiper) {
      console.log(event)
      swiper.slideTo(event);
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto my-10">
        <div className="flex justify-around mb-2">
          <div className="flex space-x-2 text-bluePrimary  ">
            <Image
              src={"/textalign-left.svg"}
              width={"100"}
              height={"100"}
              alt=""
              className="hidden md:block h-6 w-6"
            />
            <div className="text-xs md:text-sm">Classic</div>
          </div>
          <div className="flex space-x-2 text-bluePrimary  justify-center ">
            <Image
              src={"/briefcase.svg"}
              width={"100"}
              height={"100"}
              alt=""
              className="hidden md:block h-6 w-6"
            />
            <div className="text-xs md:text-sm">Professional</div>
          </div>
          <div className="flex space-x-2 text-bluePrimary  justify-center">
            <Image
              src={"/flash.svg"}
              width={"100"}
              height={"100"}
              alt=""
              className="hidden md:block h-6 w-6"
            />
            <div className="text-xs md:text-sm">Creative</div>
          </div>
          <div className="flex space-x-2 text-bluePrimary  justify-end">
            <Image
              src={"/magicpen.svg"}
              width={"100"}
              height={"100"}
              alt=""
              className="hidden md:block h-6 w-6"
            />
            <div className="text-xs md:text-sm">Mordern</div>
          </div>
        </div>
        {/* <input
          type="range"
          min="0"
          max={images.length - 1}
          step="1"
          value={swiper ? swiper.activeIndex : 0}
          onChange={handleSliderChange}
          className={"w-10/12 mx-auto slider "}
        /> */}
        <div className="custom-range-slider">
          <InputRange
            maxValue={images.length - 1}
            minValue={0}
            value={swiper ? swiper.activeIndex : 0}
            onChange={handleSliderChangeLibrary}
          />
        </div>
      </div>
      <div className={"carouselContainer"}>
        <Swiper
          slidesPerView={5}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
            },
            "@0.75": {
              slidesPerView: 2,
            },
            "@1.00": {
              slidesPerView: 3,
            },
            "@1.50": {
              slidesPerView: 4,
            },
          }}
          centeredSlides={true}
          navigation
          loop
          onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
          modules={[EffectCoverflow, Pagination]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,
          }}
          effect={"coverflow"}
          className="resumeSwiper"
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={
                    "carouselItem  bg-[#D2E2F9] flex flex-col justify-between "
                  }
                >
                  <div
                    className={`text-center text-bluePrimary text-lg font-semibold h-20 mt-10 ${
                      isActive ? "" : "pt-10"
                    }`}
                  >
                    Resume no. {index + 1}
                  </div>
                  <div className="group relative">
                    <Image
                      width={"4000"}
                      height={"5000"}
                      src={"/resume.png"}
                      alt={`Image ${index + 1}`}
                      className={`rounded-t-3xl h-[410px] w-[451px]  ${
                        isActive
                          ? "scale-[1.20]  rounded-3xl group-hover:cursor-pointer"
                          : " rounded-t-3xl"
                      }`}
                    />
                    {
                      <button
                        className={`${
                          isActive
                            ? "group-hover:block hidden absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                            : "hidden"
                        }  px-6 md:py-4 py-2 w-max  text-white bg-bluePrimary rounded-2xl hover:bg-lightBlue transition duration-100  `}
                      >
                        Use This Template
                      </button>
                    }
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ResumeCarousel;
