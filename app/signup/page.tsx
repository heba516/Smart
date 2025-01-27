import SignupForm from "@/components/forms/SignupForm";
import SignupWithGoogleBtn from "@/components/SignupWithGoogleBtn";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full lg:w-1/2 p-5 mx-auto flex flex-col items-center my-">
      <div className="w-full flex items-center justify-between">
        <p className="text-base font-medium">
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
      <div className="space-y-1 text-center mt-16 mb-8">
        <Image
          className="mx-auto"
          src={"/logo.png"}
          width={52}
          height={57}
          alt="logo"
        />
        <h1 className="text-4xl font-bold text-primaryRed leading-9">
          Create account
        </h1>
        <p className="text-medGray text-[12px] font-medium leading-4">
          Sign up to start our free journey
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <SignupWithGoogleBtn>Sign up with Google</SignupWithGoogleBtn>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-medGray border-0 " />
          <span className="absolute px-3 text-base font-medium text-medGray -translate-x-1/2 bg-white left-1/2 ">
            Or sign up with
          </span>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default page;
