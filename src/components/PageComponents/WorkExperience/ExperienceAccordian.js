"use client";
import React, { useEffect, useState } from "react";
import SecondaryInput from "../../Common/Inputs/ResumeCreation/SecondaryInput";
import QuillBox from "../Highlight/QuillBox";
import DefaultAddButton from "../../Common/CommonComponents/DefaultAddButton";
import dynamic from "next/dynamic";
import { Datepicker } from "flowbite-react";
import "react-datepicker/dist/react-datepicker.css";

function ExperienceAccordian({
  work,
  institute,
  city,
  country,
  description,
  whereFrom,
  whereTo,
  experienceList,
  setWork,
  setInstitute,
  setCity,
  setCountry,
  setDescription,
  setWhereFrom,
  setWhereTo,
  setExperienceList,
  selectedOption,
  setSelectedOption,
  handleRadioChange,
  error,
  errorText,
  // handleSubmit,
  //   setError,
  //  setErrorText,
}) {
  const handleAdd = (e) => {
    e.preventDefault();
    // Add the current experience to the list
    const newExperience = {
      id: Date.now(),
      work: work,
      institute: institute,
      city: city,
      country: country,
      description: description,
    };
    setExperienceList([...experienceList, newExperience]);
    // Clear the input fields
    setWork("");
    setInstitute("");
    setCity("");
    setCountry("");
    setDescription("");
  };

  useEffect(() => {
    const storedExperience = JSON.parse(localStorage.getItem("experienceList"));
    if (storedExperience) {
      // Set component state with stored experience data
      setWork(storedExperience.jobTitle || "");
      setInstitute(storedExperience.employer || "");
      setCity(storedExperience.city || "");
      setCountry(storedExperience.country || "");
      setDescription(storedExperience.description || "");
      setWhereFrom(storedExperience.startDate || "");
      setWhereTo(storedExperience.endDate || "");
      setSelectedOption(storedExperience.experienceType || 1);
    }
  }, []);
  const deletePaper = (id) => {
    const updatedList = experienceList.filter((work) => work.id !== id);
    setExperienceList(updatedList);
  };
  const renderDatepickerDropdown = (datepicker) => {
    return createPortal(datepicker, document.body);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <div>
      <form onSubmit={handleAdd}>
        {/* <div>
          <button className="delete-button">
            <TrashIcon className="h-6 w-6 text-red-600" />
          </button>
        </div> */}
        <div className="flex space-x-3 my-5">
          <div className="flex items-center ">
            <input
              type="radio"
              id="default-radio-1"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              value={selectedOption}
              onChange={() => setSelectedOption(1)}
              checked={selectedOption === 1}
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-normal text-[#40566D] "
            >
              Full-time
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="default-radio-2"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              value={selectedOption}
              onChange={() => setSelectedOption(2)}
              checked={selectedOption === 2}
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-sm font-normal text-[#40566D] "
            >
              Part-time
            </label>
          </div>

          <div className="flex items-center ">
            <input
              type="radio"
              id="default-radio-3"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              value={selectedOption}
              onChange={() => setSelectedOption(3)}
              checked={selectedOption === 3}
            />
            <label
              htmlFor="default-radio-3"
              className="ms-2 text-sm font-normal text-[#40566D] "
            >
              Internship
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <SecondaryInput
            placeholder="Ux designer"
            type="text"
            value={work}
            onChange={setWork}
            error={error === "work"} // Check if the error matches the field name
            errorText={error === "work" && errorText} // Show error text only if error matches field name
          />{" "}
          <SecondaryInput
            placeholder="Company"
            type="text"
            value={institute}
            onChange={setInstitute}
            // error={error}
            // errorText={errorText}
            // errorText={errorText}
            error={error === "institute"} // Check if the error matches the field name
            errorText={error === "institute" && errorText} // Show error text only if error matches field name
          />{" "}
          <SecondaryInput
            placeholder="City"
            type="text"
            value={city}
            onChange={setCity}
          />{" "}
          <SecondaryInput
            placeholder="Country"
            type="text"
            value={country}
            onChange={setCountry}
          />
          <div className="grid grid-cols-2 gap-2">
            <div>
              {/* <SecondaryInput
                placeholder="From"
                type="date"
                value={whereFrom}
                onChange={setWhereFrom}
              /> */}
              <Datepicker />
              {/* <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/DD/YYYY"
                placeholder="From"
                // selected={startDate}
                // onChange={(date) => setStartDate(date)}
              /> */}
            </div>
            <div>
              {/* <SecondaryInput
                placeholder="To"
                type="date"
                value={whereTo}
                onChange={setWhereTo}
              /> */}
              <Datepicker />

              {/* <div className="relative">
                <Datepicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="To"
                  className="datepicker-dropdown"
                />
              </div> */}
            </div>
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
        <div className="mt-8">
          <p className="text-[#5A607F] mb-1">Describe your work</p>
          <QuillBox value={description} onChange={setDescription} />
        </div>
        <DefaultAddButton type="submit" buttonName="Add Work Experience" />
      </form>
      {/* <div className="mt-8">
        {experienceList.map((experience) => (
          <div
            key={experience.id}
            className="flex items-center justify-between mb-4"
          >
            <div>
              <h4 className="text-lg font-semibold">{experience.work}</h4>
              <p className="text-sm">{experience.institute}</p>
              <p className="text-sm">
                {experience.city}, {experience.country}
              </p>
              <p className="text-sm">{experience.description}</p>
            </div>
            <button
              onClick={() => deletePaper(experience.id)}
              className="flex items-center justify-center p-2 bg-white rounded-full hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <TrashIcon className="h-6 w-6 text-red-600" />
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default dynamic(() => Promise.resolve(ExperienceAccordian), {
  ssr: false,
});
