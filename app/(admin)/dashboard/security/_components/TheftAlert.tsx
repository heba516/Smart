// "use client";
// import { Button } from "@/components/ui";
// import { X } from "lucide-react";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import { ViewTheft } from "./ViewTheft";

// const TheftAlert = ({ active }: { active: boolean }) => {
//   const [isOpen, setIsOpen] = useState<boolean>(active);
//   const alarmRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     if (active) {
//       setIsOpen(true);
//     }
//   }, [active]);

//   // useEffect(() => {
//   //   alarmRef.current = new Audio("/sounds/mixkit-classic-alarm-995.wav");
//   //   alarmRef.current.loop = true;

//   //   alarmRef.current.play().catch((e) => {
//   //     console.error("Auto-play prevented:", e);
//   //   });

//   //   return () => {
//   //     if (alarmRef.current) {
//   //       alarmRef.current.pause();
//   //       alarmRef.current.currentTime = 0;
//   //       alarmRef.current = null;
//   //     }
//   //   };
//   // }, []);

//   const initializeAudio = () => {
//     if (!alarmRef.current) {
//       alarmRef.current = new Audio("/sounds/mixkit-classic-alarm-995.wav");
//       alarmRef.current.loop = true;
//     }
//   };

//   // Handle play/pause based on isOpen
//   useEffect(() => {
//     if (!isOpen) {
//       // Ensure proper cleanup when closed
//       if (alarmRef.current) {
//         alarmRef.current.pause();
//         alarmRef.current.currentTime = 0;
//       }
//       return;
//     }

//     initializeAudio();

//     if (alarmRef.current) {
//       alarmRef.current.play().catch((e) => {
//         console.error("Play failed:", e);
//       });
//     }
//   }, [isOpen]);

//   const handleClose = () => {
//     setIsOpen(false);
//     if (alarmRef.current) {
//       alarmRef.current.pause();
//       alarmRef.current.currentTime = 0;
//     }
//   };

//   if (!isOpen) return null;

//   return (
// <div className="fixed inset-0 h-36 z-50 p-2 px-28 bg-[#FEE] flex items-center justify-between border-t-8 border-primaryRed shadow-md">
//   <div className="flex items-center space-x-8">
//     <Image
//       src={"/images/alert.png"}
//       width={76}
//       height={76}
//       alt="security alert"
//       loading="lazy"
//     />
//     <div className="space-y-2">
//       <h2 className="text-primaryRed text-2xl font-bold uppercase">
//         Theft Attempt Detected!
//       </h2>
// <p className="text-primaryRed text-xl font-semibold">
//   Location:{" "}
//   <span className="pr-2 border-r-2 border-medGray mr-2">
//     Front Entrance
//   </span>
//   Time: <span>{new Date().toLocaleTimeString()}</span>
// </p>
//       <p className="text-darkGray text-xl font-medium">
//         Details:{" "}
//         <span>
//           Motion detected near exit without checkout confirmation. Security
//           notified.
//         </span>
//       </p>
//     </div>
//   </div>
//   <Button
//     className="bg-primaryRed text-white text-xl"
//     size={"lg"}
//     onClick={handleClose}
//     asChild
//   >
//     {/* <Link href={"/dashboard/security"}>View Camera</Link> */}
//     <ViewTheft />
//   </Button>
//   <X
//     className="absolute top-5 right-10 cursor-pointer"
//     size={25}
//     onClick={handleClose}
//   />
// </div>
//   );
// };

// export default TheftAlert;

"use client";
import { Button } from "@/components/ui";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ref, onChildAdded } from "firebase/database";
import { database } from "@/utils/firebase";
import { ViewTheft } from "./ViewTheft";

interface IAlert {
  id: string;
  confidence: number;
  image_url: string;
  status: string;
  timestamp: string;
}

const ALERT_KEY = "theft-alert-closed";

const TheftAlert = () => {
  const [latestAlert, setLatestAlert] = useState<IAlert | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const startTimeRef = useRef<number>(Date.now());
  const alarmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const alertsRef = ref(database, "/alerts");

    const unsubscribe = onChildAdded(alertsRef, (snapshot) => {
      const data = snapshot.val();
      const id = snapshot.key;

      console.log(id);

      if (!data || !id || data.status !== "Shoplifting") return;

      const alertTime = new Date(data.timestamp).getTime();
      if (alertTime < startTimeRef.current) return;

      const alertClosed = localStorage.getItem(ALERT_KEY) === "true";

      if (!alertClosed && id !== latestAlert?.id) {
        setLatestAlert({ id, ...data });
        setIsOpen(true);
      }
    });

    console.log(unsubscribe);

    return () => {
      // nothing to cleanup for onChildAdded
    };
  }, [latestAlert]);

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
          <div className="space-y-2">
            <h2 className="text-primaryRed text-2xl font-bold uppercase">
              Theft Attempt Detected!
            </h2>
            <p className="text-primaryRed text-xl font-semibold">
              Location: Front Entrance
            </p>
            <p className="text-primaryRed text-xl font-semibold">
              Time:{" "}
              <span>
                {latestAlert?.timestamp &&
                  new Date(latestAlert.timestamp).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
              </span>
            </p>
            {/* <p className="text-darkGray text-xl font-medium">
            Confidence: {latestAlert?.confidence}
          </p> */}
          </div>
        </div>
        <Button
          className="bg-primaryRed text-white text-xl"
          size={"lg"}
          onClick={handleClose}
          asChild
        >
          <ViewTheft />
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
