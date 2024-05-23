import React, { useState } from "react";
import SecondaryInput from "../inputs/DefaultInput/Secondary";
import QuillBox from "../Highlight/QuillBox";
import DefaultAddButton from "../CommonComponents/DefaultAddButton";

function ContentJourneyAccordian() {
  const [couse, setCouse] = useState("");
  const [institute, setInstitute] = useState("");
  const [field, setField] = useState("");
  const [grade, setGrade] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [whereFrom, setWhereFrom] = useState("");
  const [whereTo, setWhereTo] = useState("");
  const [online, setOnline] = useState("");
  const [currentStudy, setCurrentStudy] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [description, setDescription] = useState("");

  const [publicList, setPublicList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current publication to the list
    const newPublication = {
      id: Date.now(),
      paper: paper,
      published: published,
      link: link,
      publishedDate: publishedDate,
      description: description,
    };
    setPublicList([...publicList, newPublication]);
    // Clear the input fields
    setPaper("");
    setPublished("");
    setLink("");
    setPublishedDate("");
    setDescription("");
  };

  const deletePaper = (id) => {
    const updatedList = publicList.filter((paper) => paper.id !== id);
    setPublicList(updatedList);
  };

  return (
    <div>
      <div>
        {publicList?.map((publication, index) => (
          <div className="flex justify-between pb-3">
            {publication?.paper}
            <div>
              <img
                src="/img2/dlt.svg"
                alt="Delete"
                onClick={() => deletePaper(publication.id)}
              />
            </div>
            {/* <Accordion /> */}
          </div>

          //   <PublicationItemAccordian
          //     item ={publication}
          // />>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3 my-5">
          <div class="flex items-center ">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
            />
            <label className="ms-2 text-sm  text-[#40566D] ">Full time</label>
          </div>{" "}
          <div class="flex items-center ">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
            />
            <label className="ms-2 text-sm  text-[#40566D] ">Part time</label>
          </div>{" "}
          <div class="flex items-center ">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
            />
            <label className="ms-2 text-sm  text-[#40566D] ">Internship</label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <SecondaryInput
            placeholder="B.tech"
            type="text"
            value={couse}
            onChange={setCouse}
          />{" "}
          <SecondaryInput
            placeholder="Institute name"
            type="text"
            value={institute}
            onChange={setInstitute}
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
            <SecondaryInput
              placeholder="From"
              type="text"
              value={whereFrom}
              onChange={setWhereFrom}
            />
            <SecondaryInput
              placeholder="To"
              type="text"
              value={whereTo}
              onChange={setWhereTo}
            />
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

export default ContentJourneyAccordian;
