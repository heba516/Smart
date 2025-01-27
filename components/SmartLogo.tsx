import Image from "next/image";

const SmartLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      <Image
        className="mx-auto"
        src={"/images/logo.png"}
        width={45}
        height={45}
        alt="logo"
        loading="lazy"
      />
      <p className="font-semibold text-2xl leading-7">
        S<span className="text-primaryRed">mart</span>
      </p>
    </div>
  );
};

export default SmartLogo;
