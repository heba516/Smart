import React from "react";
import { redirect } from "next/navigation";
import FormComponent from "../_components/FormComponent";

interface IParams {
  action: "add" | "edit";
  id?: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<IParams>;
}) {
  const { action } = await params;
  const title = action === "add" ? "Add New Product" : "Edit Product";

  return {
    title,
    description: `${title} in your inventory`,
    openGraph: {
      title: `${title} | Inventory Dashboard`,
    },
  };
}

const Page = async ({ params }: { params: Promise<IParams> }) => {
  const { action, id } = await params;

  if (action === "edit" && !id) {
    redirect("/dashboard/inventory");
  }

  return <FormComponent action={action} id={id} />;
};

export default Page;
