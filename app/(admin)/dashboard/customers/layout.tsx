import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Customers",
    default: "Customers",
  },
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Customers",
    description: "Customers",
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
