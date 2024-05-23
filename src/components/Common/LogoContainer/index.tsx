import Image from "next/image";
import React from "react";

const LogoContainer = () => {
  return (
    <div className="flex flex-col space-y-7 -mt-6">
      <Image
        src={"/linkedInLogo.svg"}
        alt={""}
        width={100}
        height={100}
        className="h-5 hover:scale-125 cursor-pointer "
      />
      <Image
        src={"/fbLogo.svg"}
        alt={""}
        width={100}
        height={100}
        className="h-5 hover:scale-125 cursor-pointer"
      />
      <Image
        src={"/instaLogo.svg"}
        alt={""}
        width={100}
        height={100}
        className="h-5 hover:scale-125 cursor-pointer"
      />
      <Image
        src={"/twitterLogo.svg"}
        alt={""}
        width={100}
        height={100}
        className="h-5 hover:scale-125 cursor-pointer"
      />
    </div>
  );
};

export default LogoContainer;
