import React from "react";
import TopNavBar from "./navBar/TopNavBar";
import SideBar from "./navBar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { SwitchSideBarDisplay } from "../redux/NavBarDisplay";
import { RootState } from "../redux/store";

const DashboardLayout = ({ children }: any) => {
  const showNavBar = useSelector(
    (state: RootState): Boolean => state.showNav.showNav
  );
  const dispatch = useDispatch();

  const hideSideBar = () => {
    dispatch(SwitchSideBarDisplay(false));
  };
  return (
    <>
      <div className="w-screen flex flex-row min-h-screen  bg-white">
        <div
          className={`bg-lime-700 desktop:w-[20vw] min-h-screen xs:w-full md:w-full ${
            !showNavBar ? "md:hidden xs:hidden desktop:block" : "block"
          }`}
        >
          <span
            className="xs:block md:block  desktop:hidden right-[4vw] text-lg absolute top-[4vh]"
            onClick={hideSideBar}
          >
            <FontAwesomeIcon icon={faXmark} />
          </span>
          <h1
            className="text-[5vh] text-white font-extrabold desktop:text-center desktop:ml-0 xs:text-left xs:ml-[8vw] pt-[2vh]"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            _RVM_
          </h1>
          <div className="desktop:mt-[18vh] md:mt-[15vh] xs:mt-[10vh]">
            <SideBar />
          </div>
        </div>
        <div
          className={`desktop:w-[80vw] md:w-full xs:w-full min-h-screen  ${
            !showNavBar ? "block" : "xs:hidden md:hidden desktop:block"
          }`}
        >
          <TopNavBar />
          <div className="overflow-y-auto ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
