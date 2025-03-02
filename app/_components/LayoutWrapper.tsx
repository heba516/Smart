"use client";

import { usePathname } from "next/navigation";
import OfferBar from "@/app/_components/OfferBar";
import NavBar from "@/app/_components/NavBar";

export default function LayoutWrapper() {
  const pathname = usePathname();
  const excludedRoutes = [
    "/login",
    "/signup",
    "/login",
    "/signup",
    "/verify",
    "/reset_password",
    "/forget_password",
    "/verification_code",
  ];

  if (excludedRoutes.includes(pathname)) {
    return <></>;
  }

  return (
    <>
      <section className="top-0 z-50 sticky w-full">
        <OfferBar />
        <NavBar />
      </section>
    </>
  );
}
