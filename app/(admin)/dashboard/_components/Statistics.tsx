import Image from "next/image";

export interface IStatistics {
    src: string;
    name: string;
    score: string;
    scoreUnite: string;
    percent: number;
    percentIncreased: boolean;
}

const statistics: IStatistics[] = [
    {
        src: "/images/activeUsers.svg",
        name: "Active users",
        score: "300",
        scoreUnite: "users",
        percent: 7,
        percentIncreased: true,
    },
    {
        src: "/images/totalSales.svg",
        name: "Total Sales",
        score: "41,327",
        scoreUnite: "EGP",
        percent: 5,
        percentIncreased: true,
    },
    {
        src: "/images/totalProductsSold.svg",
        name: " Total Products Sold",
        score: "892",
        scoreUnite: "products",
        percent: -3,
        percentIncreased: false,
    },
    {
        src: "/images/averageBasketValue.svg",
        name: "Average Basket Value",
        score: "523",
        scoreUnite: "EGP",
        percent: -5,
        percentIncreased: true,
    },
];

export default function Statistics() {
    return (
        <section className="grid grid-cols-4 my-6 mx-auto gap-4">
            {statistics.map((box, index) => (
                <div
                    className=" rounded-xl border border-[#D8DADC] py-6 px-8 space-y-3 "
                    key={index}
                >
                    <div className="flex justify-between items-start gap-6">
                        <div className="space-y-2">
                            <h4 className=" font-semibold text-base text-grayColor  ">
                                {box.name}
                            </h4>
                            <p className="font-medium text-sm text-[#999CA0] ">
                                <span className="font-bold text-black text-2xl me-1">
                                    {box.score}
                                </span>
                                {box.scoreUnite}
                            </p>
                        </div>
                        <Image
                            className=""
                            src={box.src}
                            width={44}
                            height={44}
                            alt="box image"
                        />
                    </div>
                    <div className="flex space-x-1 ">
                        <Image
                            className=""
                            src={`${
                                box.percentIncreased == true
                                    ? "images/increasingArrow.svg"
                                    : "images/decreasingArrow.svg"
                            }`}
                            width={24}
                            height={24}
                            alt="arrow"
                        />
                        <span
                            className={`${
                                box.percentIncreased == true
                                    ? "text-[#16A34A]"
                                    : "text-[#ED1C24]"
                            } font-medium text-base`}
                        >
                            {box.percent > 0 ? "+" : ""}
                            {box.percent}%
                        </span>
                        <p className="font-medium text-base text-grayColor ms-2">
                            (since last week)
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
