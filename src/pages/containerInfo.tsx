import React from "react";
import Card from "../components/cards/DashboardCard";
import ContainerInfoChart from "../components/chats/ContainersStats";
import {
  faClipboardList,
  faPersonBooth,
  faMoneyBillTrendUp,
  faPlugCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
interface ContainersInfoProps {}

const ContainersInfo: React.FunctionComponent<ContainersInfoProps> = () => {
  return (
    <div className="container pr-[4vw] pl-[2vw] py-[4vh] h-screen overflow-scroll">
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
      <div className="mt-4 w-full ">
        <div className="px-[6vw] bg-gray-50 shadow py-[4vh]">
        <div className="flex justify-between">
          <h1
            className="w-3/6 text-2xl leading-10 font-semibold text-gray-600 uppercase"
            style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)" }}
          >
            Reverse vending Machines storage rate today
          </h1>
          <h2 className="text-gray-600 text-lg font-semibold">Location:<span className="font-bold ml-2">in Kigali</span></h2>
          </div>
          <ContainerInfoChart />
        </div>
      </div>
    </div>
  );
};

export default ContainersInfo;
