import React from "react";
import Input from "../inputs/inputField";
import Button from "../buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
interface NewOperatorProps {
    onModalDisplay:()=>void;
}

const NewOperator: React.FC<NewOperatorProps> = ({ onModalDisplay}:NewOperatorProps) => {
  return (
    <div className="bg-white py-[5vh] px-[4vw] shadow-md shadow-gray-400">
      <div className="text-center text-gray-900 text-xl uppercase font-semibold pb-6 relative">
        Register new RVM operator{" "}
        <span className="absolute right-2 bg-white p-2 py-0 hover:bg-red-300 hover:text-white rounded-full hover:cursor-pointer" onClick={onModalDisplay}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
      <div className="px-[4vw] grid grid-cols-2 gap-6 mt-[4vh]">
        <Input
          label="first name"
          type="string"
          placeholder="Enter operator's first name here"
        />
        <Input
          label="lastName"
          type="string"
          placeholder="Enter operator's last name here"
        />
        <Input
          label="phoneNumber"
          type="string"
          placeholder="Enter operaor's phone number here"
        />
        <Input
          label="nationalID"
          type="string"
          placeholder="Enter operaor's national ID here"
        />
        <div className="col-span-2 flex justify-center mt-4">
          <Button title="Register" />
        </div>
      </div>
    </div>
  );
};
export default NewOperator;
