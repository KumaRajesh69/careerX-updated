// src/ReviewComponents/ColorPicker.js
import React from "react";

const colors = [
  "#FFFFFF",
  "#E0E0E0",
  "#C0C0C0",
  "#A0A0A0",
  "#808080",
  "#606060",
  "#404040",
  "#202020",
  "#0044CC",
  "#0066CC",
  "#0088CC",
  "#00AACC",
  "#00CCCC",
  "#00EECC",
  "#00FFCC",
  "#22FFCC",
  "#44FFCC",
  "#66FFCC",
  "#88FFCC",
  "#AAFFCC",
  "#CCFFCC",
  "#EEFFCC",
  "#FFFFCC",
  "#FFEECC",
  "#FFCCCC",
  "#FFCCAA",
  "#FFAA88",
  "#f5f242",
  "#d9418f",
  "#FF8866",
  "#f2440a",
  "#FF6644",
  "#FF4422",
  "#FF2200",
  "#FF0000",
  "#301b2a",
];

const ColorPicker = ({ onChangeComplete }) => {
  return (
    <div className="p-2 border rounded shadow-md grid grid-cols-9 gap-2">
      {colors.map((color) => (
        <div
          key={color}
          className="w-6 h-6 rounded-full cursor-pointer border"
          style={{ backgroundColor: color }}
          onClick={() => onChangeComplete(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
