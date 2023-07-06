import React from "react";
import "./App.css";
import DashboardLayout from "./components/DashboardLayout";
import AppRouters from "./Routing/router";
function App() {
  return (
    <DashboardLayout>
      <AppRouters />
    </DashboardLayout>
  );
}

export default App;
