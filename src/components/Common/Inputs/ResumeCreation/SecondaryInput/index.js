import React, { useState } from "react";

function SecondaryInput({
  label,
  placeholder,
  value,
  type,
  onChange,
  error,
  errorText,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputError, setInputError] = useState(false);

  return (
    <div>
      <div className="flex flex-col flex-1">
        <label
          className={`text-sm ${isFocused ? "text-black" : "text-[#5A607F]"}`}
        >
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          // className={
          //   error === label && errorText
          //     ? "border border-red-500 bg-[#FBEFEF] h-10  rounded p-2 w-full  focus:ring-0 outline-none placeholder-[#A1A7C4]"
          //     : "border rounded p-2 w-full focus:ring-0 h-10 outline-none border-inputborderBlue text-[#10002E] placeholder-[#A1A7C4]"
          // }
          className={
            value.trim() === "" && errorText // Check if value is empty and there's an error
              ? "border border-red-500 bg-[#FBEFEF] h-10 rounded p-2 w-full focus:ring-0 outline-none placeholder-[#A1A7C4]"
              : "border rounded p-2 w-full focus:ring-0 h-10 outline-none border-inputborderBlue text-[#10002E] placeholder-[#A1A7C4]"
          }
          value={value}
          onChange={(e) => onChange(e.target.value)}
          // onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />{" "}
        {value.trim() === "" &&
          errorText && ( // Condition to show error message
            <div className="text-red-500 text-xs mt-1">
              {/* Please fill out all required fields */}
              Required fields are missing.
            </div>
          )}
        {/* {inputError && (
          <div className="text-red-500 text-xs mt-1">
            <ExclamationCircleIcon className="w-3 inline mr-1" /> {errorText}
          </div>
        )} */}
        {/* {error && (
          <div className="absolute top-full left-0 text-red-500 text-xs mt-1">
            {errorText}
          </div>
        )} */}
        {/* {error === label && errorText && (
          <label className="text-xs text-red-500 flex space-x-2 items-center">
            <span>
              <ExclamationCircleIcon className="w-3 text-red-500" />
            </span>{" "}
            {errorText}
          </label>
        )} */}
      </div>
    </div>
  );
}

export default SecondaryInput;
