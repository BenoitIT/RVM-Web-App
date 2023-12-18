import React, { useEffect } from "react";
import Input from "../components/inputs/inputField";
import Button from "../components/buttons/Button";
import dammyContibutors from "../assets/Contributor";
import { useDispatch } from "react-redux";
import { SwitchHeaderByPage } from "../redux/PageHeaderReducer";
import DashboardLayout from "../components/DashboardLayout";
import DashboardCardGoup from "../components/cards/cardGroup";
interface RegisterMachineProps {}

const RegisterMachine: React.FunctionComponent<RegisterMachineProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SwitchHeaderByPage("Register New Machine"));
  }, []);
  return (
    <DashboardLayout>
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
              <div className="flex flex-col">
                <label className="desktop:text-base md:text-base xs:text-xs font-medium text-gray-600">
                  Operator
                </label>
                <select
                  placeholder="select machine controlling Operator"
                  className="border bg-transparent border-lime-800 text-gray-700 desktop:text-sm md:text-sm xs:text-xs rounded w-full mt-2 desktop:p-3 md:p-3 xs:p-2 outline-none"
                >
                  <option>Select machine controlling Operator</option>
                  {dammyContibutors.map((contributor) => (
                    <option className="bg-white">
                      {contributor.firstname}
                    </option>
                  ))}
                </select>
              </div>
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
    </DashboardLayout>
  );
};

export default RegisterMachine;
