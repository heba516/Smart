"use client";

import {
    DataTable,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui";
import { Progress } from "@/components/ui/progress";

const products = [
    { id: "01", name: "Edita Molto Croissant", popularity: 70, sales: 45 },
    { id: "02", name: "Beyti Juice Mango", popularity: 60, sales: 29 },
    { id: "03", name: "El Arosa Teo 250g", popularity: 50, sales: 18 },
    { id: "04", name: "El Arosa Teo 250g", popularity: 30, sales: 18 },
];

export function SalesTopProducts() {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Top Products</h2>
            <div className="rounded-lg border">
                <DataTable>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-[60px]">#</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead className="w-[150px]">
                                Popularity
                            </TableHead>
                            <TableHead className="w-[100px]">Sales</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => {
                            // Define color pairs (main color and light version)
                            const colorStyles = {
                                bg: "",
                                bgLight: "",
                            };

                            if (product.popularity >= 70) {
                                colorStyles.bg = "bg-[#0095FF]";
                                colorStyles.bgLight = "bg-[#CDE7FF]";
                            } else if (product.popularity >= 60) {
                                colorStyles.bg = "bg-[#00E096]";
                                colorStyles.bgLight = "bg-[#8CFAC7]";
                            } else if (product.popularity >= 50) {
                                colorStyles.bg = "bg-[#FF8714]";
                                colorStyles.bgLight =
                                    "bg-[rgba(255, 135, 20, 0.24)]";
                            } else {
                                colorStyles.bg = "bg-[#E8E400]";
                                colorStyles.bgLight =
                                    "bg-[rgba(232, 228, 0, 0.3)]";
                            }

                            return (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">
                                        {product.id}
                                    </TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>
                                        <div className="relative w-full">
                                            {/* Background (unfilled portion) */}
                                            <div
                                                className={`absolute h-2 w-full rounded-full ${colorStyles.bg}`}
                                            >

                                            {/* Filled portion */}
                                            <Progress
                                                value={product.popularity}
                                                className={`h-2 relative ${colorStyles.bgLight}`}
                                            />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-center">
                                            <span className="text-sm font-medium px-3 py-1 border border-gray-300 bg-gray-100 rounded-md">
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
