import React, { useState } from "react";
import DefaultInput from "../../Common/Inputs/ResumeCreation/DefaultInput";
import QuillBox from "./QuillBox";
import DefaultAddButton from "../../Common/CommonComponents/DefaultAddButton";

function Certificates() {
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [link, setLink] = useState("");
  const [dob, setDob] = useState("");
  const [description, setDescription] = useState("");
  const [certificateList, setCertificateList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current certificate to the list

    const storedFormData = localStorage.getItem("formData");
    const parsedFormData = storedFormData ? JSON.parse(storedFormData) : {};

    console.log("----------->>>>>>", parsedFormData);

    setCertificateList(parsedFormData?.certificates || []);

    const newCertificate = {
      id: Date.now(),
      title: title,
      issuer: issuer,
      link: link,
      dob: dob,
      description: description,
    };
    // setCertificateList([...certificateList, newCertificate]);
    const updatedCertificateList = [...certificateList, newCertificate];
    setCertificateList(updatedCertificateList);

    localStorage.setItem(
      "formData",
      JSON.stringify({
        ...parsedFormData,
        certificates: updatedCertificateList,
      })
    );

    console.log(localStorage.getItem("formData"));

    // Clear the input fields
    setTitle("");
    setIssuer("");
    setLink("");
    setDob("");
    setDescription("");
  };

  const deleteCertificate = (id) => {
    const updatedList = certificateList.filter(
      (certificate) => certificate.id !== id
    );
    setCertificateList(updatedList);
  };
  return (
    <div>
      <div>
        <div className="">
          {certificateList.map((certificate, index) => (
            <div
              className="flex justify-between py-3 border-t text-black"
              key={certificate.id}
            >
              <div>{certificate.title}</div>
              <div>
                <button onClick={() => deleteCertificate(certificate.id)}>
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
              placeholder="Link"
              type="link"
              value={link}
              onChange={setLink}
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
            <QuillBox value={description} onChange={setDescription} />
          </div>
          <DefaultAddButton type="submit" buttonName="Add another paper" />
        </form>
      </div>
    </div>
  );
}

export default Certificates;
