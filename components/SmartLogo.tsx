import Image from "next/image";

const SmartLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      <Image
        className="mx-auto"
        src={"/logo.png"}
        width={45}
        height={49}
        alt="logo"
      />
      <p className="font-semibold text-2xl leading-7">
        S<span className="text-primaryRed">mart</span>
      </p>
    </div>
  );
};

export default SmartLogo;
