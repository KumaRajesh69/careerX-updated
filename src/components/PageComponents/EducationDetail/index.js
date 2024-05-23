"use client";
import React, { useEffect, useState } from "react";
import Stepper from "../Highlight/Stepper";
import PreviewGuid from "../Highlight/PreviewGuide";
import dynamic from "next/dynamic";
import EducationOfAccordian from "./EducationOfAccordian";
import Collapsible from "react-collapsible";
import { commonUpdateHandler } from "@/lib/apis/services/common";
import { USERRESUME } from "@/lib/apis/endpoints";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function EducationDetails({ data }) {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(1000);
  const [couse, setCouse] = useState("");
  const [institute, setInstitute] = useState("");
  const [field, setField] = useState("");
  const [grade, setGrade] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [whereFrom, setWhereFrom] = useState("");
  const [whereTo, setWhereTo] = useState("");
  const [saveLoading, setSaveLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [errorText, setErrorText] = useState("");
  const router = useRouter();
  const [educationList, setEducationList] = useState([]);
  const [educationDetailsList, setEducationDetailsList] = useState([]);

  const toggleAccordion = (index) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  const validateForm = () => {
    if (!couse.trim()) {
      setError("couse");
      setErrorText("Please enter your course.");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const storedId = localStorage.getItem("_id");
      const storedFormData = localStorage.getItem("formData");
      console.log(storedFormData);
      if (!storedId) {
        console.log("Error: _id not found in local storage");
        return;
      }
      console.log("education submit");

      // Parse the stored form data into a JavaScript object
      const parsedFormData = storedFormData ? JSON.parse(storedFormData) : {};

      console.log("Parsed form data:", parsedFormData);

      const updatedEducation = {
        degree: couse,
        college: institute,
        marks: grade,
        city,
        country,
        startDate: whereFrom,
        endDate: whereTo,
        description,
        // field,
      };

      try {
        // Update the Education list with the new skill
        const updatedEducationList = [
          ...(parsedFormData.educationDetailsList || []),
          updatedEducation,
        ];

        console.log("Updated Education list:", updatedEducationList);

        // Update the parsedFormData with the new Education list
        const updatedFormData = {
          ...parsedFormData,
          educationDetailsList: updatedEducationList,
        };

        console.log("Updated form data:", updatedFormData);

        // Update localStorage with the updated form data
        localStorage.setItem("formData", JSON.stringify(updatedFormData));

        const response2 = await commonUpdateHandler(
          `${USERRESUME}/${storedId}`,
          {
            education: updatedEducationList,
            ...parsedFormData, // Include previous form data
            template: "65f5869675b548d4a6ecfbc8",
          },
          setSaveLoading
        );
        console.log("submit");

        console.log("Response from Axios request:", response2);
        toast.success("Education is saved successfully.");

        localStorage.setItem(
          "updatedEducation",
          JSON.stringify(updatedEducation)
        );

        router.push("/skills");
      } catch (error) {
        console.error("Error updating education:", error);
      }
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-12 ">
        <div className="md:col-span-7">
          <div className="md:w-[90%] mx-auto  mt-5">
            <div className="hidden md:block">
              <Stepper
                steps={[
                  { name: "Contact", active: true, href: "/" },
                  {
                    name: "Experience",
                    active: true,
                    href: "/workexperience",
                  },
                  {
                    name: "Education",
                    active: true,
                    href: "/education",
                  },
                  { name: "Skills", active: false, href: "/skills" },
                  { name: "Extras", active: false, href: "/highlights" },
                  { name: "Summary", active: false, href: "/summary" },
                ]}
              />
            </div>
            <div className="flex justify-between  my-8 px-1">
              <div className="">
                <p className="font-bold md:text-3xl font-bricolage-grotesque">
                  Please enter education details
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
              {educationList.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  title={item?.couse}
                  desc={item.desc}
                  img={item.img}
                  isOpen={openAccordionIndex === index}
                  toggleAccordion={toggleAccordion}
                  component={
                    <EducationOfAccordian
                      item={item}
                      setCouse={setCouse}
                      setField={setField}
                      setGrade={setGrade}
                      setInstitute={setInstitute}
                      setCity={setCity}
                      setCountry={setCountry}
                      setDescription={setDescription}
                      setWhereFrom={setWhereFrom}
                      setWhereTo={setWhereTo}
                      setEducationList={setEducationList}
                      couse={couse}
                      institute={institute}
                      city={city}
                      country={country}
                      description={description}
                      whereFrom={whereFrom}
                      whereTo={whereTo}
                      educationList={educationList}
                      field={field}
                      grade={grade}
                      handleSubmit={handleSubmit}
                      error={error}
                      errorText={errorText}
                    />
                  }
                />
              ))}

              <AccordionItem
                index={1000}
                title={`Education `}
                desc={""}
                img={""}
                isOpen={openAccordionIndex === 1000}
                toggleAccordion={toggleAccordion}
                component={
                  <EducationOfAccordian
                    setCouse={setCouse}
                    setField={setField}
                    setGrade={setGrade}
                    setInstitute={setInstitute}
                    setCity={setCity}
                    setCountry={setCountry}
                    setDescription={setDescription}
                    setWhereFrom={setWhereFrom}
                    setWhereTo={setWhereTo}
                    setEducationList={setEducationList}
                    couse={couse}
                    institute={institute}
                    city={city}
                    country={country}
                    description={description}
                    whereFrom={whereFrom}
                    whereTo={whereTo}
                    educationList={educationList}
                    field={field}
                    grade={grade}
                    error={error}
                    errorText={errorText}
                    handleSubmit={handleSubmit}
                  />
                }
              />
            </div>
            <div className="grid md:grid-cols-2 my-5 gap-5">
              <div>
                <button
                  type="button"
                  className="text-bluePrimary font-semibold text-base  text-center w-full p-2 rounded-3xl border-solid border border-bluePrimary"
                >
                  Preview
                </button>
              </div>

              <div>
                {/* <Link href="/skills"> */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-bluePrimary text-white font-semibold text-base  text-center w-full p-2 rounded-3xl border-solid border border-bluePrimary"
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

export default dynamic(() => Promise.resolve(EducationDetails), {
  ssr: false,
});
