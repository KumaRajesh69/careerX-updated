"use client";
import SectionHeading from "@/components/Common/SectionHeading";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HiredUserElement from "@/components/Common/HiredUserElement";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

const HiredUsers = () => {
  return (
    <div className="container mt-28">
      <SectionHeading
        title={"Our Users Are Being Hired at the World's Leading Companies."}
      />
      <div className="flex items-center relative px-10 my-10 ">
        <div className="swiper-button-prev bg-white shadow p-2 rounded-full arrow_icon_shadow">
          <ArrowLeftIcon className="text-bluePrimary" />
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation]}
          centeredSlides={true}
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
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <HiredUserElement
              title={"Software Developer"}
              name={"Surya Shakti"}
              image={"/user.png"}
              companyImage={"/walmart.svg"}
              ratings={4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <HiredUserElement
              title={"Software Developer"}
              name={"Shubham Kanungo"}
              image={"/user.png"}
              companyImage={"/Sprinklr.svg"}
              ratings={4}
            />
          </SwiperSlide>
          {new Array(10).fill(0).map((item, index) => (
            <SwiperSlide key={index}>
              <HiredUserElement
                title={"Software Developer"}
                name={"Anshuman Dash"}
                image={"/user.png"}
                companyImage={"/Linkedin.svg"}
                ratings={4}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next bg-white shadow p-2 rounded-full arrow_icon_shadow">
          <ArrowRightIcon className="text-bluePrimary " />
        </div>
      </div>
    </div>
  );
};

export default HiredUsers;
