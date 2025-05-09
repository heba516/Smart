import React from "react";
import { SecurityTable } from "./_components/SecurityTable";
import FormHeader from "../inventory/[action]/_components/FormHeader";
import TheftImage from "./_components/TheftImage";
import { Button } from "@/components/ui";
import Image from "next/image";

const page = () => {
  const images = [
    "/images/security1.png",
    "/images/security1.png",
    "/images/security1.png",
    "/images/security1.png",
    "/images/security1.png",
    "/images/security1.png",
    // "/images/security1.png",
    // "/images/security1.png",
    // "/images/security1.png",
  ];
  // const maxToShow = images.length > 4 ? 3 : 4;
  // const extraCount = images.length - maxToShow;

  return (
    <div className="py-5 space-y-10">
      <FormHeader page={"security"} />
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mr-5 capitalize">
            live camera feed
          </h2>
          <Button className="bg-primaryRed rounded-lg font-semibold text-md capitalize w-44">
            view all
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {images.length <= 4 ? (
            images.map((src, index) => (
              <div key={index} className="relative">
                <TheftImage
                  src={src}
                  info={`cam 1 - Snacks Section at 10:45 AM`}
                />
              </div>
            ))
          ) : (
            <>
              {images.slice(0, 3).map((src, index) => (
                <div key={index} className="relative">
                  <TheftImage
                    src={src}
                    info={`cam 1 - Snacks Section at 10:45 AM`}
                  />
                </div>
              ))}
              <div className="grid grid-cols-2 grid-rows-2 gap-1 relative h-[154px] rounded-lg overflow-hidden">
                {images.slice(3, 7).map((src, index) => (
                  <Image
                    width={100}
                    height={100}
                    key={index}
                    src={src}
                    alt={`Image ${index}`}
                    className="w-full h-full rounded-lg"
                  />
                ))}
                {images.length > 7 && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-xl font-bold">
                    +{images.length - 3}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <SecurityTable />
    </div>
  );
};

export default page;
