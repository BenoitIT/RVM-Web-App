"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menus from "../../assets/Links";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [AcitveSubMenu, setActiveSubMenu] = useState(0);

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
            onClick={() => setActiveMenu(index)}
            key={index}
          >
            <td
              id="icons"
              className={`bg-lime-800 text-white text-[3vh] px-[1.5vw] ${
                activeMenu === index
                  ? "active text-slate-300 border border-green-100"
                  : "font-bold"
              }`}
            >
              <FontAwesomeIcon icon={menu.icon} />
            </td>
            <td
              className={`px-[2vw] relative ${
                activeMenu === index
                  ? "active bg-lime-600 shadow-xl font-extrabold border border-green-100 w-full"
                  : "font-bold"
              }`}
            >
             <div> {menu.title}</div>
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
                      onClick={() => setActiveSubMenu(index)}
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
