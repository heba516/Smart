import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GetOurApp() {
    return (
        <section className="xl:flex justify-center items-center gap-10 hidden mx-auto p-20 in-h-screen text-center text-centerxl:flex">
            <div className="flex flex-col justify-center items-center gap-16">
                <header className="px-6">
                    <h2 className="mb-2 font-extrabold text-4xl text-primaryRed md:text-4xl uppercase">
                        GET OUR APP NOW ..!
                    </h2>
                    <p className="font-medium text-medGray text-sm md:text-base">
                        Get instant access to seamless product scanning,
                        personalized offers, and secure payments—all from the
                        palm of your hand. Download now and simplify your
                        shopping journey!
                    </p>
                </header>
                <div className="flex gap-11">
                    <Link href={""}>
                        <Image
                            src={"/images/blackAppStore.png"}
                            alt="appStore"
                            width={180}
                            height={60}
                        />
                    </Link>

                    <Link href={""}>
                        <Image
                            src={"/images/blackGooglePlay.png"}
                            alt="googlePlay"
                            width={203}
                            height={60}
                        />
                    </Link>
                </div>
            </div>
            <Image
                src={"/images/getApp.png"}
                alt="hand with phone"
                width={647}
                height={716}
            />
        </section>
    );
}
