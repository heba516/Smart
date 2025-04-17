import Image from "next/image";

export interface IInventoryStatus {
    src: string;
    name: string;
    number: string;
    numberColor: string;
    arrowImg: string;
    percent: number;
    percentIncreased: boolean;
}

const inventoryStatus: IInventoryStatus[] = [
    {
        src: "/images/inventoryAvailableProducts.svg",
        name: "available products",
        number: "10,320",
        numberColor: "#24A855",
        arrowImg: "/images/availableProductsArrow.svg",
        percent: 7,
        percentIncreased: true,
    },
    {
        src: "/images/inventoryLowOfStock.svg",
        name: "low of stock",
        number: "5073",
        numberColor: "#F99141",
        arrowImg: "/images/lowStockArrow.svg",
        percent: 7,
        percentIncreased: true,
    },
    {
        src: "/images/inventoryOutofStock.svg",
        name: "out of stock",
        number: "893",
        numberColor: "#ED1C24",
        arrowImg: "/images/outofStockArrow.svg",
        percent: -5,
        percentIncreased: false,
    },
];

export default function InventoryStatus() {
    return (
        <section className="flex my-8 gap-5 justify-start mx-auto">
            {inventoryStatus.map((box, index) => (
                <div
                    className="rounded-xl border border-[#D8DADC] py-4 px-7 space-y-3 "
                    key={index}
                >
                    <div className="flex justify-between items-start gap-6">
                        <div className="space-y-2">
                            <h4 className=" font-semibold text-2xl text-grayColor capitalize ">
                                {box.name}
                            </h4>
                            <p className="font-medium text-sm text-[#999CA0] ">
                                <span
                                    className="font-bold text-black text-2xl me-1"
                                    style={{ color: box.numberColor }}
                                >
                                    {box.number}
                                </span>
                                products
                            </p>
                        </div>
                        <Image
                            className=""
                            src={box.src}
                            width={59}
                            height={57}
                            alt="box image"
                        />
                    </div>
                    <div className="flex space-x-1 ">
                        <Image
                            className=""
                            src={`${
                                box.percentIncreased == true
                                    ? "/images/increasingArrow.svg"
                                    : "/images/decreasingArrow.svg"
                            }`}
                            width={21}
                            height={21}
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
