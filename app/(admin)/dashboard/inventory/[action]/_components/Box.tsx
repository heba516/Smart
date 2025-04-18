import React, { ReactNode } from "react";

interface IProps {
  title: string;
  children: ReactNode;
}

const Box = ({ title, children }: IProps) => {
  return (
    <div className="rounded-xl border border-input p-5">
      <h3 className="capitalize text-2xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default Box;
