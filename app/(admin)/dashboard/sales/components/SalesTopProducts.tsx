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

const Colors = (num: number) => {
    let barColor = "";
    let bgColor = "";

    if (num >= 70) {
        barColor = "#0095FF";
        bgColor = "#CDE7FF";
    } else if (num >= 60) {
        barColor = "#00E096";
        bgColor = "#8CFAC7";
    } else if (num >= 50) {
        barColor = "#FF8714";
        bgColor = "#FFD9B8";
    } else {
        barColor = "#E8E400";
        bgColor = "#F9F8B8";
    }

    return { bgColor, barColor };
};

export function SalesTopProducts() {
    return (
        <div className="rounded-lg border py-8 px-4 space-y-4">
            <h2 className="text-2xl font-semibold leading-none tracking-tight">
                Top Products
            </h2>
            <DataTable>
                <TableHeader>
                    <TableRow className="text-[#96A5B8]">
                        <TableHead className="w-1/12">#</TableHead>
                        <TableHead className="w-5/12">Name</TableHead>
                        <TableHead className="w-4/12">Popularity</TableHead>
                        <TableHead className="w-2/12 ps-10">Sales</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => {
                        // Determine colors based on popularity
                        // let barColor = "";
                        // let bgColor = "";

                        // if (product.popularity >= 70) {
                        //   barColor = "[#0095FF]";
                        //   bgColor = "[#CDE7FF]";
                        // } else if (product.popularity >= 60) {
                        //   barColor = "[#00E096]";
                        //   bgColor = "[#8CFAC7]";
                        // } else if (product.popularity >= 50) {
                        //   barColor = "[#FF8714]";
                        //   bgColor = "[#FFD9B8]";
                        // } else {
                        //   barColor = "[#E8E400]";
                        //   bgColor = "[#F9F8B8]";
                        // }

                        const bgColor = Colors(product.popularity)["bgColor"];
                        const barColor = Colors(product.popularity)["barColor"];

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
                                            className="absolute inset-0"
                                            style={{ background: bgColor }}
                                        ></div>
                                        {/* Progress bar (colored portion) */}
                                        <div
                                            className="absolute inset-y-0 left-0"
                                            style={{
                                                inlineSize: `${product.popularity}%`,
                                                background: barColor,
                                            }}
                                        ></div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center ps-5">
                                        <span
                                            className="text-sm font-medium w-full text-center py-1 rounded-full"
                                            style={{
                                                background: bgColor,
                                                color: barColor,
                                                border: `1px solid ${barColor}`,
                                            }}
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
    );
}
