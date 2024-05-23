import React, { useEffect, useState } from "react";
import SecondaryInput from "../../Common/Inputs/ResumeCreation/SecondaryInput";
import QuillBox from "../Highlight/QuillBox";
import DefaultAddButton from "../../Common/CommonComponents/DefaultAddButton";
import { Datepicker } from "flowbite-react";

function EducationOfAccordian({
  couse,
  institute,
  field,
  grade,
  city,
  country,
  whereFrom,
  whereTo,
  setCouse,
  setInstitute,
  setField,
  setGrade,
  setCity,
  setCountry,
  setWhereFrom,
  setWhereTo,
  educationList,
  setEducationList,
  description,
  setDescription,
  handleSubmit,
  error,
  errorText,
}) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add the current publication to the list
  //   const newEducation = {
  //     id: Date.now(),
  //     couse: couse,
  //     institute: institute,
  //     field: field,
  //     grade: grade,
  //     city: city,
  //     country: country,
  //   };
  //   setEducationList([...educationList, newEducation]);
  //   // Clear the input fields
  //   setCouse("");
  //   setInstitute("");
  //   setField("");
  //   setGrade("");
  //   setCity("");
  //   setCountry("");
  // };

  const deletePaper = (id) => {
    const updatedList = educationList.filter((couse) => couse.id !== id);
    setEducationList(updatedList);
  };

  useEffect(() => {
    // Retrieve stored education data from localStorage
    const storedEducation = JSON.parse(
      localStorage.getItem("updatedEducation")
    );
    if (storedEducation) {
      // Set component state with stored education data
      setCouse(storedEducation.degree || "");
      setInstitute(storedEducation.college || "");
      // setInstitute(storedEducation.field || "");
      setGrade(storedEducation.marks || "");
      setCity(storedEducation.city || "");
      setCountry(storedEducation.country || "");
      setDescription(storedEducation.description || "");
      setWhereFrom(storedEducation.startDate || "");
      setWhereTo(storedEducation.endDate || "");
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <SecondaryInput
            placeholder="B.tech"
            type="text"
            value={couse}
            onChange={setCouse}
            error={error === "couse"}
            errorText={error === "couse" && errorText}
          />{" "}
          <SecondaryInput
            placeholder="Institute name"
            type="text"
            value={institute}
            onChange={setInstitute}
            error={error === "institute"}
            errorText={error === "institute" && errorText}
          />{" "}
          <SecondaryInput
            placeholder="Field of study"
            type="text"
            value={field}
            onChange={setField}
          />{" "}
          <SecondaryInput
            placeholder="Grade / CGPA"
            type="text"
            value={grade}
            onChange={setGrade}
          />{" "}
          <SecondaryInput
            placeholder="City"
            type="text"
            value={city}
            onChange={setCity}
          />{" "}
          <div className="grid grid-cols-2 gap-5 ">
            <SecondaryInput
              placeholder="Country"
              type="text"
              value={country}
              onChange={setCountry}
            />
            <div class="flex items-center ">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
              />
              <label className="ms-2 text-sm  text-[#40566D] ">
                It was online
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            {/* <SecondaryInput
              placeholder="From"
              type="date"
              value={whereFrom}
              onChange={setWhereFrom}
            /> */}
            <Datepicker />
            <Datepicker />

            {/* <SecondaryInput
              placeholder="To"
              type="date"
              value={whereTo}
              onChange={setWhereTo}
            /> */}
          </div>
          <div class="flex items-center ">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
            />
            <label className="ms-2 text-sm  text-[#40566D] ">
              Currently studying here
            </label>
          </div>
        </div>
        <div>
          <div class="flex items-center my-5">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
            />
            <label className="ms-2 text-sm  text-[#40566D] ">
              Add description
            </label>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-[#5A607F] mb-1">Description</p>
          <QuillBox value={description} onChange={setDescription} />
        </div>
        <DefaultAddButton type="submit" buttonName="Add Education" />
      </form>
    </div>
  );
}

export default EducationOfAccordian;
