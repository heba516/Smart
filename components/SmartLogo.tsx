import Image from "next/image";

const SmartLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      <Image
        className="mx-auto w-9 h-9 md:w-11 md:h-11"
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
