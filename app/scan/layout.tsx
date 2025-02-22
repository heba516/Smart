import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scan Cart QR",
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
