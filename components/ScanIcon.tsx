"use client";
import { checkAccessToken } from "../app/api/actions/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";

const ScanIcon = () => {
  const token = Cookies.get("token") ?? "";
  console.log(token);

  return (
    <div
      onClick={async () => {
        const res = await checkAccessToken(token);
        if (res) redirect("/scan");
      }}
      className="top-1/4 right-0 z-50 fixed bg-white shadow-md px-3 py-2 border-2 border-input rounded-l-full w-fit cursor-pointer"
    >
      <Image
        src={"/images/scanicon.png"}
        alt="smartmart"
        width={60}
        height={60}
      />
    </div>
  );
};

export default ScanIcon;
