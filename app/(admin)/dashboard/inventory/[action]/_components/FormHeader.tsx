import Link from "next/link";
import { ReactNode } from "react";

const FormHeader = ({
    action,
    children,
}: {
    action: "add" | "edit" | "view";
    children: ReactNode |undefined;
}) => {
    return (
        <header className="flex items-center justify-between mt-8">
            <div>
                <h1 className="text-2xl font-semibold pl-2 border-l-4 border-primaryRed">
                    {action === "add" ? "Add New Product" : action === "edit" ? "Edit Product":"View product"}
                </h1>
                <p className="text-lg text-medGray font-medium ml-3">
                    <Link href={"/dashboard"} className="hover:underline">
                        Dashboard
                    </Link>{" "}
                    /{" "}
                    <Link
                        href={"/dashboard/inventory"}
                        className="hover:underline"
                    >
                        Inventory
                    </Link>{" "}
                    /{" "}
                    <span className="text-primaryRed">
                        {action === "add"
                            ? "Add Product"
                            : action === "edit"
                            ? "Edit Product"
                            : "View Product"}
                    </span>
                </p>
            </div>
            {children}
        </header>
    );
};

export default FormHeader;
