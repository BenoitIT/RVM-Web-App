import React from "react";
import { contributorData } from "../../assets/Contributor";

const Contributor: React.FC<contributorData> = ({
  id,
  nationalID,
  firstname,
  lastname,
  phone,
}) => {
  return (
    <tr className="bg-white border-b desktop:text-base md:text-sm xs:text-xs border-gray-700 hover:bg-white">
      <th
        scope="row"
        className="px-2 desktop:py-3 md:py-2 xs:py-1 font-medium text-gray-700"
      >
        {id}
      </th>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{firstname}</td>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{lastname}</td>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{phone}</td>
      <td className="px-2 desktop:py-3 md:py-2 xs:py-1">{nationalID}</td>
    </tr>
  );
};
export default Contributor;
