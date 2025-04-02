import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Settings",
    default: "Settings",
  },
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Settings",
    description: "Settings",
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
