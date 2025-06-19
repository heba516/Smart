import { IFeatures } from "@/interfaces";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features: IFeatures[] = [
  {
    itm: "/images/feature2.svg",
    title: "Smart shopping",
    desc: "Lorem ipsum dolor sit amet consectetur. Sed elementum eget nascetur rutrum fames a.",
  },
  {
    itm: "/images/feature3.svg",
    title: "Fast Checkout",
    desc: "Lorem ipsum dolor sit amet consectetur. Sed elementum eget nascetur rutrum fames a.",
  },
  {
    itm: "/images/feature1.svg",
    title: "Advanced security",
    desc: "Lorem ipsum dolor sit amet consectetur. Sed elementum eget nascetur rutrum fames a.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="xl:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center gap-3"
    >
      {features.map((feature, index) => (
        <div
          className="group relative overflow-hidden w-[312px] h-[294px] rounded-[36px] py-7 px-8 shadow-md border-b-8 border-b-primaryRed text-center flex flex-col items-center space-y-5"
          key={index}
        >
          <Image
            className="text-primaryRed child group-hover:-translate-y-1 duration-700"
            src={feature.itm}
            width={115}
            height={115}
            alt="Feature"
          />

          <h3 className="text-xl font-semibold child group-hover:-translate-y-1 duration-700">
            {feature.title}
          </h3>

          <p className="text-xs font-medium text-medGray child group-hover:opacity-0 duration-700">
            {feature.desc}
          </p>

          <Link
            href={"/"}
            className="absolute -bottom-16 h-16 bg-primaryRed w-full text-xl flex items-center justify-center text-white font-semibold child group-hover:bottom-0 duration-300"
          >
            Learn More <MoveRight className="ml-4" />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Features;
