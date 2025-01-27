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

      <Landing />

      {/* Features */}
      <div className="min-h-screen place-content-center mx-auto text-center py-10">
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
