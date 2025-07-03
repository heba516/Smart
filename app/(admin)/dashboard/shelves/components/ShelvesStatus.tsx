"use client";
import { IStatusData } from "@/interfaces";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import StatusBoxes from "../../_components/StatusBoxes";

interface IStateCounts {
  available: number;
  out: number;
  low: number;
  total?: number;
}

const SOCKET_URL =
  "https://faint-ilyse-iot-based-smart-retail-system-897f175c.koyeb.app/shelf";

export const ShelvesStatus = () => {
  const [stateCounts, setStateCounts] = useState<IStateCounts>({
    available: 0,
    low: 0,
    out: 0,
  });

  useEffect(() => {
    console.log("🔌 Initializing socket...");

    const socket = io(SOCKET_URL, {
      transports: ["websocket"], // Critical for fallback
    });

    socket.on("connect", () => {
      console.log("🔗 Connected to shelf socket: ", socket.id);
    });

    socket.on("product-states-update", (response) => {
      if (response.success) {
        console.log("Updated product state counts:", response.stateCounts);
        setStateCounts(response.stateCounts);
      } else {
        console.error("Failed to receive product state counts:", response);
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("Disconnected from shelf socket");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   socket.on("product-states-update", (response) => {
  //     if (response.success && response.stateCounts) {
  //       setStateCounts(response.stateCounts);
  //     }
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const InventoryStatusData: IStatusData[] = [
    {
      src: "/images/inventoryAvailableProducts.svg",
      name: "Available Shelves",
      number: stateCounts.available,
      numberColor: "#24A855",
      numberUnite: "shelves",
      percent: 7,
      percentIncreased: true,
    },
    {
      src: "/images/inventoryLowOfStock.svg",
      name: "Low Of Stock Shelves",
      number: stateCounts.low,
      numberColor: "#F99141",
      numberUnite: "shelves",
      percent: 7,
      percentIncreased: true,
    },
    {
      src: "/images/inventoryOutofStock.svg",
      name: "Out Of Stock Shelves",
      number: stateCounts.out,
      numberColor: "#ED1C24",
      numberUnite: "shelves",
      percent: -5,
      percentIncreased: false,
    },
  ];
  return <StatusBoxes statusData={InventoryStatusData} />;
};
