import React from "react";
import { RewardsData } from "../../assets/Data";

const GeneralRow: React.FC<RewardsData> = ({id,name,contribution,reward,date}) => {
  return (
    <tr className="bg-white border-b  tdesktop:text-base md:text-sm xs:text-xs border-gray-700 hover:bg-white">
      <th
        scope="row"
        className="px-2 desktop:py-3 md:py-2 xs:py-1 font-medium text-gray-700"
      >
        {id}
      </th>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{name}</td>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{contribution}</td>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{reward}</td>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{date}</td>
    </tr>
  );
};
export default GeneralRow;
