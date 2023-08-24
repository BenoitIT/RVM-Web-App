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
    <tr className="bg-white border-b  border-gray-700 hover:bg-white">
      <th scope="row" className="px-2 py-4 font-medium text-gray-700 text-xs">
        {id}
      </th>
      <td className="px-2 py-4">{firstname}</td>
      <td className="px-2 py-4">{lastname}</td>
      <td className="px-2 py-4">{phone}</td>
      <td className="px-2 py-4">{nationalID}</td>
    </tr>
  );
};
export default Contributor;
