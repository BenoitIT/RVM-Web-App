import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector} from "react-redux/es/hooks/useSelector";
import {
  faCircleUser,
  faBell,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../redux/store";
const TopNavBar = () => {
  const PageHeaderTitle =useSelector((state:RootState):string=>state.header.header);
  
  return (
    <div className="w-full flex flex-row justify-between pr-[4vw] pl-[2vw] py-[2vh] sticky top-0 bg-white z-10">
      <h1
        className="text-3xl text-lime-700 font-semibold"
        style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)" }}
      >
        {PageHeaderTitle}
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
