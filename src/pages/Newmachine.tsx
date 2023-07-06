import React from "react";
import {
  faClipboardList,
  faPersonBooth,
  faMoneyBillTrendUp,
  faPlugCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/cards/DashboardCard";
import Input from "../components/inputs/inputField";
import Button from "../components/buttons/Button";
interface RegisterMachineProps {}

const RegisterMachine: React.FunctionComponent<RegisterMachineProps> = () => {
  return (
    <div className="container pr-[4vw] pl-[2vw] py-[6vh] h-screen overflow-scroll">
      <div className="grid grid-cols-4 gap-2">
        <Card
          icon={faClipboardList}
          numbers="120"
          description="machines Registered"
        />
        <Card
          icon={faPersonBooth}
          numbers="124"
          description="operators Registered"
        />
        <Card
          icon={faMoneyBillTrendUp}
          numbers="90000"
          description="Reward granted"
        />
        <Card
          icon={faPlugCircleExclamation}
          numbers="20"
          description="Inactive machines"
        />
      </div>
      <div className="mt-[4vh] w-full  bg-gray-50 shadow py-[6vh]">
        <h1 className="py-[1vh] text-2xl font-bold text-gray-500 text-center">COMPLETE INFORMATION BELOW TO REGISTER NEW MACHINE</h1>
        <form>
        <div className="px-[4vw] grid grid-cols-2 gap-6 mt-[4vh]">
           <Input label="Location" type="string" placeholder="Enter machine Location here"/>
           <Input label="Status" type="string" placeholder="Enter machine working status here"/>
           <Input label="Zone" type="string" placeholder="Enter machine Exact zone here"/>
           <Input label="Operator" type="string" placeholder="Enter machine controlling Operator"/>
           <Input label="GPS longitude cordinates" type="string" placeholder="Enter exact cordinate from GPS device"/>
           <Input label="GPS latitude cordinates" type="string" placeholder="Enter exact cordinate from GPS deveice"/>
           <div className="col-span-2 flex justify-center mt-4">
                <Button title="Save Records"/>
           </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterMachine;
