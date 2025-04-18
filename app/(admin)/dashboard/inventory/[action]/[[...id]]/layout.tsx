import type { Metadata } from "next";

type Params = {
  action: "add" | "edit";
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const title = params.action === "add" ? "Add New Product" : "Edit Product";

  return {
    title,
    description: `${title} in your inventory`,
    openGraph: {
      title: `${title} | Inventory Dashboard`,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
