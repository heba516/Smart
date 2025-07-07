"use client";
import { IStatusData } from "@/interfaces";
import StatusBoxes from "../../_components/StatusBoxes";
import { useLatestAlerts } from "./Firebase";
import { useDashboardContext } from "@/context/dashboardContext";

const SecurityStatus = () => {
  useLatestAlerts();
  const { alertsCount } = useDashboardContext();
  const SecurityStatusData: IStatusData[] = [
    {
      src: "/images/securityTotalAlerts.svg",
      name: "Total Alerts",
      number: alertsCount,
      numberColor: "black",
      numberUnite: "alerts",
      percent: -5,
      percentIncreased: false,
    },
    {
      src: "/images/securityTotalIncidents.svg",
      name: "Total Incidents",
      number: 8,
      numberColor: "black",
      numberUnite: "incidents",
      percent: -5,
      percentIncreased: false,
    },
    {
      src: "/images/securityActivecameras.svg",
      name: "Active cameras",
      number: 40,
      numberColor: "black",
      numberUnite: "camera of",
      percent: 0,
      percentIncreased: false,
    },
  ];
  return <StatusBoxes statusData={SecurityStatusData} />;
};

export default SecurityStatus;
