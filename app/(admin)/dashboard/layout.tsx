import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Dashboard",
    default: "Dashboard",
  },
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Dashboard",
    description: "Dashboard",
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
