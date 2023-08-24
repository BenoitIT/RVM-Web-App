import React, { useEffect } from "react";
import Input from "../components/inputs/inputField";
import Button from "../components/buttons/Button";
import { useDispatch } from "react-redux";
import { SwitchHeaderByPage } from "../redux/PageHeaderReducer";
import DashboardCardGoup from "../components/cards/cardGroup";
interface RegisterMachineProps {}

const RegisterMachine: React.FunctionComponent<RegisterMachineProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SwitchHeaderByPage("Register New Machine"));
  }, []);
  return (
    <div className="pr-[4vw] pl-[2vw] py-[6vh] h-screen overflow-scroll">
      <DashboardCardGoup />
      <div className="mt-[4vh] w-full  bg-gray-50 shadow py-[6vh]">
        <h1 className="py-[1vh] desktop:text-2xl md:text-lg xs:text-base font-bold text-gray-500 text-center">
          COMPLETE INFORMATION BELOW TO REGISTER NEW MACHINE
        </h1>
        <form>
          <div className="px-[4vw] grid desktop:grid-cols-2 md:grid-cols-2 xs:grid-flow-row  gap-6 mt-[4vh]">
            <Input
              label="Location"
              type="string"
              placeholder="Enter machine Location here"
            />
            <Input
              label="Status"
              type="string"
              placeholder="Enter machine working status here"
            />
            <Input
              label="Zone"
              type="string"
              placeholder="Enter machine Exact zone here"
            />
            <Input
              label="Operator"
              type="string"
              placeholder="Enter machine controlling Operator"
            />
            <Input
              label="GPS longitude cordinates"
              type="string"
              placeholder="Enter exact cordinate from GPS device"
            />
            <Input
              label="GPS latitude cordinates"
              type="string"
              placeholder="Enter exact cordinate from GPS deveice"
            />
            <div className="col-span-2 flex justify-center mt-4">
              <Button title="Save Records" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterMachine;
