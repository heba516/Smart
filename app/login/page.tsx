import LoginForm from "@/app/login/_components/LoginForm";
import SignupWithGoogleBtn from "@/components/SignupWithGoogleBtn";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 px-2 sm:px-16 lg:px-0 h-screen font-urban">
      <div className="relative">
        <Image
          className="hidden lg:block object-cover"
          fill
          src="/images/login.png"
          alt="man-delivering-groceries-customers"
        />
      </div>
      <div className="flex flex-col justify-center item-center">
        <div className="flex flex-col justify-between items-center mx-auto p-3 w-full">
          <div className="flex justify-center items-center w-full">
            <p className="font-medium text-base">
              Don’t have account ?
              <Link
                className="text-primaryRed hover:text-secondaryRed underline"
                href="/signup"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div className="space-y-1 mt-6 mb-5 text-center">
            <Image
              className="mx-auto"
              src={"/images/logo.png"}
              width={52}
              height={57}
              alt="logo"
            />
            <h1 className="font-bold text-[32px] text-primaryRed leading-9">
              Welcome Back !
            </h1>
            <p className="font-medium text-[14px] text-medGray leading-4">
              Let’s get started and go shopping
            </p>
          </div>
          <div className="space-y-1 w-full lg:w-3/4">
            <SignupWithGoogleBtn>Continue with Google</SignupWithGoogleBtn>

            <div className="inline-flex justify-center items-center w-full relattive">
              <hr className="bg-medGray mt-6 mb-4 border-0 w-full h-px" />
              <span className="left-1/2 lg:left-3/4 absolute bg-white mt-2 px-3 font-medium text-medGray text-base -translate-x-1/2">
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
