import React from "react";

type Props = {
  title: string;
};

const SectionHeading = ({ title }: Props) => {
  return (
    <div className="select-none text-2xl lg:text-[50px] text-bluePrimary font-medium text-center w-11/12 lg:max-w-[60vw] mx-auto lg:leading-[59px]">
      {title}
    </div>
  );
};

export default SectionHeading;
