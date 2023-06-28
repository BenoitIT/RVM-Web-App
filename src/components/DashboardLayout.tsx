import React from "react";
import TopNavBar from "./navBar/TopNavBar";
import SideBar from "./navBar/SideBar";
const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <div className="w-screen min-h-screen flex flex-row bg-white">
        <div className="bg-lime-700 w-[20vw] min-h-screen">
          <h1
            className="text-[5vh] text-white font-extrabold text-center pt-[2vh]"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            _RVM_
          </h1>
          <div className="mt-[18vh]">
            <SideBar />
          </div>
        </div>
        <div className="w-[80vw] min-h-screen">
          <TopNavBar />
          <div className="overflow-y-auto ">
          {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
