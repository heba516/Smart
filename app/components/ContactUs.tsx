import Image from "next/image";
import React from "react";
import ContactUsForm from "@/components/forms/ContactUsForm";
import Heading from "@/components/Heading";

export default function ContactUs() {
  return (
    <div className="place-content-center bg-lighGray mx-auto py-10 min-h-screen space-y-5">
      <Heading
        label="Contact Us"
        desc="Any question or remarks? Just write us a message!"
      />

      <section className="flex md:flex-row flex-col justify-center gap-20 bg-white px-3 md:px-20 ">
        <div className="relative flex flex-col gap-5 bg-primaryRed md:p-8 px-0 py-14 rounded md:w-[539px] md:h-[647px]">
          <Image
            className="lg:top-[-60px] top-[-50px] right-[-6px] lg:right-[-15px] absolute w-[97px] lg:w-[147px]"
            src={"/images/contactusBigCircle.svg"}
            alt="circle"
            width={147}
            height={147}
          />
          <Image
            className="lg:top-[40px] top-[10px] right-[-10px] lg:right-[-15px] absolute w-[73px] lg:w-[103px]"
            src={"/images/contactusSmallCircle.svg"}
            alt="circle"
            width={103}
            height={103}
          />
          <header className="lg:mb-14 mb-5 lg:ps-10 ps-3">
            <h2 className="font-semibold text-[28px] text-white">
              Contact Information
            </h2>
            <p className="font-normal text-medGray text-lg">
              Say something to and send it now
            </p>
          </header>
          <div className="space-y-12 px-10 w-50">
            <div className="flex gap-7">
              <Image
                className=""
                src={"/images/phoneIcon.svg"}
                alt="phone"
                width={24}
                height={24}
              />
              <p className="font-normal text-white text-base">+1012 3456 789</p>
            </div>
            <div className="flex gap-7">
              <Image
                className=""
                src={"/images/mailIcon.svg"}
                alt="mail"
                width={20}
                height={16}
              />
              <p className="font-normal text-white text-base">
                Smart@gmail.com
              </p>
            </div>
            <div className="flex items-start gap-7">
              <Image
                className=""
                src={"/images/locationIcon.svg"}
                alt="location"
                width={20}
                height={16}
              />
              <p className="md:w-2/3 font-normal text-white text-base">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </section>
    </div>
  );
}
