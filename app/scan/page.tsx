import QRScanner from "./components/QRScanner";

const page = () => {
  return (
    <div className="text-center px-3 py-6">
      <h1 className="text-3xl font-bold text-primaryRed sm:mb-5">
        Scan Your QR Code
      </h1>
      <QRScanner />
    </div>
  );
};

export default page;
