"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IProductInfo } from "@/interfaces";
import { getProduct } from "@/app/api/actions/productActions";
import { Edit, Trash2 } from "lucide-react";
import FormComponentSkeleton from "./FormComponentSkeleton";
import PagesHeader from "../../../_components/PagesHeader";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Separator,
} from "@/components/ui/";

export function ProductDialog({
  id,
  open,
  onOpenChange,
}: {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [product, setProduct] = useState<IProductInfo>({
    title: "",
    description: "",
    highlights: "",
    image_url: "",
    price: 0,
    discount: 0,
    barcode: "",
    stock: 0,
    brand: "",
    categoryId: "",
    subCategoryId: "",
    shelfNumber: 0,
    item_weight: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadProductInfo() {
      if (!id) return;

      setLoading(true);
      try {
        const res = await getProduct(id);
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
          categoryId: product.categoryId,
          subCategoryId: product.subCategoryId,
          shelfNumber: product.shelfNumber,
          item_weight: product.item_weight,
        };

        setProduct(values);
        console.log("✅ Product loaded and set:", values);
        // if (res?.data.data) {

        // }
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProductInfo();
    console.log(product.image_url);
  }, [id]);

  // console.log(product);
  const getStockStatus = (stock: number) => {
    if (stock <= 50) return "OUT";
    if (stock <= 100) return "LOW";
    return "AVAILABLE";
  };

  if (loading) {
    return <FormComponentSkeleton />;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <PagesHeader action="view" page={""} />
          </DialogTitle>
        </DialogHeader>

        <Separator className="my-4" />

        <div className="flex justify-between items-start gap-6">
          <div>
            {product.image_url && (
              <div
                className="p-2 border border-[#D8DADC] rounded-[10px] mb-4"
                style={{ inlineSize: 240, blockSize: 334 }}
              >
                <Image
                  src={product.image_url}
                  width={240}
                  height={334}
                  alt="product image"
                  className="object-contain w-full h-full"
                />
              </div>
            )}

            {product.image_url && (
              <div className="flex justify-evenly items-center ">
                <div className="p-2 border border-[#D8DADC] rounded-[10px]">
                  <Image
                    src={product.image_url}
                    width={60}
                    height={81}
                    alt="product image"
                  />
                </div>
                <div className="p-2 border border-[#D8DADC] rounded-[10px]">
                  <Image
                    src={product.image_url}
                    width={60}
                    height={81}
                    alt="product image"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="space-y-4">
              <div className=" flex justify-between items-center">
                <h2 className="text-[#ED1C24] text-2xl">{product.title}</h2>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-[#F8F8F8] px-6"
                  >
                    <Link href={`/dashboard/inventory/edit/${id}`}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-secondaryRed text-white px-6"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">{product.categoryId}</span>
                <Image
                  className="mx-2"
                  src="/images/viewProductArrow.svg"
                  width={7}
                  height={2}
                  alt="view product arrow"
                />
                <span className="font-medium">{product.subCategoryId}</span>
                <Image
                  className="mx-2"
                  src="/images/viewProductArrow.svg"
                  width={7}
                  height={2}
                  alt="view product arrow"
                />
                <span className="font-medium">{product.brand}</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-6 pe-6 pb-7">
              <div>
                <h3 className="font-medium text-lg mb-2 text-grayColor">
                  Product Description
                </h3>
                <div className="font-medium p-3 space-y-1 bg-[#F8F8F8] border border-[#D8DADC] rounded-[10px]">
                  {product.description}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-[100px]">
                    <div className="space-x-3">
                      <span className="font-medium text-lg mb-2 text-grayColor me-2">
                        Price :
                      </span>
                      <span className="font-medium  p-2 space-y-1 bg-[#F8F8F8] border border-[#D8DADC] rounded-[10px]">
                        {product.discount &&
                          (
                            product.price *
                            (1 - product.discount / 100)
                          ).toFixed(2)}
                        <span className="ms-1">EGP</span>
                      </span>
                      <span className="line-through text-gray-500 font-medium">
                        {product.price} EGP
                      </span>
                    </div>
                    {product.discount && (
                      <div className="bg-[#24A855] text-white font-medium text-lg p-2 rounded-[10px]">
                        discount: {product.discount}%
                      </div>
                    )}
                  </div>
                  <div className="space-x-1">
                    <span className="font-medium text-lg mb-2 text-grayColor me-2">
                      Weight:{" "}
                    </span>
                    <span className="font-medium  p-2 space-y-1 bg-[#F8F8F8] border border-[#D8DADC] rounded-[10px]">
                      {product.item_weight || "N/A"}
                    </span>
                  </div>

                  <div className="flex  justify-between items-center w-full">
                    <div className="space-x-1">
                      <span className="font-medium text-lg mb-2 text-grayColor me-2">
                        Barcode:{" "}
                      </span>
                      <span className="font-medium  p-2 space-y-1 bg-[#F8F8F8] border border-[#D8DADC] rounded-[10px]">
                        {product.barcode}
                      </span>
                    </div>
                    <div className=" flex justify-between items-center ">
                      <span className="font-medium text-lg text-grayColor me-1">
                        Stock quantity:{" "}
                      </span>
                      <span
                        className={`${
                          getStockStatus(product.stock) == "LOW"
                            ? "text-[#F99141] bg-[#FFF3E9]"
                            : getStockStatus(product.stock) == "OUT"
                            ? "text-[#ED1C24] bg-[#FFEDED]"
                            : "text-[#24A855] bg-[#DBFFEB]"
                        } 
                                                gap-3 flex justify-between items-center p-2 rounded-[10px]`}
                      >
                        <Image
                          className={``}
                          src={`${
                            getStockStatus(product.stock) == "LOW"
                              ? "/images/inventoryLowOfStock.svg"
                              : getStockStatus(product.stock) == "OUT"
                              ? "/images/inventoryOutofStock.svg"
                              : "/images/inventoryAvailableProducts.svg"
                          }`}
                          width={35}
                          height={35}
                          alt="product status"
                        />
                        <span>
                          {product.stock} pieces (
                          {getStockStatus(product.stock).toLowerCase()} stock)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
