import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faBell,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
const TopNavBar = () => {
  return (
    <div className="w-full flex flex-row justify-between pr-[4vw] pl-[2vw] py-[2vh] sticky top-0 bg-white z-10">
      <h1
        className="text-3xl text-lime-700 font-semibold"
        style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)" }}
      >
        Dashboard Overview
      </h1>
      <div className="flex flex-row gap-[3vw] pt-[1vh]">
        <p className="text-lime-600 text-xl">
          <span>
            <FontAwesomeIcon icon={faCircleUser} />
          </span>
          <span className="ml-1 text-base text-gray-500">John Doe</span>
        </p>
        <p className="text-lime-600  text-xl">
          <span>
            <FontAwesomeIcon icon={faBell} />
          </span>
          <span className="ml-1 text-base text-gray-500">Notifications</span>
        </p>
        <p className="text-lime-600  text-xl">
          <span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </span>
          <span className="ml-1 text-base  text-gray-500">Logout</span>
        </p>
      </div>
    </div>
  );
};

export default TopNavBar;
