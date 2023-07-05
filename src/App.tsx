import React from "react";
import Card from "./components/cards/DashboardCard";
import {
  faClipboardList,
  faPersonBooth,
  faMoneyBillTrendUp,
  faPlugCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import DashboardLayout from "./components/DashboardLayout";
import GeneralChart from "./components/chats/GeneralStatics";
import PieChart from "./components/chats/StasticalPieChart";
import Button from "./components/buttons/Button";
function App() {
  return (
    <DashboardLayout>
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
        <div className="mt-4 w-full flex">
          <div className="w-3/4">
            <GeneralChart />
          </div>
          <div className="pt-[10vh]">
            <PieChart />
          </div>
        </div>
        <div className="mx-auto relative">
           <h1 className="text-2xl font-bold text-gray-600 text-center py-[1vh]">Track the Reverse Vending Machine by map</h1>
           <div className="bg-black opacity-10 w-full  absolute h-[30vh] "></div>
           <div className="absolute top-[50%] left-[35%]">
           <Button/>
           </div>
           <img src="/mapimage.png" alt="image" className="h-[30vh] w-full shadow-sm rounded-lg"/>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
