import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { showDataUpdateModal } from "../../redux/displayModal";

const Contributor: React.FC<any> = ({
  id,
  nationalID,
  firstname,
  lastname,
  phone,
}) => {
  const dispatch = useDispatch();
  const PageHeaderTitle = useSelector(
    (state: RootState): string => state.header.header
  );
  const handleEdit = () => {
    dispatch(showDataUpdateModal(true));
  };
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
      {PageHeaderTitle === "Operators" && (
        <td className="px-2 desktop:py-3 md:py-2 xs:py-1 text-right flex space-x-2 justify-center">
          <span
            onClick={() => handleEdit()}
            className="font-medium text-lime-600  hover:underline hover:cursor-pointer hover:text-lime-800"
          >
            Edit
          </span>
          <span className="font-medium text-red-400 hover:underline hover:cursor-pointer hover:text-red-500">
            delete
          </span>
        </td>
      )}
    </tr>
  );
};
export default Contributor;
