import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Inventory",
    default: "%s - Inventory",
  },
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Inventory",
    description: "Inventory",
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
