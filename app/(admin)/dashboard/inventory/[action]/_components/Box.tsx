import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface IProps {
  title: string;
  className: string;
  children: ReactNode;
}

const Box = ({ title, className, children }: IProps) => {
  return (
    <div className={cn("rounded-xl border border-input p-5", className)}>
      <h3 className="capitalize text-2xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default Box;
