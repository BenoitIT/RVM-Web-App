import React from "react";
import { RewardsData } from "../../assets/Data";

const GeneralRow: React.FC<RewardsData> = ({id,name,contribution,reward,date}) => {
  return (
    <tr className="bg-white border-b  border-gray-700 hover:bg-white">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
      >
        {id}
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{contribution}</td>
      <td className="px-6 py-4">{reward}</td>
      <td className="px-6 py-4">{date}</td>
    </tr>
  );
};
export default GeneralRow;
