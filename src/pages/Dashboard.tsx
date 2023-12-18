import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import GeneralChart from "../components/chats/GeneralStatics";
import PieChart from "../components/chats/StasticalPieChart";
import Button from "../components/buttons/Button";
import DashboardLayout from "../components/DashboardLayout";
import { SwitchHeaderByPage } from "../redux/PageHeaderReducer";
import DashboardCardGoup from "../components/cards/cardGroup";
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SwitchHeaderByPage("Dashboard Overview"));
  }, []);
  return (
    <DashboardLayout >
    <div className="pr-[4vw] pl-[2vw] py-[4vh] h-screen overflow-scroll">
      <DashboardCardGoup/>
      <div className="mt-4 w-full flex desktop:flex-row md:flex-col xs:flex-col">
        <div className="desktop:w-3/4 md:w-full xs:w-full">
          <GeneralChart />
        </div>
        <div className="desktop:pt-[10vh] md:pt-[5vh] xs:pt-[3vh] xs:w-[80vw] md:w-[50vw] desktop:w-auto xs:ml-[8vw] md:ml-[20vw] desktop:ml-0 ">
          <PieChart />
        </div>
      </div>
      <div className="mx-auto relative">
        <h1 className="desktop:text-2xl md:text-lg xs:text-sm font-bold text-gray-600 text-center py-[1vh]">
          Track the Reverse Vending Machine by map
        </h1>
        <div className="bg-black opacity-10 w-full  absolute h-[30vh] "></div>
        <div className="absolute top-[50%] desktop:left-[35%] md:left-[35%] xs:left-[30%]">
          <Button title="Click here" />
        </div>
        <img
          src="/mapimage.png"
          alt="image"
          className="h-[30vh] w-full shadow-sm rounded-lg"
        />
      </div>
    </div>
    </DashboardLayout>
  );
};

export default Dashboard;
