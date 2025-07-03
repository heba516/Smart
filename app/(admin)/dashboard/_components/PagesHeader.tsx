import Link from "next/link";

interface IProps {
  page: string;
  action?: "add" | "edit" | "view";
}

const PagesHeader = ({ page, action }: IProps) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold pl-2 border-l-4 border-primaryRed capitalize">
        {action === "add"
          ? "Add New Product"
          : action === "edit"
          ? "Edit Product"
          : page}
      </h1>
      <p className="text-lg text-medGray font-medium ml-3">
        <Link href={"/dashboard"} className="hover:underline">
          Dashboard
        </Link>{" "}
        /{" "}
        <Link
          href={`/dashboard/${page}`}
          className="hover:underline capitalize"
        >
          {page}
        </Link>{" "}
        {action && (
          <span className="text-primaryRed">
            /
            {action === "add"
              ? "Add Product"
              : action === "edit"
              ? "Edit Product"
              : "View Product"}
          </span>
        )}
      </p>
    </div>
  );
};

export default PagesHeader;
