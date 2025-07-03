import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Shelves",
    default: "Shelves",
  },
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Shelves",
    description: "Shelves",
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
