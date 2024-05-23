import React from "react";

type Props = {
  label: string;
  value: string;
  onChange: any;
  type: string;
};

const DefaultInput = ({ label, value, onChange, type = "text" }: Props) => {
  return (
    <div>
      <label className="text-xs mb-1 text-gray-500 font-medium">{label}</label>
      <input
        type={type}
        autoComplete="off"
        className="w-full p-2 bg-transparent border rounded-md border-gray-400"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DefaultInput;
