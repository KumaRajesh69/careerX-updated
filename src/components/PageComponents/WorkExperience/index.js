"use client";
import React, { useEffect, useState } from "react";
import Stepper from "../Highlight/Stepper";
import Accordion from "../Highlight/Accordion";
import PreviewGuid from "../Highlight/PreviewGuide";
import dynamic from "next/dynamic";
import Collapsible from "react-collapsible";
import ExperienceAccordian from "./ExperienceAccordian";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { commonUpdateHandler } from "../../../lib/apis/services/common";
import { USERRESUME } from "@/lib/apis/endpoints";
import { toast } from "react-toastify";

function WorkExperience({ data }) {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(1000);
  const [work, setWork] = useState("");
  const [institute, setInstitute] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [whereFrom, setWhereFrom] = useState("");
  const [whereTo, setWhereTo] = useState("");
  // const [isCurrentlyStudying, setIsCurrentlyStudying] = useState(false);
  const [error, setError] = useState("");
  const [errorText, setErrorText] = useState("");
  const [experienceList, setExperienceList] = useState([]);
  const [saveLoading, setSaveLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);
  const router = useRouter();

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleAccordion = (index) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  const validateForm = () => {
    if (!work.trim()) {
      setError("work");
      setErrorText("Please enter your work experience.");
      return false;
    } else if (!institute.trim()) {
      setError("institute");
      setErrorText("Please enter your institute.");
      return false;
    } else if (!city.trim()) {
      setError("city");
      setErrorText("Please enter your city.");
      return false;
    } else if (!country.trim()) {
      setError("country");
      setErrorText("Please enter your country.");
      return false;
    } else {
      setError("");
      setErrorText("");
    }
    return true;
  };

  useEffect(() => {
    const storedId = localStorage.getItem("_id");
    // Use the storedId value as needed
    // console.log("Stored _id:", storedId);
    const storedFormData = localStorage.getItem("formData");
    // console.log("----------------------", storedFormData);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const storedId = localStorage.getItem("_id");
      const storedFormData = localStorage.getItem("formData");

      // console.log("Stored _id:", storedId);

      if (!storedId) {
        console.error("Error: _id not found in local storage");
        return;
      }

      // console.log("Stored form data:", storedFormData);

      const updatedExperience = {
        jobTitle: work,
        employer: institute,
        city,
        country,
        startDate: whereFrom,
        endDate: whereTo,
        experienceType: selectedOption,
        description,
      };

      // console.log("Updated experience:", updatedExperience);

      try {
        const parsedFormData = JSON.parse(storedFormData);

        const response2 = await commonUpdateHandler(
          `${USERRESUME}/${storedId}`,
          {
            experience: [updatedExperience],
            ...parsedFormData,
            template: "65f5869675b548d4a6ecfbc8",
          },
          setSaveLoading
        );
        console.log("submit");

         localStorage.setItem(
           "experienceList",
           JSON.stringify(updatedExperience)
         );

        console.log("Response from Axios request:", response2);
        toast.success("Work experience is saved successfully.");
        router.push("/education");
      } catch (error) {
        console.error("Error updating experience:", error);
      }
    }
  };

  // console.log("---------->", handleSubmit);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     router.push("/education");
  //   }
  // };

  return (
    <div>
      <div className="grid md:grid-cols-12 ">
        <div className="md:col-span-7">
          <div className="md:w-[90%] mx-auto mt-5">
            <div className="hidden md:block">
              <Stepper
                steps={[
                  { name: "Contact", active: true, href: "/" },
                  {
                    name: "Experience",
                    active: true,
                    href: "/workexperience",
                  },
                  { name: "Education", active: false, href: "/education" },
                  { name: "Skills", active: false, href: "/skills" },
                  { name: "Extras", active: false, href: "/highlights" },
                  { name: "Summary", active: false, href: "/summary" },
                ]}
              />
            </div>
            <div className="flex justify-between  my-8 px-1">
              <div className="">
                <p className="font-bold md:text-3xl font-bricolage-grotesque">
                  Tell us about your experience
                </p>
              </div>
              <div className="hidden md:block">
                <div className=" flex items-start  cursor-pointer">
                  <img src="/img2/tips.svg" className="mt-1 mr-1" />
                  <p className="text-[#305EFF] font-semibold text-base">Tips</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              {experienceList.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  title={item?.work}
                  desc={item.desc}
                  img={item.img}
                  isOpen={openAccordionIndex === index}
                  toggleAccordion={toggleAccordion}
                  component={
                    <ExperienceAccordian
                      item={item}
                      setWork={setWork}
                      setInstitute={setInstitute}
                      setCity={setCity}
                      setCountry={setCountry}
                      setDescription={setDescription}
                      setWhereFrom={setWhereFrom}
                      setWhereTo={setWhereTo}
                      setExperienceList={setExperienceList}
                      work={work}
                      institute={institute}
                      city={city}
                      country={country}
                      description={description}
                      whereFrom={whereFrom}
                      whereTo={whereTo}
                      experienceList={experienceList}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      handleRadioChange={handleRadioChange}
                      error={error}
                      errorText={errorText}
                      // handleSubmit={handleSubmit}
                    />
                  }
                />
              ))}

              <AccordionItem
                index={1000}
                title={`Experience `}
                desc={""}
                img={""}
                isOpen={openAccordionIndex === 1000}
                toggleAccordion={toggleAccordion}
                component={
                  <ExperienceAccordian
                    setWork={setWork}
                    setInstitute={setInstitute}
                    setCity={setCity}
                    setCountry={setCountry}
                    setDescription={setDescription}
                    setWhereFrom={setWhereFrom}
                    setWhereTo={setWhereTo}
                    setExperienceList={setExperienceList}
                    work={work}
                    institute={institute}
                    city={city}
                    country={country}
                    description={description}
                    whereFrom={whereFrom}
                    whereTo={whereTo}
                    experienceList={experienceList}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    handleRadioChange={handleRadioChange}
                    error={error}
                    errorText={errorText}
                  />
                }
              />
            </div>
            <div className="grid md:grid-cols-2 my-5 gap-5">
              <div>
                <button
                  type="button"
                  className="text-[#2950DA] font-semibold text-base  text-center w-full p-2 rounded-3xl border-solid border border-[#305EFF]"
                >
                  Preview
                </button>
              </div>

              <div>
                {/* <Link href="/education"> */}
                <button
                  type="submit"
                  className="bg-[#2950DA] text-white font-semibold text-base  text-center w-full p-2 rounded-3xl border-solid border border-[#305EFF]"
                  onClick={handleSubmit}
                >
                  Go next
                </button>
                {/* </Link> */}
              </div>

              {/* <button>Go next</button> */}
            </div>
          </div>
        </div>
        <div className="md:col-span-5 bg-[#f5f7ff]">
          <div className=" w-full h-screen bg-[#f5f7ff] ">
            <PreviewGuid />
          </div>
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
      className={`py-1 w-full   bg-white border rounded-xl my-2 ${
        isCustomSection ? "text-blue-500" : ""
      }`}
    >
      <div
        className="p-3 md:px-10 space-x-2  flex justify-between items-center cursor-pointer rounded-xl w-full "
        onClick={() => toggleAccordion(index)}
      >
        <div className="flex space-x-2">
          <img src={img} />
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
        <div className="bg-white md:px-10 pb-5 text-xs md:text-base rounded-b-xl text-[#4175ab] ">
          {component}
        </div>
      </Collapsible>
    </div>
  );
}

export default dynamic(() => Promise.resolve(WorkExperience), {
  ssr: false,
});
