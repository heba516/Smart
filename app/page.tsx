import Features from "@/components/Features";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import OfferBar from "@/components/OfferBar";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <div>
      <section className="sticky top-0 w-full z-50">
        <OfferBar />
        <NavBar />
      </section>

      <Link
        href={""}
        className="fixed right-0 top-1/4 w-fit py-2 px-3 rounded-l-full bg-white z-50"
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
        className="lg:w-[90%] mx-auto min-h-screen py-5 px-10 flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0"
      >
        <Image
          src={"/images/aboutus.png"}
          alt="smartmart"
          width={750}
          height={700}
          loading="lazy"
          className="lg:max-w-[550px] xl:max-w-[800px]"
        />
        <article className="flex flex-col items-center text-center space-y-5">
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
          <p className="2xl:w-[70%] text-black text-base xl:text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur. Lacus vitae tincidunt in leo
            porttitor neque a. Felis eget netus est semper est faucibus dolor.
            Eu dignissim quam nibh neque ipsum pharetra libero. Massa elementum
            ultrices auctor non pellentesque a porta mauris amet. At cras eget
            vel viverra donec.
          </p>
        </article>
      </section>

      {/* Features */}
      <div className="min-h-screen mx-auto text-center py-5">
        <Heading
          title="Features in Smart"
          desc="Lorem ipsum dolor sit amet consectetur. Sed elementum eget nascetur
        rutrum fames a."
        />
        <Features />
      </div>
    </div>
  );
}
