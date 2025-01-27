import EmailInputField from "@/components/forms/EmailInputField";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function CheckEmailForPasswordReset() {
  return (
    <div className="flex flex-col md:px-10 ">
      <div className="w-full px-5 py-6 lg:px-5 md:px-12 md:py-12 flex flex-col">
        <div className="w-full flex items-center justify-start">
          <p className="text-base font-medium">
            <Link className=" flex gap-2" href="/login">
              <Icon icon="weui:back-outlined" width="12" height="24" />
              <span className="text-[16px]">Back to login</span>
            </Link>
          </p>
        </div>
        <div className="mt-20">
          <div className="space-y-4 text-center mt-8 mb-8 md:px-12">
            <h1 className="text-[36px] font-bold text-primaryRed leading-9">
              Reset your Password
            </h1>
            <p className="text-medGray text-[16px] font-medium leading-4 px-8">
              Enter your email address associated with your account and will
              send you an email instruction to reset
            </p>
          </div>
          <EmailInputField />
        </div>
      </div>
    </div>
  );
}
