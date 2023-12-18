import React, { FC, HTMLProps } from "react";

interface FormFieldProps extends HTMLProps<HTMLInputElement> {
  inputWrapper?: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  inputStyle?: string;
  grabValue?: any;
}
interface FormSelectFieldProps extends HTMLProps<HTMLInputElement> {
  inputWrapper?: string;
  name: string;
  options?:any[],
  value?: string;
  grabValue?: any;
}
const FormField: FC<FormFieldProps> = ({
  inputWrapper = "flex flex-col gap-4 w-full",
  name,
  value,
  grabValue,
  type = "text",
  placeholder,
  inputStyle = "bg-transparent text-gray   px-4 py-3 border border-white rounded-md outline-none active:outline-none",
}) => {
  return (
    <div className={inputWrapper}>
      <label className="text-white font-semibold capitalize" htmlFor={name}>
        {name}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        placeholder={placeholder}
        className={inputStyle}
        onChange={(e) => grabValue(e.target.value)}
      />
    </div>
  );
};

export default FormField;

export const SelectOption:FC<FormSelectFieldProps> = ({
  inputWrapper = "flex flex-col gap-4 w-full",
  name,
  options,
  grabValue,
  value
}) => {
  return (
    <div className={inputWrapper}>
      <label className="text-black font-semibold capitalize" htmlFor={name}>
        {name}
      </label>
      <select
        className="bg-light text-gray  px-4 py-3 rounded-md outline-none active:outline-none"
        value={value}
        id={name}
        onChange={(e) => grabValue(e.target.value)}
      > 
         {options?.map((option:any)=>(
        <option value={option?.id}>{option?.name}</option>
        ))}
      </select>
    </div>
  );
};
