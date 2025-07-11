"use client";
import { Button } from "@/components/ui";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ref, onChildAdded, limitToLast, query } from "firebase/database";
import { database } from "@/lib/firebase";
import { ViewTheft } from "./ViewTheft";
import TheftDetailsAndTime from "./TheftDetailsAndTime";
import { IAlert } from "@/interfaces";
import { useDashboardContext } from "@/context/dashboardContext";

const ALERT_KEY = "theft-alert-closed";

const TheftAlert = () => {
  const [latestAlert, setLatestAlert] = useState<IAlert | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const startTimeRef = useRef<number>(Date.now());
  const alarmRef = useRef<HTMLAudioElement | null>(null);
  const { setAlertsCount } = useDashboardContext();

  useEffect(() => {
    // const alertsRef = ref(database, "/alerts");
    const alertsRef = query(ref(database, "/alerts"), limitToLast(1));

    const unsubscribe = onChildAdded(alertsRef, (snapshot) => {
      const data = snapshot.val();
      const id = snapshot.key;

      setAlertsCount((prev) => prev + 1);

      console.log({ data });

      // if (!data || !id) return;

      const alertTime = new Date(data.timestamp).getTime();
      console.log(
        "Alert time:",
        alertTime,
        "Component started at:",
        startTimeRef.current
      );

      // if (alertTime < startTimeRef.current - 3000) return;

      // const alertClosed = localStorage.getItem(ALERT_KEY) === "false";
      const lastID = localStorage.getItem("lastID");
      console.log(lastID);

      if (id && id !== lastID) {
        localStorage.setItem("lastID", id);
        console.log(localStorage.getItem("lastID"));

        setLatestAlert({ id, ...data });
        setIsOpen(true);
      }
    });

    https: console.log(unsubscribe);

    return () => {};
  }, []);

  useEffect(() => {
    if (!isOpen) {
      alarmRef.current?.pause();
      // alarmRef.current && (alarmRef.current.currentTime = 0);
      return;
    }

    document.body.style.overflow = "hidden";

    if (!alarmRef.current) {
      alarmRef.current = new Audio("/sounds/mixkit-classic-alarm-995.wav");
      alarmRef.current.loop = true;
    }

    alarmRef.current
      .play()
      .catch((e) => console.error("🔇 Audio play failed:", e));

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    localStorage.setItem(ALERT_KEY, "true");
    setIsOpen(false);
    alarmRef.current?.pause();
    // alarmRef.current && (alarmRef.current.currentTime = 0);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-[#0000005e] opacity-60 pointer-events-auto"></div>

      <div className="fixed inset-0 h-36 z-50 p-2 px-28 bg-[#FEE] flex items-center justify-between border-t-8 border-primaryRed shadow-md">
        <div className="flex items-center space-x-8">
          <Image
            src={"/images/alert.png"}
            width={76}
            height={76}
            alt="security alert"
            loading="lazy"
          />
          <TheftDetailsAndTime latestAlert={latestAlert!} />
        </div>
        <Button
          className="bg-primaryRed text-white text-xl"
          size={"lg"}
          onClick={handleClose}
          asChild
        >
          <ViewTheft latestAlert={latestAlert!} onClick={handleClose} />
        </Button>
        <X
          className="absolute top-5 right-10 cursor-pointer"
          size={25}
          onClick={handleClose}
        />
      </div>
    </>
  );
};

export default TheftAlert;
