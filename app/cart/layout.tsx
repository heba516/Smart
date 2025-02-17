import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "",
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
