import React, { useEffect } from "react";
import dammyContibutorsData from "../assets/Contributor";
import Contributor from "../components/tables/Contributor";
import SearchBox from "../components/inputs/SearchInput";
import Paginator from "../components/pagination/Paginator";
import { useDispatch } from "react-redux";
import { SwitchHeaderByPage } from "../redux/PageHeaderReducer";
import DashboardLayout from "../components/DashboardLayout";
interface ContributorsProps {}

const Contributors: React.FunctionComponent<ContributorsProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SwitchHeaderByPage("Contributors"));
  }, []);
  return (
    <DashboardLayout>
    <div className="pr-[4vw] pl-[2vw] py-[6vh] h-screen overflow-scroll">
      <div className="desktop:flex justify-end py-[2vh] xs:block">
        <SearchBox />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-lime-800">
            <tr>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                No
              </th>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                First Name
              </th>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                Last Name
              </th>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                Telephone
              </th>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                National ID
              </th>
              <th scope="col" className="px-2 desktop:py-3 md:py-2 xs:py-1">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {dammyContibutorsData.map((row) => (
              <Contributor
                id={row.id}
                firstname={row.firstname}
                lastname={row.lastname}
                nationalID={row.nationalID}
                phone={row.phone}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <Paginator />
      </div>
    </div>
    </DashboardLayout>
  );
};

export default Contributors;
