"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";

const LivePreviewWithQuerySelecter = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    linkedIn: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log("function called");
      try {
        const response = await axios.get(`/api/content`, {
          params: { primaryColor: primaryColor },
        });
        console.log(response.data);
        setApiResponse(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [primaryColor]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setApiResponse((prevApiResponse) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(prevApiResponse, "text/html");
      const title = doc.getElementById(name);
      if (title) {
        title.innerHTML = value;
      }
      const serializer = new XMLSerializer();
      return serializer.serializeToString(doc);
    });
  };

  const handleDownloadPdf = () => {
    const element = document.getElementById("pdfContent");

    html2pdf(element, {
      margin: 0, // Adjust the margin as needed
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    });
  };

  useEffect(() => {
    if (apiResponse) {
      const title = document.getElementById("name");
      title.addEventListener("click", function () {
        console.log("hjkfdjfsg");
        title.innerHTML = "Soumya";
      });
      title.addEventListener("mouseenter", function () {
        console.log("hjkfdjfsg");
        title.style.backgroundColor = "red";
      });
      title.addEventListener("mouseleave", function () {
        console.log("hjkfdjfsg");
        // title.innerHTML = formData.name ? formData.name : "Jhon Doe";
        title.style.backgroundColor = primaryColor;
      });
    }
  }, [apiResponse]);

  return (
    <div>
      <div className="flex space-x-3">
        <div
          className="rounded-full p-5 cursor-pointer bg-[#aa123d]"
          onClick={() => setPrimaryColor("#aa123d")}
        ></div>
        <div
          className="rounded-full p-5 cursor-pointer bg-[#aad234]"
          onClick={() => setPrimaryColor("#aad234")}
        ></div>
        <div
          className="rounded-full p-5 cursor-pointer bg-[#ac6544]"
          onClick={() => setPrimaryColor("#ac6544")}
        ></div>
      </div>
      {/* Input field */}

      <div className="grid grid-cols-2 w-full p-4 border rounded-md gap-10">
        <form className="space-y-2">
          <div>
            <label className="text-bluePrimary mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border p-2 rounded-md "
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-bluePrimary mb-1">City</label>
              <input
                type="text"
                name="city"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border p-2 rounded-md "
              />
            </div>
            <div>
              <label className="text-bluePrimary mb-1">Country</label>
              <input
                type="text"
                name="title"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border p-2 rounded-md "
              />
            </div>
          </div>
          <div>
            <label className="text-bluePrimary mb-1">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border p-2 rounded-md "
            />
          </div>
          <div>
            <label className="text-bluePrimary mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border p-2 rounded-md "
            />
          </div>
          <div>
            <label className="text-bluePrimary mb-1">Full Name</label>
            <input
              type="text"
              name="title"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border p-2 rounded-md "
            />
          </div>
        </form>
        {/* Render HTML content received from API */}
        <div>
          <div
            id="pdfContent"
            dangerouslySetInnerHTML={{ __html: apiResponse }}
          />
          <button onClick={handleDownloadPdf}>Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default LivePreviewWithQuerySelecter;
