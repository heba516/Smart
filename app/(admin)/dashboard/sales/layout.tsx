import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Sales",
    default: "Sales",
  },
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Sales",
    description: "Sales",
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
