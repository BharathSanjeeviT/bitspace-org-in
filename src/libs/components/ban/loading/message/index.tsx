'use client'

import { useState } from "react";

type LoadingProps = {
    msg: string;
    sub_msg?: string;
}

export const Loading = ({ msg, sub_msg }: LoadingProps) => {
    const [dot, setDot] = useState(".");
    setTimeout(() => {
        if (dot === "...") setDot(".")
        else setDot(dot + ".")
    }, 250)
    return (<div className="w-full h-full flex flex-col items-center justify-center">
        <div className="font-black text-[40px]">
            {msg}{dot}
        </div>
        {sub_msg && (
            <div>
                <span className="text-accent font-black">*</span> <span className="font-black">{sub_msg}</span> <span className="text-accent font-black">*</span>
            </div>)
        }
    </div>)
}
