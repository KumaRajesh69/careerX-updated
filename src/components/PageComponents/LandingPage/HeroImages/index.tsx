import Image from "next/image";
import React from "react";

const HeroImages = () => {
  return (
    <div className="mt-40 h-[400px] w-full bg-gray-200 relative">
      <div className="container flex justify-center">
        <Image
          src={"/heroImageBig.png"}
          alt={""}
          width={1300}
          height={500}
          className="w-7/12 h-[400px] absolute -top-20 rounded-xl mx-auto"
        />
      </div>
    </div>
  );
};

export default HeroImages;
