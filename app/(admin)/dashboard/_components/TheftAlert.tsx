"use client";
import { Button } from "@/components/ui";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const TheftAlert = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const alarmRef = useRef<HTMLAudioElement | null>(null);

  // useEffect(() => {
  //   alarmRef.current = new Audio("/sounds/mixkit-classic-alarm-995.wav");
  //   alarmRef.current.loop = true;

  //   alarmRef.current.play().catch((e) => {
  //     console.error("Auto-play prevented:", e);
  //   });

  //   return () => {
  //     if (alarmRef.current) {
  //       alarmRef.current.pause();
  //       alarmRef.current.currentTime = 0;
  //       alarmRef.current = null;
  //     }
  //   };
  // }, []);

  const initializeAudio = () => {
    if (!alarmRef.current) {
      alarmRef.current = new Audio("/sounds/mixkit-classic-alarm-995.wav");
      alarmRef.current.loop = true;
    }
  };

  // Handle play/pause based on isOpen
  useEffect(() => {
    if (!isOpen) {
      // Ensure proper cleanup when closed
      if (alarmRef.current) {
        alarmRef.current.pause();
        alarmRef.current.currentTime = 0;
      }
      return;
    }

    initializeAudio();

    if (alarmRef.current) {
      alarmRef.current.play().catch((e) => {
        console.error("Play failed:", e);
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    if (alarmRef.current) {
      alarmRef.current.pause();
      alarmRef.current.currentTime = 0;
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 h-36 z-50 p-2 px-28 bg-[#FEE] flex items-center justify-between border-t-8 border-primaryRed shadow-md">
      <div className="flex items-center space-x-8">
        <Image
          src={"/images/alert.png"}
          width={76}
          height={76}
          alt="security alert"
          loading="lazy"
        />
        <div className="space-y-2">
          <h2 className="text-primaryRed text-2xl font-bold uppercase">
            Theft Attempt Detected!
          </h2>
          <p className="text-primaryRed text-xl font-semibold">
            Location:{" "}
            <span className="pr-2 border-r-2 border-medGray mr-2">
              Front Entrance
            </span>
            Time: <span>{new Date().toLocaleTimeString()}</span>
          </p>
          <p className="text-darkGray text-xl font-medium">
            Details:{" "}
            <span>
              Motion detected near exit without checkout confirmation. Security
              notified.
            </span>
          </p>
        </div>
      </div>
      <Button
        className="bg-primaryRed text-white text-xl"
        size={"lg"}
        onClick={handleClose}
        asChild
      >
        <Link href={"/dashboard/security"}>View Camera</Link>
      </Button>
      <X
        className="absolute top-5 right-10 cursor-pointer"
        size={25}
        onClick={handleClose}
      />
    </div>
  );
};

export default TheftAlert;
