"use client";
import LoginForm from "@/app/(admin)/login/_components/LoginForm";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function page() {
  return (
    <div className="h-screen gap-12 flex justify-evenly items-center place-content-center overflow-hidden">
      <div className="relative flex flex-col gap-5 bg-primaryRed p-8 pb-12 rounded-lg shadow-xl">
        <Image
          className="top-[-50px] right-[-20px] absolute"
          src={"/images/loginBigCircle.svg"}
          alt="circle"
          width={209}
          height={209}
        />
        <Image
          className="top-[50px] right-[-65px] absolute"
          src={"/images/loginMediumCircle.svg"}
          alt="circle"
          width={135}
          height={135}
        />
        <Image
          className="bottom-[-50px] left-[-20px] absolute"
          src={"/images/loginBigCircle.svg"}
          alt="circle"
          width={159}
          height={159}
        />
        <Image
          className="bottom-[50px] left-[-65px] absolute"
          src={"/images/loginMediumCircle.svg"}
          alt="circle"
          width={85}
          height={85}
        />

        <Image
          className="top-[145px] right-[90px] absolute"
          src={"/images/loginSmallCircle.svg"}
          alt="circle"
          width={23}
          height={23}
        />
        <header className=" ps-10 space-y-2">
          <h1 className="font-semibold text-[45px] text-white">
            Welcome to <br /> SMART Dashboard
          </h1>
          <div className="font-normal text-[#FFCFCF] text-[24px]">
            <Typewriter
              options={{
                strings: ["Track, Analyize, optimize"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </header>

        <div className="flex flex-col items-center">
          <div className="flex justify-evenly w-full">
            <Image
              className=""
              src={"/images/revenueChart.svg"}
              alt="phone"
              width={160}
              height={120}
            />
            <Image
              className=""
              src={"/images/footfallChart.svg"}
              alt="footfall"
              width={160}
              height={120}
            />
            <Image
              className=""
              src={"/images/cartValueChart.svg"}
              alt="cartValue"
              width={160}
              height={120}
            />
          </div>
          <Image
            className="mt-8"
            src={"/images/overallEarningChart.svg"}
            alt="overallEarning"
            width={580}
            height={170}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-[557px] rounded-xl shadow-xl">
        <div className="flex flex-col justify-between items-center mx-auto p-3 w-full">
          <div className="space-y-4 mb-5 text-center">
            <Image
              className="mx-auto"
              src={"/images/logo.png"}
              width={64}
              height={70}
              alt="logo"
            />
            <h1 className="font-bold text-[36px] text-primaryRed leading-9 mb-6 ">
              Log in
            </h1>
            <p className="font-medium text-medGray leading-4 ">
              Log in to Smart’s powerful dashboard for real-time insights
            </p>
          </div>
          <div className="w-full lg:w-3/4">
            <LoginForm />
          </div>
        </div>
        <p className="font-medium text-sm text-medGray text-center mt-[60px] mb-4">
          2024@ SMART All Right Reseved
        </p>
      </div>
    </div>
  );
}
