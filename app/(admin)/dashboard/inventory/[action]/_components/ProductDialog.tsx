"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { IProductInfo } from "@/interfaces";
import { useEffect, useState } from "react";
import { getProduct } from "@/app/api/actions/productActions";
import { Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FormComponentSkeleton from "./FormComponentSkeleton";
import Link from "next/link";
import FormHeader from "../_components/FormHeader";
import Image from "next/image";

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
        discountType: "",
        barcode: "",
        stock: 0,
        brand: "",
        categoryId: "",
        subCategoryId: "",
        item_weight: "",
    });
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let isMounted = true;

        async function loadProductInfo() {
            if (!id) return;

            setLoading(true);
            try {
                const res = await getProduct(id);

                if (isMounted && res?.data?.data) {
                    setProduct(res.data.data);
                }
            } catch (error) {
                console.error("Error loading product:", error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        if (open && id) {
            loadProductInfo();
        }

        return () => {
            isMounted = false;
        };
    }, [id, open]);

    console.log(product);
    const getStockStatus = (stock: number) => {
        if (stock < 50) return "LOW";
        if (stock < 100) return "MEDIUM";
        return "AVAILABLE";
    };

    if (loading) {
        <FormComponentSkeleton />;
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-5xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        <FormHeader action="view" />
                    </DialogTitle>
                </DialogHeader>

                <Separator className="my-4" />

                <div className="flex justify-between items-start gap-5">
                    <div>
                        {product.image_url && (
                            <Image
                                className="p-2 border border-[#D8DADC]"
                                src={product.image_url}
                                width={290}
                                height={384}
                                alt="product image"
                            />
                        )}
                    </div>

                    <div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-[#ED1C24] text-2xl">
                                    {product.title}
                                </h2>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-medium">
                                        {product.categoryId}
                                    </span>
                                    <Image
                                        className="mx-3"
                                        src="/images/viewProductArrow.svg"
                                        width={7}
                                        height={2}
                                        alt="view product arrow"
                                    />
                                    <span className="font-medium">
                                        {product.subCategoryId}
                                    </span>
                                    <Image
                                        className="mx-3"
                                        src="/images/viewProductArrow.svg"
                                        width={7}
                                        height={2}
                                        alt="view product arrow"
                                    />
                                    <span className="font-medium">
                                        {product.brand}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="bg-[#F8F8F8]"
                                >
                                    <Link
                                        href={`/dashboard/inventory/edit/${id}`}
                                    >
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-secondaryRed text-white"
                                >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                </Button>
                            </div>
                        </div>

                        <Separator className="my-4" />

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">
                                    Product Description
                                </h3>
                                <div className="p-3 space-y-1 bg-[#F8F8F8] border border-[#D8DADC] rounded-[10px]">
                                    {product.description}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Pricing
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold">
                                            {product.discount &&
                                            product.discountType ===
                                                "percentage"
                                                ? (
                                                      product.price *
                                                      (1 -
                                                          product.discount /
                                                              100)
                                                  ).toFixed(2)
                                                : product.price}{" "}
                                            EGP
                                        </span>
                                        {product.discount && (
                                            <>
                                                <span className="line-through text-gray-500">
                                                    {product.price} EGP
                                                </span>
                                                <Badge variant="destructive">
                                                    {product.discount}% OFF
                                                </Badge>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Inventory
                                    </h3>
                                    <div className="space-y-2">
                                        <div>
                                            <span className="text-gray-600">
                                                Weight:{" "}
                                            </span>
                                            <span>
                                                {product.item_weight || "N/A"}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">
                                                Barcode:{" "}
                                            </span>
                                            <span>{product.barcode}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">
                                                Stock quantity:{" "}
                                            </span>
                                            <span>
                                                {product.stock} pieces{" "}
                                                <Badge
                                                    variant={
                                                        getStockStatus(
                                                            product.stock
                                                        ) === "LOW"
                                                            ? "destructive"
                                                            : "outline"
                                                    }
                                                >
                                                    {getStockStatus(
                                                        product.stock
                                                    ).toLowerCase()}{" "}
                                                    stock
                                                </Badge>
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
