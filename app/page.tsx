import Features from "@/components/Features";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import OfferBar from "@/components/OfferBar";
import Landing from "@/components/Landing";
import AIFeatures from "@/components/AIFeatures";
import SpecialSystem from "@/components/SpecialSystem";
import GetOurApp from "@/components/GetOurApp";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div>
            <section className="top-0 z-50 sticky w-full">
                <OfferBar />
                <NavBar />
            </section>

            <Link
                href={""}
                className="top-1/4 right-0 z-50 fixed bg-white px-3 py-2 rounded-l-full w-fit"
            >
                <Image
                    src={"/images/scanicon.png"}
                    alt="smartmart"
                    width={60}
                    height={60}
                />
            </Link>

            <Landing />

            {/* Features */}
            <div className="place-content-center mx-auto py-10 min-h-screen text-center">
                <Heading
                    title="Features in Smart"
                    desc="Lorem ipsum dolor sit amet consectetur. Sed elementum eget nascetur
        rutrum fames a."
                />
                <Features />
            </div>

            {/*Special System */}
            <div className="place-content-center mx-auto py-10 min-h-screen text-center">
                <Heading
                    title="What Makes Our System Special?"
                    desc="Smart Retail Innovations: Enhanced Shopping, Security, and Inventory Management"
                />
                <SpecialSystem />
            </div>

            {/*Ai Features */}
            <div className="place-content-center mx-auto py-10 min-h-screen text-center">
                <Heading
                    title="AI-Enhanced Customer Experience & Retail Insights"
                    desc="Smart Retail Innovations: Enhanced Shopping, Security, and Inventory Management"
                />
                <AIFeatures />
            </div>

            {/*Get Our App*/}
            <div className="xl:flex justify-center items-center gap-10 hidden mx-auto p-20 min-h-screen text-center">
                <GetOurApp />
            </div>

            {/*Future Shopping*/}
            <div className="flex flex-col justify-center items-center lg:items-start bg-[url('/images/futureShopping.png')] bg-cover mx-auto my-10 p-12 lg:p-[150px] h-[635px] min-h-screen text-center">
                <h2 className="mb-2 w-full lg:w-[55%] font-extrabold text-[32px] text-white md:text-[64px] uppercase">
                    THE FUTURE OF SHOPPING IS HERE START NOW !
                </h2>
                <div className="flex md:flex-row flex-col gap-8 mt-10 lg:ps-14 ps-20">
                    <Link href={""}>
                        <Image
                            src={"/images/whiteGooglePlay.png"}
                            alt="googlePlay"
                            width={201}
                            height={58}
                        />
                    </Link>

                    <Link href={""}>
                        <Image
                            src={"/images/whiteAppStore.png"}
                            alt="appStore"
                            width={201}
                            height={58}
                        />
                    </Link>
                </div>
            </div>

            {/*Contact Us */}
            <div className="place-content-center bg-lighGray mx-auto py-10 min-h-screen">
                <ContactUs />
            </div>

            {/* Footer */}
            <div className="mx-auto w-full min-h-screen text-center">
                <Footer />
            </div>
        </div>
    );
}
