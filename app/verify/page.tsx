"use client";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();

  const verificationCode = searchParams.get("verificationCode");
  const id = searchParams.get("id");
  return (
    <div>
      <h1 className="text-4xl font-bold text-green-600">Verified</h1>
      <h1 className="text-4xl font-bold text-red-600">Not Verified</h1>
    </div>
  );
};

export default Page;
