import React from "react";
import { MachineData } from "../../assets/DamyMachine";

const TableRow: React.FC<MachineData> = ({id,location,zone,status,operator}) => {
  return (
    <tr className="bg-white border-b  border-gray-700 hover:bg-white">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
      >
        {id}
      </th>
      <td className="px-6 py-4">{location}</td>
      <td className="px-6 py-4">{zone}</td>
      <td className="px-6 py-4">{status}</td>
      <td className="px-6 py-4">{operator}</td>
      <td className="px-2 py-4 text-right flex space-x-2 justify-center">
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
