import React from "react";
import { Button } from "./ui";
import Link from "next/link";

interface IKnowMoreButton {
    desc: string;
}
function KnowMoreButton({ desc }: IKnowMoreButton) {
    return (
        <div className="group-hover:bg-black/50 flex flex-col justify-center items-center px-10 h-full transition-all duration-700 delay-150 ease-in-out">
            <p className="opacity-0 group-hover:opacity-100 text-base text-white transition-all -translate-x-5 translate-y-20 group-hover:translate-y-0 group-hover:translate-x-0 duration-500 delay-150 ease-in-out">
                {desc}
            </p>
            <Link href="">
                <Button className="group-hover:bg-white/[0.23] border-white bg-white opacity-0 group-hover:opacity-100 blur-xs mt-5 border text-xl transition-all -translate-x-5 translate-y-20 group-hover:translate-y-0 group-hover:translate-x-0 duration-500 ease-in-out">
                    Know more
                </Button>
            </Link>
        </div>
    );
}
export default KnowMoreButton;