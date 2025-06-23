import Image from "next/image";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/";
import { Plus } from "lucide-react";
import { Icon } from "@iconify/react";
import { IAlert } from "@/interfaces";
import TheftDetailsAndTime from "./TheftDetailsAndTime";


interface ViewTheftProps {
  latestAlert: IAlert;
}
export function ViewTheft({ latestAlert }: ViewTheftProps) {
    const image_url = "/images/viewTheftImage.png";

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="bg-primaryRed text-white text-xl"
                    size={"lg"}
                >
                    View Camera
                </Button>
            </DialogTrigger>
            <DialogContent className="min-w-[50%] flex flex-col align-center py-7 px-11max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        <TheftDetailsAndTime latestAlert={latestAlert!} />
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col items-center space-y-5">
                    <div className="flex justify-between items-center w-full ">
                        <Button
                            variant="default"
                            //   size="sm"
                            className="bg-secondaryRed text-white px-5 text-[17px] h-[37px] rounded-lg font-normal"
                        >
                            {/* <Siren className="h-6 w-6" color="#ffffff" /> */}
                            <Icon
                                icon="mdi:alarm-light"
                                width="22"
                                height="22"
                            />
                            Trigger Alarm
                        </Button>
                        <div className="flex gap-5">
                            <Button
                                variant="default"
                                // size="sm"
                                className="bg-[#F8F8F8] px-5 text-[17px] h-[37px] rounded-lg font-normal text-grayColor border border-input"
                            >
                                <Plus width="20" height="20" />
                                Add Incident Report
                            </Button>
                            <Button
                                variant="default"
                                // size="sm"
                                className="bg-[#F8F8F8] px-5 text-[17px] h-[37px] rounded-lg font-normal text-grayColor border border-input"
                            >
                                Dismiss
                            </Button>
                        </div>
                    </div>
                        <div className="space-y-3 w-full">
                            <p className="text-lg text-[#989797] font-semibold">
                                Cam 1
                            </p>
                            <Image
                                src={latestAlert?.image_url}
                                width={600}
                                height={500}
                                alt="Theft image"
                            />
                        </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
