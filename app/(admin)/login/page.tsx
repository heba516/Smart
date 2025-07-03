// "use client";
import LoginForm from "@/app/(admin)/login/_components/LoginForm";
// import Typewriter from "typewriter-effect";
import Image from "next/image";
import TypeWriter from "./_components/TypeWriter";

export default function page() {
  return (
    <div className="h-screen lg:gap-12 flex justify-evenly items-center place-content-center overflow-hidden px-10">
      <div className="hidden relative lg:flex flex-col gap-5 bg-gradient-to-b from-primaryRed to-[#CC0000] py-6 px-8 pb-10 rounded-lg shadow-xl">
        {/* Background Circles */}
        <Image
          className="absolute top-[-50px] right-[-20px]"
          src="/images/loginBigCircle.svg"
          alt="circle"
          width={209}
          height={209}
        />
        <Image
          className="absolute top-[50px] right-[-65px]"
          src="/images/loginMediumCircle.svg"
          alt="circle"
          width={135}
          height={135}
        />
        <Image
          className="absolute bottom-[-50px] left-[-20px]"
          src="/images/loginBigCircle.svg"
          alt="circle"
          width={159}
          height={159}
        />
        <Image
          className="absolute bottom-[50px] left-[-65px]"
          src="/images/loginMediumCircle.svg"
          alt="circle"
          width={85}
          height={85}
        />
        <Image
          className="absolute top-[145px] right-[90px]"
          src="/images/loginSmallCircle.svg"
          alt="circle"
          width={23}
          height={23}
        />

        {/* Welcome Message */}
        <header className="space-y-2 lg:ps-10">
          <h1 className="text-white text-4xl lg:text-[45px] font-semibold leading-snug lg:leading-[60px]">
            Welcome to <br /> SMART Dashboard
          </h1>
          <TypeWriter />
        </header>

        {/* Image Content */}
        <div className="relative min-h-[220px]">
          <Image
            className="ms-8 mb-20"
            src="/images/loginHomeImage.svg"
            alt="phone"
            width={540}
            height={120}
            priority
          />
          <Image
            className="absolute bottom-0 mt-8 me-8"
            src="/images/overallEarningChart.svg"
            alt="chart"
            width={540}
            height={100}
            priority
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-[557px] rounded-xl shadow-xl px-3 lg:px-0 py-3">
        <div className="flex flex-col justify-between items-center mx-auto p-3 w-full">
          <div className="space-y-4 mb-9 text-center">
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
