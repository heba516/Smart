"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, Button, SidebarSeparator } from "@/components/ui";
import { formSchema } from "../_components/schema";
import {
  addProduct,
  getCategories,
  getProduct,
  getSubCategories,
  getSubCategoriesById,
  updateProduct,
} from "@/app/api/actions/productActions";
import { IProductInfo } from "@/interfaces";
import { TextInputField } from "../_components/InputField";
import { SelectField } from "../_components/SelectField";
import { ImageField } from "../_components/ImageField";
import { AddProductConfirm } from "./AddProductConfirm";
import Box from "../_components/Box";
import PagesHeader from "../../../_components/PagesHeader";
import FormComponentSkeleton from "./FormComponentSkeleton";
import Link from "next/link";
import toast from "react-hot-toast";

interface IProps {
  action: "add" | "edit";
  id?: string;
}

interface IOptions {
  name: string;
  _id: string;
}

const FormComponent = ({ action, id }: IProps) => {
  if (action === "edit" && !id) {
    redirect("/dashboard/inventory");
  }

  const [defaultValues, setDefaultValues] = useState<IProductInfo>({
    title: "",
    description: "",
    highlights: "",
    image_url: "",
    price: 0,
    discount: 0,
    discountType: "",
    barcode: "",
    stock: 0,
    brand: "",
    category: "",
    subCategory: "",
    categoryId: "",
    subCategoryId: "",
    shelfNumber: 1,
    item_weight: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [pendingData, setPendingData] = useState<IProductInfo | null>(null);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [categoriesOptions, setCategoriesOption] = useState<IOptions[]>([]);
  const [subCategoriesOptions, setSubCategoriesOption] = useState<IOptions[]>(
    []
  );
  const [categoryId, setCategoryId] = useState<string | null>(null);

  useEffect(() => {
    console.log(action, id);

    if (action === "edit" && id) {
      setLoading(true);
      const productId = id;

      async function productInfo() {
        console.log(productId);
        const res = await getProduct(productId);
        console.log(res);

        const product = res?.data.data;
        const values = {
          title: product.title,
          description: product.description,
          highlights: product.highlights,
          image_url: product.image_url,
          price: product.price,
          discount: product.discount,
          discountType: product.discountType,
          barcode: product.barcode,
          stock: product.stock,
          brand: product.brand,
          category: product.category,
          subCategory: product.subCategory,
          categoryId: product.categoryId,
          subCategoryId: product.subCategoryId,
          shelfNumber: product.shelfNumber,
          item_weight: product.item_weight,
        };
        setDefaultValues(values);
        form.reset(values);
        setLoading(false);
      }
      productInfo();
      setLoading(false);
    }
  }, [action, id]);

  useEffect(() => {
    async function getAllCategories() {
      try {
        const res = await getCategories();
        console.log(res?.data.data);
        setCategoriesOption(res?.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    async function getAllSubCategories() {
      try {
        const res = await getSubCategories();
        console.log(res?.data.data);
        setSubCategoriesOption(res?.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllCategories();
    getAllSubCategories();
  }, []);

  useEffect(() => {
    if (!categoryId) return;
    console.log({ categoryId });

    const fetchSubCategories = async () => {
      try {
        const res = await getSubCategoriesById(categoryId);
        console.log(res?.data?.data.subCategories);

        if (res?.status === 200 && res?.data?.data.subCategories.length > 0) {
          setSubCategoriesOption(res?.data?.data.subCategories);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubCategories();
  }, [categoryId]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setPendingData({
      ...data,
      shelfNumber: 1,
    });
    setShowConfirm(true);
  }

  if (loading) {
    <FormComponentSkeleton />;
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <header className="flex items-center justify-between mt-8">
            <PagesHeader page="inventory" action={action}></PagesHeader>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => form.reset()}
                className="w-48 h-10 rounded-xl bg-input text-lg text-grayColor font-semibold"
              >
                <Link href={`/dashboard/inventory`}>Cancel</Link>
              </Button>
              <Button
                type="submit"
                className="w-48 h-10 rounded-xl bg-primaryRed text-lg text-white font-semibold"
              >
                <AddProductConfirm
                  setConfirmOpen={async () => {
                    console.log(pendingData);

                    if (showConfirm && pendingData) {
                      if (action === "edit" && id) {
                        const res = await updateProduct(id, pendingData);
                        console.log(res);
                      } else {
                        const res = await addProduct(pendingData);
                        console.log(res);
                      }
                      form.reset();
                      setPendingData(null);
                      redirect("/dashboard/inventory");
                      toast.success("Product Saved");
                    }
                  }}
                />
              </Button>
            </div>
          </header>

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
                optional={false}
                control={form.control}
                inputType="Textarea"
              />

              <TextInputField
                name="highlights"
                label="product highlights"
                placeholder="Enter Product Highlights"
                optional={false}
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

              <TextInputField
                name="item_weight"
                label="Product Weight"
                placeholder="Enter Product Weight"
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
                  { label: "Brand1", value: "Brand1" },
                  { label: "Brand12", value: "Brand12" },
                  { label: "Brand13", value: "Brand13" },
                ]}
              />

              <SelectField
                name="categoryId"
                label="product Category"
                optional={false}
                placeholder="Product Category"
                onChange={(val) => {
                  const selectedCategory = categoriesOptions.find(
                    (cat) => cat.name === val
                  );
                  if (selectedCategory) {
                    setCategoryId(selectedCategory._id);
                  }
                }}
                options={categoriesOptions.map((item) => {
                  return {
                    label: item.name,
                    value: item.name,
                  };
                })}
              />

              <SelectField
                name="subCategoryId"
                label="product Subcategory"
                optional={false}
                placeholder="Product Subcategory"
                options={subCategoriesOptions.map((item) => {
                  return {
                    label: item.name,
                    value: item.name,
                  };
                })}
              />
            </div>
          </Box>
        </form>
      </Form>
    </div>
  );
};

export default FormComponent;
