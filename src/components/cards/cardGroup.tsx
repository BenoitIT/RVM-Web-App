import React from "react";
import Card from "../../components/cards/DashboardCard";
import {
  faClipboardList,
  faPersonBooth,
  faMoneyBillTrendUp,
  faPlugCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
interface DashboardCardGoupProps {}

const DashboardCardGoup: React.FunctionComponent<
  DashboardCardGoupProps
> = () => {
  return (
    <div className="grid desktop:grid-cols-4 gap-2 md:grid-cols-4 xs:grid-flow-row">
      <Card
        icon={faClipboardList}
        numbers="120"
        description="machines Registered"
      />
      <Card
        icon={faPersonBooth}
        numbers="124"
        description="operators Registered"
      />
      <Card
        icon={faMoneyBillTrendUp}
        numbers="90000"
        description="Reward granted"
      />
      <Card
        icon={faPlugCircleExclamation}
        numbers="20"
        description="Inactive machines"
      />
    </div>
  );
};

export default DashboardCardGoup;
