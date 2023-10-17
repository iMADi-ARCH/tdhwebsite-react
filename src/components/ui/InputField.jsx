import React from "react";

const InputField = ({ placeholder, type = "text" }) => {
  return (
    <input
      className="w-full rounded-3xl px-5 py-3 bg-white border-2 border-[#D7FF65]"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputField;
