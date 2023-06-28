import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({icon,numbers,description}:any) => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex flex-col items-center py-4">
        <span className="text-6xl text-lime-700">
          <FontAwesomeIcon icon={icon} />
        </span>
        <h5 className="my-3 text-3xl font-bold text-gray-700">{numbers}</h5>
        <span className="text-md text-gray-700 capitalize">{description}</span>
      </div>
    </div>
  );
};

export default Card;
