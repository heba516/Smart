import { IAlert } from '@/interfaces';
import React from 'react'

interface ViewTheftProps {
    latestAlert: IAlert;
  }

export default function TheftDetailsAndTime({ latestAlert }: ViewTheftProps) {
    return (
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
                        new Date(latestAlert.timestamp).toLocaleTimeString(
                            "en-US",
                            {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                            }
                        )}
                </span>
            </p>
            {/* <p className="text-darkGray text-xl font-medium">
            Confidence: {latestAlert?.confidence}
          </p> */}
        </div>
    );
}
