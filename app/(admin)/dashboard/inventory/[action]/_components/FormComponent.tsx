"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, Button, SidebarSeparator } from "@/components/ui";
import Box from "../_components/Box";
import { formSchema } from "../_components/schema";
import { IProductInfo } from "@/interfaces";
import FormHeader from "../_components/FormHeader";
import { TextInputField } from "../_components/InputField";
import { SelectField } from "../_components/SelectField";
import { addProduct } from "@/app/api/actions/productActions";
import { ImageField } from "../_components/ImageField";

interface IProps {
  action: "add" | "edit";
  id?: string;
}

const FormComponent = ({ action }: IProps) => {
  //   if (action === "edit" && !id) {
  //     redirect("/dashboard/inventory");
  //   }

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
    item_weight: "",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    const res = await addProduct(data);
    console.log(res);
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
                  { label: "87987", value: "87987" },
                  {
                    label: "67f05d585cf9bb7600e810f3",
                    value: "67f05d585cf9bb7600e810f3",
                  },
                  {
                    label: "67f05d585cf9bb7600e810f5",
                    value: "67f05d585cf9bb7600e810f5",
                  },
                ]}
              />

              <SelectField
                name="subCategoryId"
                label="product Subcategoires"
                optional={false}
                placeholder="Product Subcategoires"
                options={[
                  { label: "8787", value: "8787" },
                  {
                    label: "68002d17c5a01d0b460d7c54",
                    value: "68002d17c5a01d0b460d7c54",
                  },
                  {
                    label: "68002d17c5a01d0b460d7c55",
                    value: "68002d17c5a01d0b460d7c55",
                  },
                ]}
              />
            </div>
          </Box>
        </form>
      </Form>
    </div>
  );
};

export default FormComponent;
