import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";
import RegisterMachine from "../pages/Newmachine";
import AvailableMachine from "../pages/AvailableMachine";
import ContainersInfo from "../pages/containerInfo";
import RewardsInfo from "../pages/RewardsInfo";
import Contributors from "../pages/Contributors";
interface AppRoutersProps {}

const AppRouters: React.FunctionComponent<AppRoutersProps> = () => {
  return (
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard/new-machine" element={<RegisterMachine  />} />
        <Route path="/dashboard/machines" element={<AvailableMachine  />} />
        <Route path="/dashboard/containers" element={<ContainersInfo  />} />
        <Route path="/dashboard/rewards" element={<RewardsInfo  />} />
        <Route path="/dashboard/contributors" element={<Contributors   />} />
      </Routes>
  );
};

export default AppRouters;
