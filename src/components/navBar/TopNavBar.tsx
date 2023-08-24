import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  faCircleUser,
  faBell,
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../redux/store";
import { SwitchSideBarDisplay } from "../../redux/NavBarDisplay";
const TopNavBar = () => {
  const PageHeaderTitle = useSelector(
    (state: RootState): string => state.header.header
  );
  const showNavBar = useSelector(
    (state: RootState): Boolean => state.showNav.showNav
  );
  const dispatch = useDispatch();
  const showSideBar = () => {
    dispatch(SwitchSideBarDisplay(true));
  };
  return (
    <div
      className={`w-full  justify-between pr-[4vw] pl-[2vw] py-[2vh] sticky top-0 bg-white z-10 ${
        showNavBar
          ? "md:hidden xs:hidden desktop:flex flex-row"
          : "flex flex-row"
      }`}
    >
      <h1
        className="desktop:text-3xl desktop:block md:hidden xs:hidden text-lime-700 font-semibold"
        style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)" }}
      >
        {PageHeaderTitle}
      </h1>
      <div className="flex flex-row gap-[3vw] pt-[1vh]">
        <p className="text-lime-600  desktop:text-xl md:text-base xs:text-sm">
          <span>
            <FontAwesomeIcon icon={faCircleUser} />
          </span>
          <span className="ml-1 desktop:text-base xs:text-xs md:text-sm  text-gray-500">
            John Doe
          </span>
        </p>
        <p className="text-lime-600  desktop:text-xl md:text-base xs:text-sm">
          <span>
            <FontAwesomeIcon icon={faBell} />
          </span>
          <span className="ml-1 desktop:text-base xs:text-xs md:text-sm text-gray-500">
            Notifications
          </span>
        </p>
        <p className="text-lime-600  desktop:text-xl md:text-base xs:text-sm">
          <span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </span>
          <span className="ml-1 desktop:text-base xs:text-xs md:text-sm  text-gray-500">
            Logout
          </span>
        </p>
      </div>
      <span
        className="xs:text-sm md:text-lg text-lime-700 desktop:hidden md:block xs:block mt-[1vh]"
        onClick={showSideBar}
      >
        <FontAwesomeIcon icon={faBars} />
      </span>
    </div>
  );
};

export default TopNavBar;
