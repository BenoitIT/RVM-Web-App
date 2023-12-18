
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Menus from "../../assets/Links";
import { SwitchSideBarDisplay } from "../../redux/NavBarDisplay";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState<number>(0);
  const [AcitveSubMenu, setActiveSubMenu] = useState<number>(0);
  const dispatch = useDispatch();
  const handleSelectedMenu = (index: number) => {
    setActiveMenu(index);
    dispatch(SwitchSideBarDisplay(false));
  };
  const handleSelectedSubMenu = (index: number) => {
    setActiveSubMenu(index);
    dispatch(SwitchSideBarDisplay(false));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Menus.map((menu, index) => (
            <tr
              className="h-[10vh] hover:cursor-pointer"
              onClick={() => handleSelectedMenu(index)}
              key={index}
            >
              <td
                id="icons"
                className={`bg-lime-800 text-white text-[3vh] desktop:px-[1.5vw] xs:px-[5vw] md:px-[8vw] ${
                  activeMenu === index
                    ? "active text-slate-300 border border-green-100"
                    : "font-bold"
                }`}
              >
                <FontAwesomeIcon icon={menu.icon} />
              </td>
              <td
                className={` relative desktop:px-[2vw] md:pl-[6vw] xs:pl-[5vw] ${
                  activeMenu === index
                    ? "active bg-lime-600 shadow-xl font-extrabold border border-green-100 w-full"
                    : "font-bold"
                }`}
              >
                <Link to={menu.path} className="text-white hover:text-gray-300">
                  <div onClick={() => handleSelectedMenu(index)}>{menu.title}</div>
                </Link>
                {activeMenu === index && menu.nestedLink && (
                  <div
                    className={`absolute left-0 text-sm bg-lime-600 z-10 w-full py-[2vh] ${
                      menu.nestedLink?.length > 8
                        ? "overflow-scroll h-[37vh]"
                        : ""
                    } `}
                  >
                    {menu.nestedLink.map((link, index) => (
                      <div
                        className={`py-[1vh] px-[2vw] font-light hover:bg-lime-700  hover:cursor-pointer w-full ${
                          AcitveSubMenu === index ? "bg-lime-800" : ""
                        }`}
                        onClick={() => handleSelectedSubMenu(index)}
                        key={index}
                      >
                        {link.title}
                      </div>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SideBar;
