import LoginForm from "@/components/forms/LoginForm";
import SignupWithGoogleBtn from "@/components/SignupWithGoogleBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-1 px-2 sm:px-16 lg:px-0   lg:grid-cols-2 gap-4 h-screen font-urban">
      <div className="relative">
        <Image
          className="object-cover hidden lg:block"
          fill
          src="/login.png"
          alt="man-delivering-groceries-customers"
        />
      </div>
      <div className="flex flex-col item-center justify-center">
        <div className="w-full p-3 mx-auto flex flex-col items-center justify-between">
          <div className="w-full  flex items-center justify-center">
            <p className="text-base font-medium">
              Don’t have account ?{" "}
              <Link
                className="text-primaryRed hover:text-secondaryRed underline"
                href="/signup"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div className="space-y-1 text-center mt-6 mb-5">
            <Image
              className="mx-auto"
              src={"/logo.png"}
              width={52}
              height={57}
              alt="logo"
            />
            <h1 className="text-[32px] font-bold text-primaryRed leading-9">
              Welcome Back !
            </h1>
            <p className="text-medGray text-[14px] font-medium leading-4">
              Let’s get started and go shopping
            </p>
          </div>
          <div className="w-full lg:w-3/4 space-y-1">
            <SignupWithGoogleBtn>Continue with Google</SignupWithGoogleBtn>

            <div className="inline-flex items-center justify-center w-full relattive">
              <hr className="w-full h-px mt-6 mb-4  bg-medGray border-0 " />
              <span className="absolute px-3 text-base mt-2 font-medium text-medGray -translate-x-1/2 bg-white left-1/2 lg:left-3/4">
                Or continue with
              </span>
            </div>

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
