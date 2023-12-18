import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";
import RegisterMachine from "../pages/Newmachine";
import AvailableMachine from "../pages/AvailableMachine";
import ContainersInfo from "../pages/containerInfo";
import RewardsInfo from "../pages/RewardsInfo";
import Contributors from "../pages/Contributors";
import Operators from "../pages/Operator";
import LoginPage from "../pages/loginPage";

interface AppRoutersProps {}

const AppRouters: React.FunctionComponent<AppRoutersProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard">
        <Route index element={<DashboardPage />} />
        <Route path="new-machine" element={<RegisterMachine />} />
        <Route path="machines" element={<AvailableMachine />} />
        <Route path="containers" element={<ContainersInfo />} />
        <Route path="rewards" element={<RewardsInfo />} />
        <Route path="contributors" element={<Contributors />} />
        <Route path="operators" element={<Operators />} />
      </Route>
    </Routes>
  );
};

export default AppRouters;
