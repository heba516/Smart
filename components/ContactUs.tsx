import Image from "next/image";
import React from "react";
import ContactUsForm from "@/components/forms/ContactUsForm";

export default function ContactUs() {
    return (
        <div>
            <header className="mb-12 px-2 text-center">
                <h2 className="mb-2 font-semibold text-[32px] text-primaryRed md:text-[40px]">
                    Contact Us
                </h2>
                <p className="font-medium text-[15px] text-medGray md:text-lg">
                    Any question or remarks? Just write us a message!
                </p>
            </header>

            <section className="flex md:flex-row flex-col gap-20 bg-white px-20">
                <div className="relative flex flex-col gap-5 bg-primaryRed p-8 rounded md:w-[539px] md:h-[647px]">
                    <Image
                        className="top-[-40px] right-[-20px] absolute"
                        src={"/images/contactusBigCircle.svg"}
                        alt="circle"
                        width={147}
                        height={147}
                    />
                    <Image
                        className="top-[50px] right-[-15px] absolute"
                        src={"/images/contactusSmallCircle.svg"}
                        alt="circle"
                        width={103}
                        height={103}
                    />
                    <header className="mb-14 ps-10">
                        <h2 className="font-semibold text-[28px] text-white">
                            Contact Information
                        </h2>
                        <p className="font-normal text-lg text-medGray">
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
                            <p className="font-normal text-base text-white">
                                +1012 3456 789
                            </p>
                        </div>
                        <div className="flex gap-7">
                            <Image
                                className=""
                                src={"/images/mailIcon.svg"}
                                alt="mail"
                                width={20}
                                height={16}
                            />
                            <p className="font-normal text-base text-white">
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
                            <p className="w-50 font-normal text-base text-white">
                                132 Dartmouth Street Boston, Massachusetts 02156
                                United States
                            </p>
                        </div>
                    </div>
                </div>
                <ContactUsForm />
            </section>
        </div>
    );
}
