import React from "react";
import Input from "../inputs/inputField";
import { Modal } from "antd";
import Button from "../buttons/Button";
interface NewOperatorProps {
  button:string;
  display?:boolean|any;
   title:string;
    onModalDisplay:()=>void;
}

const NewOperator: React.FC<NewOperatorProps> = ({ onModalDisplay,title,button,display}:NewOperatorProps) => {
  return (
    <Modal
     title={title}
        open={display}
        footer={null}
        onCancel={onModalDisplay}
        style={{ paddingBottom: 0 }}
        width={900}
        centered
     >
    <div className="bg-white py-[5vh] px-[4vw]">
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
          <Button title={button} />
        </div>
      </div>
    </div>
    </Modal>
  );
};
export default NewOperator;
