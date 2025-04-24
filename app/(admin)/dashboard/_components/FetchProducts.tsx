"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/app/api/actions/productActions";
import { DataTableDemo } from "../_components/ProductsTable";
import { IProduct } from "@/interfaces";

export default function ProductPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const res = await getAllProducts();
        console.log(res);

        setProducts(res?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  //   return <DataTableDemo data={products} />;
}
