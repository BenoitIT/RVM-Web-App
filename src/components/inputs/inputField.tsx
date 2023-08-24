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
        className="mb-4 desktop:text-base md:text-base xs:text-sm font-medium text-gray-600"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="border bg-transparent border-lime-800 text-gray-700 placeholder-gray-400 desktop:text-sm md:text-sm xs:text-xs rounded  mt-2 w-full desktop:p-3 md:p-3 xs:p-2"
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
