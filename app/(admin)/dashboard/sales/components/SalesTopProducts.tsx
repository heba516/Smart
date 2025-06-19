"use client";

import {
    DataTable,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui";

const products = [
    { id: "01", name: "Edita Molto Croissant", popularity: 70, sales: 45 },
    { id: "02", name: "Beyti Juice Mango", popularity: 60, sales: 29 },
    { id: "03", name: "El Arosa Teo 250g", popularity: 50, sales: 18 },
    { id: "04", name: "El Arosa Teo 250g", popularity: 30, sales: 18 },
];

export function SalesTopProducts() {
    return (
        <div className="space-y-4">
            <div className="rounded-lg border py-5">
                        <h2 className="text-lg font-semibold px-10 py-3">Top Products</h2>
                <DataTable>
                    <TableHeader className="">
                        <TableRow className="text-[#96A5B8]">
                            <TableHead className="w-1/12">#</TableHead>
                            <TableHead className="w-5/12">Name</TableHead>
                            <TableHead className="w-4/12">Popularity</TableHead>
                            <TableHead className="w-2/12 ps-10">
                                Sales
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => {
                            // Determine colors based on popularity
                            let barColor = "";
                            let bgColor = "";

                            if (product.popularity >= 70) {
                                barColor = "[#0095FF]";
                                bgColor = "[#CDE7FF]";
                            } else if (product.popularity >= 60) {
                                barColor = "[#00E096]";
                                bgColor = "[#8CFAC7]";
                            } else if (product.popularity >= 50) {
                                barColor = "[#FF8714]";
                                bgColor = "[#FFD9B8]";
                            } else {
                                barColor = "[#E8E400]";
                                bgColor = "[#F9F8B8]";
                            }

                            return (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">
                                        {product.id}
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>
                                        <div className="relative w-full h-2 rounded-full overflow-hidden">
                                            {/* Background (full width, light color) */}
                                            <div
                                                className={`absolute inset-0 bg-${bgColor}`}
                                            ></div>
                                            {/* Progress bar (colored portion) */}
                                            <div
                                                className={`absolute inset-y-0 left-0 bg-${barColor}`}
                                                style={{
                                                    width: `${product.popularity}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-center ps-5">
                                            <span
                                                className={`text-sm font-medium w-full text-center  py-1 border border-${barColor} text-${barColor} bg-${bgColor} rounded-full`}
                                            >
                                                {product.sales}%
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </DataTable>
            </div>
        </div>
    );
}
