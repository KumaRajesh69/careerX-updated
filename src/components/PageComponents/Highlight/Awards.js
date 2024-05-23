import React, { useState } from "react";
import DefaultInput from "../../Common/Inputs/ResumeCreation/DefaultInput";
import QuillBox from "./QuillBox";
import DefaultAddButton from "../../Common/CommonComponents/DefaultAddButton";

function Awards() {
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [dob, setDob] = useState("");
  const [description, setDescription] = useState("");
  const [award, setAward] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedFormData = localStorage.getItem("formData");
    const parsedFormData = storedFormData ? JSON.parse(storedFormData) : {};
    console.log("----------->>>>>>", parsedFormData);

    setAward(parsedFormData?.awardsAndAchievements || []);

    // Add the current Award to the list
    const newAward = {
      id: Date.now(),
      title: title,
      issuer: issuer,
      dob: dob,
      description: description,
    };
    // setAward([...award, newAward]);
    const updatedAward = [...award, newAward];

    // const CertificateList = [...certificateList, newCertificate];
    setAward(updatedAward);

    localStorage.setItem(
      "formData",
      JSON.stringify({
        ...parsedFormData,
        awardsAndAchievements: updatedAward,
      })
    );

    // Clear the input fields
    setTitle("");
    setIssuer("");
    setDob("");
    setDescription("");
  };

  const deleteAward = (id) => {
    const updatedList = award.filter((award) => award.id !== id);
    setAward(updatedList);
  };
  return (
    <div>
      <div>
        <div className="">
          {award.map((award, index) => (
            <div
              className="flex justify-between py-3 border-t text-black"
              key={award.id}
            >
              <div>{award.title}</div>
              <div>
                <button onClick={() => deleteAward(award.id)}>
                  <img src="/img2/dlt.svg" alt="Delete" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <DefaultInput
              placeholder="Title"
              type="text"
              value={title}
              onChange={setTitle}
            />
            <DefaultInput
              placeholder="Issuer"
              type="text"
              value={issuer}
              onChange={setIssuer}
            />

            <DefaultInput
              placeholder="Date (mm/yyyy)"
              type="dob"
              value={dob}
              onChange={setDob}
            />
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
            <QuillBox />
          </div>
          <DefaultAddButton type="submit" buttonName="Add another paper" />
        </form>
      </div>
    </div>
  );
}

export default Awards;
