import Features from "@/components/Features";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Link
        href={""}
        className="fixed right-0 top-1/4 w-fit py-2 px-3 rounded-l-full bg-white"
      >
        <Image
          src={"/images/scanicon.png"}
          alt="smartmart"
          width={60}
          height={60}
        />
      </Link>
      <Features />
    </div>
  );
}
