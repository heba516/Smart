import Image from "next/image";

import {
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/";
import { Plus, Siren } from "lucide-react";
// import { useEffect, useState } from "react";
// import { ITheftInfo } from "@/interfaces";
// import { getAllTheft, getTheftInfo } from "@/app/api/actions/securityAction";
// import FormComponentSkeleton from "../../inventory/[action]/_components/FormComponentSkeleton";

export function ViewTheft() {
    const image_url = "/images/viewTheftImage.png";

    // const [theft, setTheft] = useState<ITheftInfo>({
    //     image_url: "",
    //     status: "",
    //     timestamp: "",
    // });
    // const [loading, setLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     async function loadProductInfo() {

    //         setLoading(true);
    //         try {
    //             const res = await getTheftInfo();
    //             if (res?.data?.data) {
    //                 setTheft(res.data.data);
    //             }
    //         } catch (error) {
    //             console.error("Error loading product:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     loadProductInfo();
    // }, []);

    // console.log(theft);
    

    // if (loading) {
    //     return <FormComponentSkeleton />;
    // }

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
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col align-center p-7">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        <div className="space-y-2">
                            <h2 className="text-primaryRed text-2xl font-bold uppercase">
                                Theft Attempt Detected!
                            </h2>
                            <p className="text-primaryRed text-xl font-semibold">
                                Location:{" "}
                                <span className="pr-2 border-r-2 border-medGray mr-2">
                                    Front Entrance
                                </span>
                                Time:{" "}
                                <span>{new Date().toLocaleTimeString()}</span>
                            </p>
                            <p className="text-darkGray text-xl font-medium">
                                Details:{" "}
                                <span className="block">
                                    Motion detected near exit without checkout
                                    confirmation. Security notified.
                                </span>
                            </p>
                        </div>
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col items-center space-y-5">
                    <div className="flex justify-between items-center w-full ">
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-secondaryRed text-white px-6  text-lg"
                        >
                            <Siren className="h-6 w-6" color="#ffffff" />
                            Trigger Alarm
                        </Button>
                        <div className="flex gap-5">
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-[#F8F8F8] px-6 text-lg"
                            >
                                <Plus />
                                Add Incident Report
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-[#F8F8F8] px-6 text-lg"
                            >
                                Dismiss
                            </Button>
                        </div>
                    </div>
                    {image_url && (
                        <div className="space-y-3">
                            <p className="text-xl text-[#989797] font-semibold">
                                Cam 1
                            </p>
                            <Image
                                src={image_url}
                                width={680}
                                height={300}
                                alt="Theft image"
                            />
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
