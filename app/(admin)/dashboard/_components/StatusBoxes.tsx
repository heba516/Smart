import Image from "next/image";
import React from "react";
import { IStatusData } from "@/interfaces";
import { Dot } from "lucide-react";

interface StatusBoxesProps {
    statusData: IStatusData[];
}

export default function StatusBoxes(props: StatusBoxesProps) {
    const { statusData } = props;

    return (
        <section className="flex my-8 justify-start mx-auto gap-[19px] flex-wrap xl:flex-nowrap ">
            {statusData.map((box, index) => (
                <div
                    className="rounded-xl border border-[#D8DADC] py-6 px-6 space-y-3 min-w-60"
                    key={index}
                >
                    <div className="flex justify-between items-start gap-6">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-[19px] text-grayColor">
                                {box.name}
                            </h4>
                            <p className="font-medium text-sm text-[#999CA0]">
                                <span
                                    className="font-bold text-black lg:text-2xl text-xl me-1 "
                                    style={{ color: box.numberColor }}
                                >
                                    {box.number}
                                </span>
                                {box.numberUnite == "camera of" ? (
                                    <span className="font-medium text-sm text-[#999CA0]">
                                        {box.numberUnite}
                                        <span
                                            className="font-bold text-black lg:text-2xl text-xl me-1 "
                                            style={{ color: box.numberColor }}
                                        >
                                            {" "}
                                            45
                                        </span>
                                    </span>
                                ) : (
                                    box.numberUnite
                                )}
                            </p>
                        </div>
                        <Image
                            src={box.src}
                            width={50}
                            height={50}
                            alt="box image"
                        />
                    </div>
                    {box.numberUnite == "camera of" ? (
                        <div>
                            <Dot
                                size={48}
                                color="#24a855"
                                strokeWidth={3}
                                className="inline"
                            />
                            <span className="text-[#24A855] text-lg">
                                online
                            </span>
                        </div>
                    ) : (
                        <div className="flex space-x-1">
                            <Image
                                src={`${
                                    box.percentIncreased
                                        ? "/images/increasingArrow.svg"
                                        : "/images/decreasingArrow.svg"
                                }`}
                                width={24}
                                height={24}
                                alt="arrow"
                            />
                            <span
                                className={`${
                                    box.percentIncreased
                                        ? "text-[#16A34A]"
                                        : "text-[#ED1C24]"
                                } font-medium text-base`}
                            >
                                {box.percent > 0 ? "+" : ""}
                                {box.percent}%
                            </span>
                            <p className="font-medium text-sm text-grayColor ms-2">
                                (since last week)
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}
