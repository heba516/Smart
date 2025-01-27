"use client";
import { ReactNode } from "react";
import { Button } from "./ui";
import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";

const SignupWithGoogleBtn = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      variant={"outline"}
      className="w-full  h-12 text-base leading-4 font-semibold rounded-lg border-black hover:bg-transparent hover:text-primaryRed hover:border-primaryRed"
    >
      <Icon className="h-6 w-6" icon="devicon:google" />
      {children}
    </Button>
  );
};

export default SignupWithGoogleBtn;
