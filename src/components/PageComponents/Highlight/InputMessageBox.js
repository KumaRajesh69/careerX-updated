import React, { useState } from "react";

const InputMessageBox = () => {
  const [content, setContent] = useState(""); // State to store the content of the message box

  // Function to handle changes in the message box content
  const handleChange = (e) => {
    setContent(e.target.innerHTML);
  };

  // Function to handle bold formatting
  const handleBold = () => {
    document.execCommand("bold", false, null);
  };

  // Function to handle italic formatting
  const handleItalic = () => {
    document.execCommand("italic", false, null);
  };

  // Function to handle underline formatting
  const handleUnderline = () => {
    document.execCommand("underline", false, null);
  };

  // Function to handle bullet list formatting
  const handleBulletList = () => {
    document.execCommand("insertUnorderedList", false, null);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        {/* Buttons for formatting options */}
        <button className="mr-2" onClick={handleBold}>
          Bold
        </button>
        <button className="mr-2" onClick={handleItalic}>
          Italic
        </button>
        <button className="mr-2" onClick={handleUnderline}>
          Underline
        </button>
        <button onClick={handleBulletList}>Bullet List</button>
      </div>
      {/* Contenteditable div for message box */}
      <div
        className="border border-gray-300 p-2 rounded-md"
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={handleChange}
      />
    </div>
  );
};

export default InputMessageBox;
