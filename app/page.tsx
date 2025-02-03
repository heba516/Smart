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
import Questions from "@/components/Questions";
import { Reviews } from "@/components/Reviews";

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

            {/* Landing */}
      <Landing />

      {/* About us */}
      <section
        id="aboutus"
        className="lg:w-[90%] mx-auto min-h-screen py-5 flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0"
      >
        <Image
          src={"/images/aboutus.png"}
          alt="smartmart"
          width={750}
          height={700}
          loading="lazy"
          className="lg:max-w-[550px] xl:max-w-[800px] md:px-10"
        />
        <article className="flex flex-col items-center text-center space-y-5 px-10">
          <Image
            src={"/images/logo.png"}
            alt="smartmart"
            width={60}
            height={60}
            loading="lazy"
          />
          <h2 className="capitalize text-3xl lg:text-4xl font-semibold">
            what is <span className="text-primaryRed">Smart ?</span>
          </h2>
          <p className="2xl:w-[90%] text-black text-base xl:text-xl font-medium">
            Simplify Your Shopping Experience with Smart Technology Our{" "}
            <span className="font-bold">IoT-Driven Smart Retail System</span> is
            here to make shopping easier and faster than ever! Through a
            user-friendly <span className="font-bold">mobile app</span> and{" "}
            <span className="font-bold">website</span>, customers can scan
            products, add them to their cart, and complete payments
            effortlessly. No more long queues or complicated processes , just a
            smooth shopping experience , Experience the future of retail with
            smart features that save you time and make every shopping trip more
            convenient!
          </p>
        </article>
      </section>

            {/* Features */}
      <div className="min-h-screen mx-auto text-center py-5 space-y-5">
        <Heading
          label="Features in Smart"
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
            
            {/* Reviews */}
             <Reviews />

            {/*Get Our App*/}
            <div className="xl:flex justify-center items-center gap-10 hidden mx-auto p-20 min-h-screen text-center">
                <GetOurApp />
            </div>
        
        {/* Questions */}
      <Questions />

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


