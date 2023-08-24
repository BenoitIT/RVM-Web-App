import React from "react";
import { MachineData } from "../../assets/DamyMachine";

const TableRow: React.FC<MachineData> = ({
  id,
  location,
  zone,
  status,
  operator,
}) => {
  return (
    <tr className="bg-white border-b desktop:text-base md:text-sm xs:text-xs border-gray-700 hover:bg-white">
      <th
        scope="row"
        className="px-2 desktop:py-3 md:py-2 xs:py-1 font-medium text-gray-700"
      >
        {id}
      </th>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{location}</td>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{zone}</td>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{status}</td>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{operator}</td>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1 text-right flex space-x-2 justify-center">
        <a
          href="#"
          className="font-medium text-lime-600  hover:underline hover:text-lime-800"
        >
          Edit
        </a>
        <a
          href="#"
          className="font-medium text-red-400 hover:underline hover:text-red-500"
        >
          delete
        </a>
      </td>
    </tr>
  );
};
export default TableRow;
