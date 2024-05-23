// src/components/FormattingTools.js
import React, { useState } from "react";

const fontSizes = [
  { size: "Small", image: "/img2/small.svg" },
  { size: "Normal", image: "/img2/normal.svg" },
  { size: "Large", image: "/img2/large.svg" },
];

const FormattingTools = () => {
  const [fontSize, setFontSize] = useState("");
  const [font, setFont] = useState("Futura");
  const [lineSpacing, setLineSpacing] = useState(1.5);
  const [paragraphSpacing, setParagraphSpacing] = useState(1);
  const [sideMargins, setSideMargins] = useState(1);
  const [paperSize, setPaperSize] = useState("A4");

  return (
    <div className=" bg-white  max-w-sm mx-auto">
      <div className="mb-4">
        <div className="flex justify-between">
          {fontSizes.map((item) => (
            <button
              key={item.size}
              className={` h-20 w-24 space-y-2 border rounded-2xl  ${
                fontSize === item.size
                  ? "bg-blue-500 text-white"
                  : "bg-white text-bluePrimary  font-semibold"
              }`}
              onClick={() => setFontSize(item.size)}
            >
              <div className="flex justify-center items-center">
                <img src={item.image} alt={item.size} />
              </div>
              <p>{item.size}</p>
            </button>
          ))}
        </div>

        {/* Font */}
        <div className="my-4">
          <label className="block text-sm text-[#5A607F] mb-2">Font</label>
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="w-full p-2 border rounded border-gray-200 focus:outline-none text-black font-medium  "
          >
            <option value="Futura">Futura</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </div>

        {/* Line Spacing */}
        <div className="my-4">
          <label className="block text-sm text-[#5A607F] mb-2">
            Line Spacing
          </label>
          <input
            type="range"
            min="1"
            max="2"
            step="0.1"
            value={lineSpacing}
            onChange={(e) => setLineSpacing(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Paragraph Spacing */}
        <div className="mb-4">
          <label className="block text-sm text-[#5A607F] mb-2">
            Paragraph Spacing
          </label>
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={paragraphSpacing}
            onChange={(e) => setParagraphSpacing(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Side Margins */}
        <div className="mb-4">
          <label className="block text-sm text-[#5A607F] mb-2">
            Side Margins
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={sideMargins}
            onChange={(e) => setSideMargins(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Paper Size */}
        <div>
          <label className="block text-sm text-[#5A607F] mb-2">
            Paper Size
          </label>
          <select
            value={paperSize}
            onChange={(e) => setPaperSize(e.target.value)}
            className="w-full p-2 border rounded text-black font-medium  border-gray-200 focus:outline-none"
          >
            <option value="A4">A4 (8.27" × 11.69")</option>
            <option value="Letter">Letter (8.5" × 11")</option>
            <option value="Legal">Legal (8.5" × 14")</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormattingTools;
