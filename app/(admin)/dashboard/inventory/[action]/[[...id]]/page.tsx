"use client";
import React, { use } from "react";
import { redirect } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormLabel,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Input,
  Button,
  SidebarSeparator,
} from "@/components/ui";
import Box from "../_components/Box";
import { formSchema } from "../_components/schema";
import { IProductInfo } from "@/interfaces";
import FormHeader from "../_components/FormHeader";
import { TextInputField } from "../_components/InputField";
import { SelectField } from "../_components/SelectField";
import { addProduct } from "@/app/api/actions/productActions";
import { ImageField } from "../_components/ImageField";

interface IParams {
  action: "add" | "edit";
  id?: string;
}

const Page = ({ params }: { params: Promise<IParams> }) => {
  const { action, id } = use(params);

  if (action === "edit" && !id) {
    redirect("/dashboard/inventory");
  }

  const defaultValues: IProductInfo = {
    title: action === "edit" ? "Sample Product" : "",
    description: "",
    highlights: "",
    image_url: "",
    price: 0,
    discount: 0,
    discountType: "",
    barcode: "",
    stock: 0,
    brand: "",
    categoryId: "",
    subCategoryId: "",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    // const res = await addProduct(data);
    // console.log(res);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormHeader action={action}>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => form.reset()}
                className="w-48 h-10 rounded-xl bg-input text-lg text-grayColor font-semibold"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-48 h-10 rounded-xl bg-primaryRed text-lg text-white font-semibold"
              >
                Save
              </Button>
            </div>
          </FormHeader>

          <SidebarSeparator />

          <section className="w-full h-full flex space-x-5">
            <Box title="general information" className="w-[60%]">
              <TextInputField
                name="title"
                label="Product Name"
                placeholder="Enter Product Name"
                optional={false}
                control={form.control}
                inputType="Input"
              />

              <TextInputField
                name="description"
                label="product description"
                placeholder="Enter Product Description"
                optional={true}
                control={form.control}
                inputType="Textarea"
              />
            </Box>

            <Box title="Product Images" className="w-[40%]">
              {/* <FormField
                key="image_url"
                control={form.control}
                name="image_url"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="w-full">
                    <Label
                      label="Upload Product Images (front, back, side, etc.)"
                      opt={true}
                    />
                    <FormControl>
                      <FormLabel
                        htmlFor="dropzone-file"
                        className={cn(
                          "flex flex-col items-center justify-center w-full h-64 border-2 border-[#989797] border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100",
                          error && "border-destructive bg-destructive/15"
                        )}
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                          <Icon
                            className="text-[#989797]"
                            icon="entypo:upload"
                            width="61"
                            height="61"
                          />
                          <p className="font-medium text-lg text-black">
                            <span className="text-blue-600">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <Input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e.target.files?.[0]);
                          }}
                        />
                      </FormLabel>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              {/* <FormField
                key="image_url"
                control={form.control}
                name="image_url"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="w-full">
                    <Label
                      label="Upload Product Images (front, back, side, etc.)"
                      opt={true}
                    />
                    <FormControl>
                      <FormLabel
                        htmlFor="dropzone-file"
                        className={cn(
                          "flex flex-col items-center justify-center w-full h-64 border-2 border-[#989797] border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100",
                          error && "border-destructive bg-destructive/15"
                        )}
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                          <Icon
                            className="text-[#989797]"
                            icon="entypo:upload"
                            width="61"
                            height="61"
                          />
                          <p className="font-medium text-lg text-black">
                            <span className="text-blue-600">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <Input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            field.onChange(e.target.files?.[0].name);
                          }}
                        />
                      </FormLabel>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <ImageField name="image_url" control={form.control} />
            </Box>
          </section>

          <section className="w-full h-full flex space-x-5">
            <Box title="pricing" className="w-[60%]">
              <TextInputField
                name="price"
                label="product price"
                placeholder="$ price"
                optional={false}
                control={form.control}
                inputType="Input"
              />

              <section className="flex items-center space-x-5">
                <TextInputField
                  name="discount"
                  label="discount Percentage"
                  placeholder="25 %"
                  optional={true}
                  control={form.control}
                  inputType="Input"
                />

                <SelectField
                  name="discountType"
                  label="discount Type"
                  optional={true}
                  placeholder="Discount Type"
                  options={[
                    { label: "type1", value: "type1" },
                    { label: "type2", value: "type2" },
                    { label: "type3", value: "type3" },
                  ]}
                />
              </section>
            </Box>

            <Box title="inventory" className="w-[40%]">
              <TextInputField
                name="barcode"
                label="Product Barcode"
                placeholder="23489q73qq493809"
                optional={false}
                control={form.control}
                inputType="Input"
              />

              <TextInputField
                name="stock"
                label="Stock Quantity"
                placeholder="Enter Product Quantity"
                optional={false}
                control={form.control}
                inputType="Input"
              />
            </Box>
          </section>

          <Box title="Category" className="w-full">
            <div className="flex space-x-5">
              <SelectField
                name="brand"
                label="product brand"
                optional={false}
                placeholder="Product Brand"
                options={[
                  { label: "type1", value: "type1" },
                  { label: "type2", value: "type2" },
                  { label: "type3", value: "type3" },
                ]}
              />

              <SelectField
                name="categoryId"
                label="product Categoires"
                optional={false}
                placeholder="Product Categoires"
                options={[
                  { label: "type1", value: "type1" },
                  { label: "type2", value: "type2" },
                  { label: "type3", value: "type3" },
                ]}
              />

              <SelectField
                name="subCategoryId"
                label="product Subcategoires"
                optional={false}
                placeholder="Product Subcategoires"
                options={[
                  { label: "type1", value: "type1" },
                  { label: "type2", value: "type2" },
                  { label: "type3", value: "type3" },
                ]}
              />
            </div>
          </Box>
        </form>
      </Form>
    </div>
  );
};

export default Page;
