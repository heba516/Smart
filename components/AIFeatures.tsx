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
        <section className="xl:px-20 grid grid-cols-1 lg:grid-cols-3  gap-10 mt-14">
            {aifeatures.map((feature, index) => (
                <div
                    className="bg-[#F7F7F7]  rounded-[30px]  py-3 px-5 flex flex-col items-center space-y-4"
                    key={index}
                >
                    <div className="text-left ">
                        <div className="flex items-center justify-between ps-1">
                            <h3 className="text-[23px] uppercase font-bold text-[#ED1C24]">
                                {feature.title}
                            </h3>
                                <Image
									className=""
                                    src="images/aiUpArrow.svg"
                                    width={55}
                                    height={55}
                                    alt="up arrow"
                                />
                        </div>
                        <p className="text-[15px] font-normal px-2">
                            {feature.desc}
                        </p>
                    </div>
                    <div>
                        <Image
                            className="w-full px-2"
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
