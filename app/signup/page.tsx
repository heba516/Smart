import SignupForm from "@/app/signup/components/SignupForm";
import SignupWithGoogleBtn from "@/components/SignupWithGoogleBtn";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center mx-auto p-5 w-full lg:w-1/2">
      <div className="flex justify-between items-center w-full">
        <p className="font-medium text-base">
          Already have account ?{" "}
          <Link
            className="text-primaryRed hover:text-secondaryRed underline"
            href="/login"
          >
            Log in
          </Link>
        </p>
        <Link className="text-medGray underline" href={""}>
          need help ?
        </Link>
      </div>
      <div className="space-y-1 mt-16 mb-8 text-center">
        <Image
          className="mx-auto"
          src={"/images/logo.png"}
          width={52}
          height={57}
          alt="logo"
        />
        <h1 className="font-bold text-4xl text-primaryRed leading-9">
          Create account
        </h1>
        <p className="font-medium text-[12px] text-medGray leading-4">
          Sign up to start our free journey
        </p>
      </div>
      <div className="w-full xl:w-3/4">
        <SignupWithGoogleBtn>Sign up with Google</SignupWithGoogleBtn>
        <div className="inline-flex justify-center items-center w-full">
          <hr className="border-0 bg-medGray my-8 w-full h-px" />
          <span className="left-1/2 absolute bg-white px-3 font-medium text-base text-medGray -translate-x-1/2">
            Or sign up with
          </span>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default page;
