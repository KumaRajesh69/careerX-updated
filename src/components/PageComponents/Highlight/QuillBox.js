import React, { useState } from "react";
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

import "react-quill/dist/quill.snow.css";

function QuillBox() {
  const [value, setValue] = useState("");

  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      {/* <button className="custom-button">Button</button> */}
    </div>
  );
}

export default QuillBox;
