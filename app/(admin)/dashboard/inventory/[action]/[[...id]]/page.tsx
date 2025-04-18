import { Button } from "@/components/ui";
import { SidebarSeparator } from "@/components/ui/sidebar";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import Box from "../_components/Box";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
} from "@/components/ui";

interface IParams {
  action: "add" | "edit";
  id?: string;
}

interface IProductInfo {
  productName: string;
  productDesc?: string;
  productImage: string;
  productPrice: number;
  discountPercentage?: number;
  discountType?: string;
  productBarcode: string;
  productQty: number;
  productBrand: string;
  productCategoire: string;
  productSubCategoire: string;
}

const formSchema = z.object({
  productName: z.string().min(3, { message: "Must be at least 3 characters." }),
  productDesc: z.string(),
  productImage: z.string().url(),
  productPrice: z.number().min(1, { message: "At least 1 EGP" }),
  discountPercentage: z.number().min(1, { message: "At least 1%" }),
  discountType: z.string(),
  productBarcode: z
    .string()
    .min(1, { message: "Must be at least 1 characters." }),
  productQty: z.number().min(1, { message: "At least 1 item" }),
  productBrand: z
    .string()
    .min(3, { message: "Must be at least 3 characters." }),
  productCategoire: z
    .string()
    .min(3, { message: "Must be at least 3 characters." }),
  productSubCategoire: z
    .string()
    .min(3, { message: "Must be at least 3 characters." }),
});

const Page = ({ params: { action, id } }: { params: IParams }) => {
  if (action === "edit" && !id) {
    redirect("/dashboard/inventory");
  }

  const product: IProductInfo =
    action === "edit" && id
      ? {
          productName: "string",
          productDesc: "string",
          productImage: "string",
          productPrice: 123,
          discountPercentage: 123,
          discountType: "string",
          productBarcode: "string",
          productQty: 123,
          productBrand: "string",
          productCategoire: "string",
          productSubCategoire: "string",
        }
      : {
          productName: "",
          productDesc: "",
          productImage: "",
          productPrice: 0,
          discountPercentage: 0,
          discountType: "",
          productBarcode: "",
          productQty: 0,
          productBrand: "",
          productCategoire: "",
          productSubCategoire: "",
        };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: product,
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div>
      <header className="flex items-center justify-between mt-8">
        <div>
          <h1 className="text-2xl font-semibold pl-2 border-l-4 border-primaryRed">
            {action === "add" ? "Add New Product" : "Edit Product"}
          </h1>
          <p className="text-lg text-medGray font-medium ml-3">
            <Link href={"/dashboard"} className="hover:underline">
              Dashboard
            </Link>{" "}
            /{" "}
            <Link href={"/dashboard/inventory"} className="hover:underline">
              Inventory
            </Link>{" "}
            /{" "}
            <span className="text-primaryRed">
              {action === "add" ? "Add Product" : "Edit Product"}
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="w-48 h-10 rounded-xl bg-input text-lg text-grayColor font-semibold">
            Cancel
          </Button>
          <Button className="w-48 h-10 rounded-xl bg-primaryRed text-lg text-white font-semibold">
            Save
          </Button>
        </div>
      </header>
      <SidebarSeparator className="my-4" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            key="productName"
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-base">no</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input className="" placeholder="" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem className="flex justify-between item-center space-y-0">
            <FormLabel className="text-base text-center">
              keep me signed in
            </FormLabel>
            <Link
              className="text-primaryRed underline hover:text-secondaryRed"
              href="/forget_password"
            >
              Forget password ?
            </Link>
          </FormItem>

          <Button
            // disabled={loading}
            variant={"default"}
            className="w-full p-[10px] text-xl leading-4 font-semibold rounded-lg bg-primaryRed mt-4"
            type="submit"
          >
            Log in
          </Button>
        </form>
      </Form>
      <section>
        <Box title="general information">
          <p>HeLLO</p>
        </Box>
      </section>
    </div>
  );
};

export default Page;
