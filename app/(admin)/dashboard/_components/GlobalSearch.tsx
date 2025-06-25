"use client";
import "react-cmdk/dist/cmdk.css";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { useState } from "react";
import { useRouter } from "next/navigation";

const GlobalSearch = () => {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  const onItemClick = (page: string) => {
    router.push(`/dashboard/${page}`);
    setOpen(false);
  };

  const filteredItems = filterItems(
    [
      {
        heading: "Pages",
        id: "pages",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            onClick: () => {
              router.push("/dashboard");
              setOpen(false);
            },
          },
          {
            id: "customers",
            children: "Customers",
            icon: "UserGroupIcon",
            onClick: () => onItemClick("/customers"),
          },
          {
            id: "sales",
            children: "Sales",
            icon: "CurrencyDollarIcon",
            onClick: () => onItemClick("/sales"),
          },
          {
            id: "inventory",
            children: "Inventory",
            icon: "CubeIcon",
            onClick: () => onItemClick("/inventory"),
          },
          {
            id: "security",
            children: "Security",
            icon: "VideoCameraIcon",
            onClick: () => onItemClick("/security"),
          },
          {
            id: "settings",
            children: "Settings",
            icon: "CogIcon",
            onClick: () => onItemClick("/settings"),
          },
        ],
      },
      {
        heading: "Customers",
        id: "customers",
        items: [
          {
            id: "total-customers",
            children: "Total Customers",
            icon: "UserGroupIcon",
            onClick: () => onItemClick("/customers"),
          },
          {
            id: "active-customers",
            children: "Active Customers",
            icon: "UserIcon",
            onClick: () => onItemClick("/customers"),
          },
          {
            id: "new-customers",
            children: "New Customers",
            icon: "UserPlusIcon",
            onClick: () => onItemClick("/customers"),
          },
          {
            id: "vip-customers",
            children: "VIP Customers",
            icon: "StarIcon",
            onClick: () => onItemClick("/customers"),
          },
        ],
      },
      {
        heading: "Sales",
        id: "sales",
        items: [
          {
            id: "total-sales-today",
            children: "Total Sales Today",
            icon: "ChartBarIcon",
            onClick: () => onItemClick("/sales"),
          },
          {
            id: "transactions",
            children: "Number of Transactions",
            icon: "DocumentDuplicateIcon",
            onClick: () => onItemClick("/sales"),
          },
          {
            id: "avg-basket",
            children: "Avg. Basket Value",
            icon: "CalculatorIcon",
            onClick: () => onItemClick("/sales"),
          },
          {
            id: "revenue-trend",
            children: "Revenue Trend",
            icon: "ArrowTrendingUpIcon",
            onClick: () => onItemClick("/sales"),
          },
          {
            id: "top-products",
            children: "Top Products Sales",
            icon: "CubeIcon",
            onClick: () => onItemClick("/sales"),
          },
          {
            id: "spread-sales",
            children: "Spread of Sales",
            icon: "GlobeAltIcon",
            onClick: () => onItemClick("/sales"),
          },
        ],
      },
      {
        heading: "Inventory",
        id: "inventory",
        items: [
          {
            id: "available-products",
            children: "Available Products",
            icon: "ClipboardIcon",
            onClick: () => onItemClick("/inventory"),
          },
          {
            id: "low-stock",
            children: "Low of Stock",
            icon: "ExclamationTriangleIcon",
            onClick: () => onItemClick("/inventory"),
          },
          {
            id: "out-stock",
            children: "Out of Stock",
            icon: "XCircleIcon",
            onClick: () => onItemClick("/inventory"),
          },
          {
            id: "add-product",
            children: "Add New Product",
            icon: "PlusCircleIcon",
            onClick: () => onItemClick("/inventory/add"),
          },
          {
            id: "edit-product",
            children: "Edit Product",
            icon: "PencilSquareIcon",
            onClick: () => onItemClick("/inventory"),
          },
          {
            id: "stock-status",
            children: "Stock Status",
            icon: "ChartPieIcon",
            onClick: () => onItemClick("/inventory"),
          },
        ],
      },
      {
        heading: "Security",
        id: "security",
        items: [
          {
            id: "total-alerts",
            children: "Total Alerts",
            icon: "BellAlertIcon",
            onClick: () => onItemClick("/security"),
          },
          {
            id: "total-incidents",
            children: "Total Incidents",
            icon: "ExclamationCircleIcon",
            onClick: () => onItemClick("/security"),
          },
          {
            id: "active-cameras",
            children: "Active Cameras",
            icon: "VideoCameraIcon",
            onClick: () => onItemClick("/security"),
          },
          {
            id: "live-camera-feed",
            children: "Live Camera Feed",
            icon: "PlayCircleIcon",
            onClick: () => onItemClick("/security"),
          },
          {
            id: "incidents-log",
            children: "Security Incidents Log",
            icon: "ClipboardDocumentListIcon",
            onClick: () => onItemClick("/security"),
          },
        ],
      },
    ],
    search
  );

  return (
    <>
      <div
        className="w-[350px] xl:w-[450px] h-[45px] flex items-center space-x-3 bg-lightGray rounded-xl px-8 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <svg
          className="w-4 h-4 text-black"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <p className="text-grayColor">Search here...</p>
      </div>

      <CommandPalette
        onChangeSearch={setSearch}
        onChangeOpen={setOpen}
        search={search}
        isOpen={open}
        page="root"
      >
        <CommandPalette.Page id="root">
          {filteredItems.length ? (
            filteredItems.map((list) => (
              <CommandPalette.List key={list.id} heading={list.heading}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    key={id}
                    index={getItemIndex(filteredItems, id)}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            ))
          ) : (
            <CommandPalette.FreeSearchAction />
          )}
        </CommandPalette.Page>

        {/* <CommandPalette.Page id="projects">
        <p className="bg-red-500">Click</p>
      </CommandPalette.Page> */}
      </CommandPalette>
    </>
  );
};

export default GlobalSearch;

// components/CommandPalette.tsx
