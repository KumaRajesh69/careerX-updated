import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

const DefaultInput = ({
  label,
  placeholder,
  value,
  type,
  onChange,
  error,
  errorText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div className="flex flex-col flex-1">
        <label
          className={`mb-1 text-sm ${
            isFocused ? "text-black" : "text-[#5A607F]"
          }`}
        >
          {label}
        </label>
        <input
          type={type === "phoneNumber" ? "number" : type}
          placeholder={placeholder}
          className={
            error === label && errorText
              ? "border border-red-500 bg-[#FBEFEF]  rounded-md p-2 w-full  focus:ring-0 outline-none"
              : "border rounded-md p-2 w-full focus:ring-0 outline-none border-inputborderBlue text-[#10002E]"
          }
          value={value}
          onChange={(e) => {
            if (type === "phoneNumber") {
              if (e.target.value.length === 11) {
                return;
              } else {
                onChange(e.target.value);
              }
            } else {
              onChange(e.target.value);
            }
          }}
          // onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(evt) =>
            type === "phoneNumber" &&
            ["e", "E", "+", "-", "."].includes(evt.key) &&
            evt.preventDefault()
          }
        />
        {error === label && errorText && (
          <label className="text-xs text-red-500 flex space-x-2 items-center">
            <span>
              <ExclamationCircleIcon className="w-3 text-red-500" />
            </span>{" "}
            {errorText}
          </label>
        )}
      </div>
    </div>
  );
};

export default DefaultInput;
