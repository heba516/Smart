import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
