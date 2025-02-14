import Image from "next/image";
export interface IFeatures {
  src: string;
  title: string;
  desc: string;
}

const aifeatures: IFeatures[] = [
  {
    src: "/images/aiFeature1.png",
    title: "Personalized Offers",
    desc: "The system analyzes customer behavior to offer tailored promotions that match their interests. ",
  },
  {
    src: "/images/aiFeature2.png",
    title: "Stock  Optimization",
    desc: "AI analyzes browsing and purchase history to recommend relevant products, sales by encouraging more purchases.",
  },
  {
    src: "/images/aiFeature3.png",
    title: "Product Suggestions",
    desc: "AI predicts demand to optimize stock, preventing overstock and stock-outs, while improving availability.",
  },
];

export default function AIFeatures() {
  return (
    <section className="gap-10 grid grid-cols-1 lg:grid-cols-3 mt-14 px-5 md:px-16 lg:px-20">
      {aifeatures.map((feature, index) => (
        <div
          className="group flex flex-col items-center space-y-4 bg-[#F7F7F7] hover:bg-[#FF434A] px-5 py-3 rounded-[30px] duration-300"
          key={index}
        >
          <div className="text-left">
            <div className="flex justify-between items-center ps-1">
              <h3 className="group-hover:text-white font-bold text-[#ED1C24] lg:text-[23px] text-xl uppercase duration-300">
                {feature.title}
              </h3>
              <Image
                className="group-hover:rotate-45 duration-300"
                src="images/aiUpArrow.svg"
                width={55}
                height={55}
                alt="up arrow"
              />
            </div>
            <p className="group-hover:text-white px-2 font-normal lg:text-[15px] text-sm">
              {feature.desc}
            </p>
          </div>
          <div>
            <Image
              className="px-2 w-full"
              src={feature.src}
              width={337}
              height={355}
              alt="AI Feature"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
