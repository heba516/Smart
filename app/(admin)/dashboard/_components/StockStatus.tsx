import Image from "next/image";
import Link from "next/link";

export interface IStockStatus {
  src: string;
  name: string;
  number: number;
  numberColor: string;
  arrowImg: string;
}

const stockStatus: IStockStatus[] = [
  {
    src: "/images/availableProduct.png",
    name: "available products",
    number: 2310,
    numberColor: "#24A855",
    arrowImg: "/images/availableProductsArrow.svg",
  },
  {
    src: "/images/lowStock.png",
    name: "low stock",
    number: 310,
    numberColor: "#F99141",
    arrowImg: "/images/lowStockArrow.svg",
  },
  {
    src: "/images/outofStock.png",
    name: "out of stock",
    number: 64,
    numberColor: "#ED1C24",
    arrowImg: "/images/outofStockArrow.svg",
  },
];
export default function StockStatus() {
  return (
    <section className="flex flex-col space-y-8 py-4">
      {stockStatus.map((stock, index) => (
        <Link href={"/dashboard/inventory"} className="mx-3" key={index}>
          <div className="flex justify-between">
            <div className="flex items-start space-x-3">
              <Image src={stock.src} width={30} height={23} alt="stock box" />
              <h3 className="font-medium text-xl text-grayColor">
                {stock.name}
              </h3>
            </div>

            <div className="flex items-center space-x-1">
              <span
                className="font-semibold text-xl"
                style={{ color: stock.numberColor }}
              >
                {stock.number}
              </span>
              <Image src={stock.arrowImg} width={12} height={24} alt="arrow" />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
