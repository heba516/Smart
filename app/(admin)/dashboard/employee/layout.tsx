import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Employee",
    default: "Employee",
  },
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Employee",
    description: "Employee",
    images: {
      url: "/images/logo.png",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
