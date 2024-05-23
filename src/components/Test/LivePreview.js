"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";

const LivePreview = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");

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
    const value = event.target.value;
    setInputValue(value);
    // Update the preview text in the API response
    setApiResponse(
      apiResponse.replace(
        /<div id="title">([^<]*)<\/div>/,
        `<div id="title">${value}</div>`
      )
    );
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
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
      />
      {/* Render HTML content received from API */}

      <div id="pdfContent" dangerouslySetInnerHTML={{ __html: apiResponse }} />
      <button onClick={handleDownloadPdf}>Download PDF</button>
    </div>
  );
};

export default LivePreview;
