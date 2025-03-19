import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import Image from "next/image";

interface IKnowMoreButton {
    desc: string;
}
function KnowMoreButton({ desc }: IKnowMoreButton) {
    return (
        <div className="group-hover:bg-black/50 flex flex-col justify-center items-center px-10 h-full transition-all duration-700 ease-in-out delay-150">
            <p className="opacity-0 group-hover:opacity-100 text-white text-base transition-all -translate-x-5 translate-y-20 group-hover:translate-y-0 group-hover:translate-x-0 duration-500 ease-in-out delay-150">
                {desc}
            </p>
            <Link href="">
                <Button className="group/button group-hover:bg-white/[0.23] bg-white opacity-0 group-hover:opacity-100 blur-xs mt-5 border border-white text-xl transition-all -translate-x-5 translate-y-20 group-hover:translate-y-0 group-hover:translate-x-0 duration-500 ease-in-out">
                    <p>Know more</p>
                    <Image
                        className="opacity-0 translate-x-2 group-hover/button:opacity-100 group-hover/button:translate-x-0 ms-1 transition-all duration-300 ease-in-out"
                        src="images/rightArrow.svg"
                        width={10}
                        height={10}
                        alt="right arrow"
                    />
                </Button>
            </Link>
        </div>
    );
}
export default KnowMoreButton;
