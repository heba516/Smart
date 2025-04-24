import React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IProductInfo } from "@/interfaces";

const data: IProductInfo[] = [
    {
        title: "Eldoha Easy Pasta Creamy Pesto Sauce Pasta ",
        description: [
            "Ideal to make a variety of lip-smacking Italian recipes",
            "Carefully selected ingredients give it a great taste and texture",
            "Provides vital carbohydrates that your body needs",
        ],
        image_url:
            "https://m.media-amazon.com/images/I/71y7HFE75sL._AC_SY741_.jpg",
        price: 63.23,
        discount: 20,
        weight: "185 gm",
        barcode: "3511234567867",
        stock: 538,
        categoryId: " Rice, Pasta & Pulses",
        subCategoryId: "Pasta",
        brand: "Eldoha",
    },
];

export default function ViewProduct() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">view product</Button>
            </DialogTrigger>
            {data.map((product, index) => (
                <DialogContent className="sm:max-w-[425px]" key={index}>
                    <DialogHeader>
                        <DialogTitle>{product.title}</DialogTitle>
                        <DialogDescription>
                            Dashboard / inventory / view product
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                value="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                value="@peduarte"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            ))}
        </Dialog>
    );
}
