import Features from "@/components/Features";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import OfferBar from "@/components/OfferBar";
import Landing from "@/components/Landing";
import Questions from "@/components/Questions";

export default function Home() {
  return (
    <div>
      <section className="sticky top-0 w-full z-50">
        <OfferBar />
        <NavBar />
      </section>

      <Link
        href={""}
        className="fixed right-0 top-1/4 w-fit p-2 md:py-[10px] md:px-3 rounded-l-full bg-white border border-lightGray z-50"
      >
        <Image
          src={"/images/scanicon.png"}
          alt="smartmart"
          width={69}
          height={69}
          className="w-12 h-12 md:w-[69px] md:h-[69px]"
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

      {/* Questions */}
      <Questions />
    </div>
  );
}
