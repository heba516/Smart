import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Support & Help",
    default: "Support & Help",
  },
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Support & Help",
    description: "Support & Help",
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
