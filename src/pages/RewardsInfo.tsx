import React, { useEffect } from "react";
import dammyRewardData from "../assets/Data";
import GeneralRow from "../components/tables/GeneralRow";
import SearchBox from "../components/inputs/SearchInput";
import Paginator from "../components/pagination/Paginator";
import { useDispatch } from "react-redux";
import { SwitchHeaderByPage } from "../redux/PageHeaderReducer";
interface RewardsInfoProps {}

const RewardsInfo: React.FunctionComponent<RewardsInfoProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SwitchHeaderByPage("Rewards Information"));
  }, []);
  return (
    <div className="container pr-[4vw] pl-[2vw] py-[6vh] h-screen overflow-scroll">
      <div className="flex justify-end py-[2vh]">
        <SearchBox />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-lime-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Recycling Contribution
              </th>
              <th scope="col" className="px-6 py-3">
                Reward
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {dammyRewardData.map((row) => (
              <GeneralRow
                id={row.id}
                name={row.name}
                contribution={row.contribution}
                reward={row.reward}
                date={row.date}
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

export default RewardsInfo;
