import { Icon } from "@iconify/react";
import { ReactNode } from "react";

interface IChart {
  title: string;
  desc: string;
  children: ReactNode;
}

export const ChartBoxes = ({ title, desc, children }: IChart) => {
  return (
    <div className="shadow-xl rounded-2xl overflow-hidden">
      <header className="w-full p-6 flex items-center justify-between border-b border-input">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-sm font-normal text-medGray">{desc}</p>
        </div>
        <Icon
          className="text-medGray"
          icon="si:info-fill"
          width="30"
          height="30"
        />
      </header>

      <div className="py-5 px-5 place-content-center">{children}</div>
    </div>
  );
};
