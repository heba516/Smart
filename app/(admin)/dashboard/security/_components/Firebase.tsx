// "use client";

// import { useEffect, useState } from "react";
// import { ref, onValue } from "firebase/database";
// import { database } from "@/lib/firebase"; // adjust path as needed

// interface IAlert {
//   id: string; // Firebase key
//   confidence: number;
//   image_url: string;
//   status: "Shoplifting" | "Normal" | "Warning" | string; // you can restrict values as needed
//   timestamp: string; // ISO format, e.g. "2025-06-16T14:54:49.382791"
// }

// export default function LatestAlert() {
//   const [latestAlerts, setLatestAlerts] = useState<IAlert[]>([]);

//   useEffect(() => {
//     const alertsRef = ref(database, "/alerts");

//     const unsubscribe = onValue(alertsRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         // Convert object of alerts to array of entries
//         const alertsArray = Object.entries(data).map(([id, value]) => {
//           const alert = value as Omit<IAlert, "id">; // safely cast value
//           return { id, ...alert };
//         });

//         // Sort by timestamp (newest last)
//         alertsArray.sort(
//           (a, b) =>
//             new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
//         );

//         setLatestAlerts(alertsArray);

//         // const lastAlert = alertsArray[alertsArray.length - 1];
//         // setLatestAlert(lastAlert);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return latestAlerts;

//   // return (
//   //   <div>
//   //     <h2>Latest Alert</h2>
//   //     {latestAlert ? (
//   //       <div className="space-y-2">
//   //         <img src={latestAlert.image_url} alt="Alert" width={200} />
//   //         <p>
//   //           <strong>Status:</strong> {latestAlert.status}
//   //         </p>
//   //         <p>
//   //           <strong>Confidence:</strong> {latestAlert.confidence}
//   //         </p>
//   //         <p>
//   //           <strong>Timestamp:</strong> {latestAlert.timestamp}
//   //         </p>
//   //       </div>
//   //     ) : (
//   //       <p>Loading...</p>
//   //     )}
//   //   </div>
//   // );
// }

// useLatestAlerts.ts
"use client";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase";
import type { IAlert } from "@/interfaces"; // or inline like before
import { useDashboardContext } from "@/context/dashboardContext";

export function useLatestAlerts() {
  const [latestAlerts, setLatestAlerts] = useState<IAlert[]>([]);
  const { setAlertsCount } = useDashboardContext();

  useEffect(() => {
    const alertsRef = ref(database, "/alerts");

    const unsubscribe = onValue(alertsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const alertsArray = Object.entries(data).map(([id, value]) => {
          const alert = value as Omit<IAlert, "id">;
          return { id, ...alert };
        });

        alertsArray.sort(
          (a, b) =>
            new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        );

        setLatestAlerts(alertsArray);
        setAlertsCount(alertsArray.length);
      }
    });

    return () => unsubscribe();
  }, []);

  return latestAlerts;
}
