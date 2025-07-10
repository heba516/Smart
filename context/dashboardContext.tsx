"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type DashboardContextType = {
  userName: string;
  setUserName: (name: string) => void;
  availableCount: number;
  lowStockCount: number;
  outOfStockCount: number;
  alertsCount: number;
  setAvailableItems: (count: number) => void;
  setLowItems: (count: number) => void;
  setOutItems: (count: number) => void;
  setAlertsCount: React.Dispatch<React.SetStateAction<number>>;
};

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState("");
  const [availableCount, setAvailable] = useState(0);
  const [lowStockCount, setLow] = useState(0);
  const [outOfStockCount, setOut] = useState(0);
  const [alertsCount, setAlertsCount] = useState(0);

  return (
    <DashboardContext.Provider
      value={{
        userName,
        setUserName,
        availableCount,
        lowStockCount,
        outOfStockCount,
        alertsCount,
        setAvailableItems: setAvailable,
        setLowItems: setLow,
        setOutItems: setOut,
        setAlertsCount: setAlertsCount,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within an DashboardProvider"
    );
  }
  return context;
};
