import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import dammyData from "../assets/DamyMachine";
import TableRow from "../components/tables/MachineRow";
import Paginator from "../components/pagination/Paginator";
import { SwitchHeaderByPage } from "../redux/PageHeaderReducer";
interface AvailableMachineProps {}

const AvailableMachine: React.FunctionComponent<AvailableMachineProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SwitchHeaderByPage("Available Machines"));
  }, []);
  return (
    <div className="pr-[4vw] pl-[2vw] py-[6vh] h-screen overflow-scroll">
      <div className="relative overflow-x-auto shadow-md sm:rounded">
        <table className="w-full desktop:text-sm xs:text-xs text-left">
          <thead className="text-xs text-white uppercase bg-lime-800">
            <tr>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                No
              </th>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                Location
              </th>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                Zone
              </th>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                status
              </th>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                Operator
              </th>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {dammyData.map((row) => (
              <TableRow
                id={row.id}
                location={row.location}
                zone={row.zone}
                status={row.status}
                operator={row.operator}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <Paginator />
      </div>
    </div>
  );
};

export default AvailableMachine;
