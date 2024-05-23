import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  name: string;
  companyImage: string;
  ratings: number;
};

const HiredUserElement = ({
  image,
  title,
  name,
  ratings,
  companyImage,
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="w-36 h-36 rounded-full"
      />
      <div className="text-xl font-medium text-bluePrimary">{title}</div>
      <div className="text-sm font-medium text-bluePrimary">{name}</div>
      <div className="flex space-x-2 mt-2 items-center mx-auto w-max">
        <div className="text-sm mt-px font-medium text-bluePrimary whitespace-nowrap">
          Hired By
        </div>
        <Image
          src={companyImage}
          alt={title}
          width={100}
          height={40}
          className="h-4 w-auto "
        />
      </div>
    </div>
  );
};

export default HiredUserElement;
