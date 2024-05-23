"use client";
import React, { useState } from "react";
import DashboardCtaButton from "../../../Common/DashboardCtaButton";
import RoleDialog from "../../../Dialogs/RoleDialog";
import { useRouter } from "next/navigation";

const ctaButtonsData = [
  {
    title: "Role Based Resume",
    description:
      "Our AI Resume Writer will create a tailored resume for the job role you want to apply for.",
    image: "/Resume.svg",
  },
  {
    title: "Job Tailored Resumes",
    description:
      "Tailor your resume as per job description & increase chances of shortlisting.",
    image: "/upload.svg",
  },
  {
    title: "Evaluate Your Resume",
    description: "Assess your resume score and enhance it with our tips.",
    image: "/speedometer.svg",
  },
  {
    title: "Evaluate Job Match",
    description:
      "Check resume & job match score, refine with our tips to enhance shortlisting chances.",
    image: "/docSearch.svg",
  },
];

const CtaButtons = () => {
  const [open, setOpen] = useState();
  const router = useRouter();

  const roleHandler = (button) => {
    router.push("/contact");
    // const { title } = button;
    // if (title === "Role Based Resume") {
    //   setOpen(true);
    // }
  };

  return (
    <div className="container grid md:grid-cols-4 gap-4 md:gap-10">
      {ctaButtonsData?.map((button, index) => (
        <DashboardCtaButton
          key={index}
          title={button.title}
          description={button.description}
          image={button.image}
          callback={() => roleHandler(button)}
        />
      ))}
      {open && <RoleDialog isOpen={open} setIsOpen={setOpen} />}
    </div>
  );
};

export default CtaButtons;
