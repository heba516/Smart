import Image from "next/image";
import Link from "next/link";
import Features from "@/app/_components/Features";
import Heading from "@/components/Heading";
import Landing from "@/app/_components/Landing";
import AIFeatures from "@/app/_components/AIFeatures";
import SpecialSystem from "@/app/_components/SpecialSystem";
import GetOurApp from "@/app/_components/GetOurApp";
import ContactUs from "@/app/_components/ContactUs";
import Footer from "@/app/_components/Footer";
import Questions from "@/app/_components/Questions";
import { Reviews } from "@/app/_components/Reviews";
import ScanIcon from "@/components/ScanIcon";

export default function Home() {
  return (
    <div>
      <ScanIcon />

      {/* Landing */}
      <Landing />

      {/* About us */}
      <section
        id="aboutus"
        className="flex lg:flex-row flex-col items-center space-y-5 lg:space-y-0 mx-auto py-5 lg:w-[90%] min-h-screen"
      >
        <Image
          src={"/images/aboutus.png"}
          alt="smartmart"
          width={750}
          height={700}
          loading="lazy"
          className="md:px-10 lg:max-w-[550px] xl:max-w-[800px]"
        />
        <article className="flex flex-col items-center space-y-5 px-10 text-center">
          <Image
            src={"/images/logo.png"}
            alt="smartmart"
            width={60}
            height={60}
            loading="lazy"
          />
          <h2 className="font-semibold text-3xl lg:text-4xl capitalize">
            what is <span className="text-primaryRed">Smart ?</span>
          </h2>
          <p className="2xl:w-[90%] font-medium text-black text-base xl:text-xl">
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
      <div className="space-y-5 mx-auto pb-28 text-center">
        <Heading
          label="Features in Smart"
          desc="Lorem ipsum dolor sit amet consectetur. Sed elementum eget nasceturrutrum fames a."
        />
        <Features />
      </div>

      {/*Special System */}
      <div className="place-content-center mx-auto py-10 min-h-screen text-center">
        <Heading
          label="What Makes Our System Special?"
          desc="Smart Retail Innovations: Enhanced Shopping, Security, and Inventory Management"
        />
        <SpecialSystem />
      </div>

      {/*Ai Features */}
      <div className="place-content-center mx-auto py-10 min-h-screen text-center">
        <Heading
          label="AI-Enhanced Customer Experience & Retail Insights"
          desc="Smart Retail Innovations: Enhanced Shopping, Security, and Inventory Management"
        />
        <AIFeatures />
      </div>

      {/* Reviews */}
      <Reviews />

      {/*Get Our App*/}
      <div className="hidden xl:flex justify-center items-center gap-10 mx-auto px-20 min-h-screen text-center">
        <GetOurApp />
      </div>

      {/* Questions */}
      <Questions />

      {/*Future Shopping*/}
      <div className="flex flex-col justify-center items-center lg:items-start bg-[url('/images/futureShopping.png')] bg-cover mx-auto my-10 p-12 lg:p-[150px] h-[635px] min-h-screen text-center">
        <h2 className="mb-2 w-full lg:w-[55%] font-extrabold text-[32px] text-white md:text-[64px] uppercase">
          THE FUTURE OF SHOPPING IS HERE START NOW !
        </h2>
        <div className="flex md:flex-row flex-col gap-8 mt-10 ps-17 lg:ps-14">
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
      <div className="mx-auto mt-[180px] w-full">
        <Footer />
      </div>
    </div>
  );
}
