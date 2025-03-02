import QRScanner from "./_components/QRScanner";
import Image from "next/image";

const page = () => {
  return (
    <div
      className="text-center px-3 py-6 bg-center bg-[auto_100%] md:bg-cover h-[84vh] md:h-[79vh] space-y-9"
      style={{ backgroundImage: "url('/images/scanCartBg.png')" }}
    >
      <QRScanner />
      <section className="w-full md:w-[50%] py-5 bg-white mx-auto text-center">
        <Image
          src="/images/qr.png"
          width={80}
          height={80}
          alt="qr"
          className="mx-auto"
        />
        <h1 className="text-2xl font-semibold">
          Scan the <span className="text-primaryRed">basket</span>
        </h1>
        <p>To add the product to your cart</p>
      </section>
    </div>
  );
};

export default page;
