import React, { useEffect, useState } from "react";
import dammyContibutorsData from "../assets/Contributor";
import Contributor from "../components/tables/Contributor";
import SearchBox from "../components/inputs/SearchInput";
import Paginator from "../components/pagination/Paginator";
import NewOperator from "../components/forms/NewOperator";
import { useDispatch } from "react-redux";
import { SwitchHeaderByPage } from "../redux/PageHeaderReducer";
interface OperatorsProps {}

const Operators: React.FunctionComponent<OperatorsProps> = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SwitchHeaderByPage("Operators"));
  }, []);
  const handleModalDisplay = () => {
    setModal(false);
  };
  const handleModal = () => {
    setModal(true);
  };
  return (
    <div className="pr-[4vw] pl-[2vw] py-[6vh] h-screen overflow-scroll">
      <div className=" flex desktop:flex-row justify-between py-[2vh] xs:flex-col xs:gap-3">
        <button
          type="button"
          className="uppercase text-white bg-lime-800 hover:bg-lime-600 font-bold rounded-lg text-sm px-[3vw] py-[0.8vh] shadow-md shadow-gray-500 md:w-[80vw] desktop:w-auto xs:w-auto"
          onClick={handleModal}
        >
          New operator
        </button>
        <SearchBox />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded">
        <div
          className={
            modal ? "bg-black opacity-50 w-full h-full absolute" : "hidden"
          }
        ></div>
        <div className={modal ? "absolute left-[10vw] top-[10vh]" : "hidden"}>
          <NewOperator onModalDisplay={handleModalDisplay} />
        </div>
        <table className="w-full dektop:text-sm xs:text-xs text-left">
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
  );
};

export default Operators;
