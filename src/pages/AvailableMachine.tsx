import React from "react";
import dammyData from "../assets/DamyMachine";
import TableRow from "../components/tables/MachineRow";
import Paginator from "../components/pagination/Paginator";
interface AvailableMachineProps {}

const AvailableMachine: React.FunctionComponent<AvailableMachineProps> = () => {
  return (
    <div className="container pr-[4vw] pl-[2vw] py-[6vh] h-screen overflow-scroll">
      <div className="relative overflow-x-auto shadow-md sm:rounded">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-lime-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Zone
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                Operator
              </th>
              <th scope="col" className="px-6 py-3">
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
