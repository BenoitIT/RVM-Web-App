import React from "react";
interface InputProps {
  label: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-4 text-base font-medium text-gray-600"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="border bg-transparent border-lime-800 text-gray-700 placeholder-gray-400 text-sm rounded  mt-2 w-full p-3"
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
