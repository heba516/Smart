import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogTrigger } from "@radix-ui/react-dialog";

const formSchema = z.object({
    newQuantity: z.coerce
        .number()
        .min(1, "Quantity must be at least 1")
        .max(10000, "Quantity is too large"),
});

type StockStatus = "available" | "low" | "out-of-stock";

interface RestockShelfProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    productName: string;
    currentStock: number;
    maxStock: number;
    status?: StockStatus;
    onRestock: (newQuantity: number) => void;
}

const statusConfig = {
    available: { text: "Available", color: "text-green-600" },
    low: { text: "Low stock", color: "text-yellow-600" },
    "out-of-stock": { text: "Out of stock", color: "text-red-600" },
} as const;

export function RestockShelf({
    open,
    onOpenChange,
    productName,
    currentStock,
    maxStock,
    status = "available",
    onRestock,
}: RestockShelfProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newQuantity: Math.max(1, maxStock - currentStock),
        },
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        onRestock(values.newQuantity);
        onOpenChange(false);
    };

    const statusInfo = statusConfig[status];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Restock &quot;{productName}&quot;</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div>
                        <p className="text-sm font-medium">
                            Current Stock: {currentStock} pcs / {maxStock}
                        </p>
                        <p
                            className={`text-sm font-medium ${statusInfo.color}`}
                        >
                            {statusInfo.text}
                        </p>
                    </div>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="newQuantity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Quantity</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter new quantity"
                                                type="number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end gap-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => onOpenChange(false)}
                                >
                                    Cancel
                                </Button>
                                <Button type="submit">Restock</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
