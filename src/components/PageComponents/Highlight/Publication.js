import React, { useState } from "react";
import DefaultInput from "../../Common/Inputs/ResumeCreation/DefaultInput";
import QuillBox from "./QuillBox";
import DefaultAddButton from "../../Common/CommonComponents/DefaultAddButton";
import Accordion from "./Accordion";

function Publication() {
  const [paper, setPaper] = useState("");
  const [published, setPublished] = useState("");
  const [link, setLink] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [description, setDescription] = useState("");
  const [publicList, setPublicList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add the current publication to the list
    //  useEffect(() => {}, []);

    const storedFormData = localStorage.getItem("formData");
    const parsedFormData = storedFormData ? JSON.parse(storedFormData) : {};
    console.log("----------->>>>>>", parsedFormData);

    setPublicList(parsedFormData?.publicationAndPaper || []);

    const newPublication = {
      id: Date.now(),
      paper: paper,
      published: published,
      link: link,
      publishedDate: publishedDate,
      description: description,
    };
    // setPublicList([...publicList, newPublication]);

    const updatedPublicList = [...publicList, newPublication];
    setPublicList(updatedPublicList);

    localStorage.setItem(
      "formData",
      JSON.stringify({
        ...parsedFormData,
        publicationAndPaper: updatedPublicList,
      })
    );
    // console.log(localStorage.getItem("formData"));

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
          <div
            key={index}
            className="flex justify-between py-3 border-t text-black"
          >
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
        <div className="grid grid-cols-2 gap-5">
          <DefaultInput
            placeholder="Paper title"
            type="text"
            value={paper}
            onChange={setPaper}
          />{" "}
          <DefaultInput
            placeholder="Published by"
            type="text"
            value={published}
            onChange={setPublished}
          />{" "}
          <DefaultInput
            placeholder="Link"
            type="text"
            value={link}
            onChange={setLink}
          />{" "}
          <DefaultInput
            placeholder="Date of publication"
            type="text"
            value={publishedDate}
            onChange={setPublishedDate}
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
  );
}

export default Publication;
