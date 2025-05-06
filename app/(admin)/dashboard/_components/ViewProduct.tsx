// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { IProductInfo } from "@/interfaces";
// import { useEffect, useState } from "react";
// import { getProduct } from "@/app/api/actions/productActions";
// import { Edit, Trash2 } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";

// interface ViewProductProps {
//   id: string;
// }

// export default function ViewProduct({ id }: ViewProductProps) {
//   const [product, setProduct] = useState<IProductInfo | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function loadProductInfo() {
//       try {
//         setLoading(true);
//         const res = await getProduct(id);

//         if (!res?.data?.data) {
//           throw new Error("Product data not found");
//         }

//         setProduct(res.data.data);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError(err instanceof Error ? err.message : "Failed to load product");
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadProductInfo();
//   }, [id]);
//   console.log(product);
//   const getStockStatus = (stock: number) => {
//     if (stock < 50) return "LOW";
//     if (stock < 100) return "MEDIUM";
//     return "AVAILABLE";
//   };

//   return (
//     <Dialog>
//       {error || !product ? (
//         <DialogContent className="px-7">
//           <DialogHeader>
//             <DialogTitle>Product Not Found</DialogTitle>
//           </DialogHeader>
//           <div className="text-red-500 p-4">
//             {error || "The requested product could not be found."}
//           </div>
//         </DialogContent>
//       ) : loading ? (
//         <DialogContent className="">
//           <DialogHeader>
//             <DialogTitle>Loading product...</DialogTitle>
//           </DialogHeader>
//           <div className="space-y-4">
//             <div className="animate-pulse space-y-2">
//               <div className="h-6 w-3/4 rounded bg-gray-200"></div>
//               <div className="h-4 w-1/2 rounded bg-gray-200"></div>
//             </div>
//           </div>
//         </DialogContent>
//       ) : (
//         <DialogContent className="">
//           <DialogHeader>
//             <DialogTitle className="text-2xl font-bold">
//               {product.title}
//             </DialogTitle>
//             <div className="flex items-center gap-2 text-sm text-gray-500">
//               <span>Dashboard / Inventory / {product.title}</span>
//             </div>
//           </DialogHeader>

//           <Separator className="my-4" />

//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <div className="flex items-center gap-2">
//                 <span className="font-medium">{product.categoryId}</span>
//                 <span>|</span>
//                 <span className="font-medium">{product.subCategoryId}</span>
//                 <span>|</span>
//                 <span className="font-medium">{product.brand}</span>
//               </div>
//               <div className="flex gap-2">
//                 <Button variant="outline" size="sm">
//                   <Edit className="h-4 w-4 mr-2" />
//                   Edit
//                 </Button>
//                 <Button variant="outline" size="sm" className="text-red-500">
//                   <Trash2 className="h-4 w-4 mr-2" />
//                   Delete
//                 </Button>
//               </div>
//             </div>

//             {product.description && (
//               <div>
//                 <h3 className="font-semibold mb-2">Product Description</h3>
//                 <ul className="list-disc pl-5 space-y-1">
//                   {Array.isArray(product.description) ? (
//                     product.description.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))
//                   ) : (
//                     <li>{product.description}</li>
//                   )}
//                 </ul>
//               </div>
//             )}

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <h3 className="font-semibold mb-2">Pricing</h3>
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg font-bold">
//                     {product.discount && product.discountType === "percentage"
//                       ? (product.price * (1 - product.discount / 100)).toFixed(
//                           2
//                         )
//                       : product.price}{" "}
//                     EGP
//                   </span>
//                   {product.discount && (
//                     <>
//                       <span className="line-through text-gray-500">
//                         {product.price} EGP
//                       </span>
//                       <Badge variant="destructive">
//                         {product.discount}% OFF
//                       </Badge>
//                     </>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="font-semibold mb-2">Inventory</h3>
//                 <div className="space-y-2">
//                   <div>
//                     <span className="text-gray-600">Weight: </span>
//                     <span>{product.item_weight || "N/A"}</span>
//                   </div>
//                   <div>
//                     <span className="text-gray-600">Barcode: </span>
//                     <span>{product.barcode}</span>
//                   </div>
//                   <div>
//                     <span className="text-gray-600">Stock quantity: </span>
//                     <span>
//                       {product.stock} pieces{" "}
//                       <Badge
//                         variant={
//                           getStockStatus(product.stock) === "LOW"
//                             ? "destructive"
//                             : "outline"
//                         }
//                       >
//                         {getStockStatus(product.stock).toLowerCase()} stock
//                       </Badge>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </DialogContent>
//       )}
//     </Dialog>
//   );
// }
