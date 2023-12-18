import React, { useEffect } from "react";
import ContainerInfoChart from "../components/chats/ContainersStats";
import { useDispatch } from "react-redux";
import { SwitchHeaderByPage } from "../redux/PageHeaderReducer";
import DashboardLayout from "../components/DashboardLayout";
import DashboardCardGoup from "../components/cards/cardGroup";
interface ContainersInfoProps {}

const ContainersInfo: React.FunctionComponent<ContainersInfoProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SwitchHeaderByPage("Containers' Fill levels"));
  }, []);
  return (
    <DashboardLayout>
    <div className="pr-[4vw] pl-[2vw] py-[4vh] h-screen overflow-scroll">
      <DashboardCardGoup />
      <div className="desktop:mt-4 md:mt-[10vh] w-full ">
        <div className="px-[6vw] bg-gray-50 shadow py-[4vh]">
          <div className="flex justify-between">
            <h1
              className="desktop:w-3/6  xs:w-full desktop:text-2xl md:text-xl xs:text-xs leading-10 font-semibold text-gray-600 uppercase"
              style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)" }}
            >
              Reverse vending Machines storage rate today
            </h1>
            <h2 className="text-gray-600 desktop:text-lg md:text-base xs:text-xs font-semibold">
              Location:<span className="font-bold ml-2">in Kigali</span>
            </h2>
          </div>
          <ContainerInfoChart />
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default ContainersInfo;
