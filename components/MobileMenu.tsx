'use client'

import React, {useState} from 'react'
import {Menu, X} from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="md:hidden">
            <div className="flex items-center gap-8 justify-between px-10 py-3">
                <Link href="/">
                    <h2 className="text-[#0d141b] text-lg font-bold leading-tight tracking-[-0.015em]">rcbcarpentry</h2>
                </Link>
                <button onClick={handleOpen} className="text-gray-400">
                    { isOpen ? <X /> : <Menu/> }
                </button>
            </div>

            {isOpen && (
                <div
                    className="flex flex-col flex-1 gap-8 justify-center pb-4"
                >
                    <div className="flex flex-col items-center justify-center gap-9">
                        <Link onClick={handleOpen} className="text-[#0d141b] text-lg font-medium leading-normal" href="/">Home</Link>
                        <Link onClick={handleOpen} className="text-[#0d141b] text-lg font-medium leading-normal" href="/about">About</Link>
                        <Link onClick={handleOpen} className="text-[#0d141b] text-lg font-medium leading-normal" href="/projects">Projects</Link>
                        <Link onClick={handleOpen} className="text-[#0d141b] text-lg font-medium leading-normal" href="/contact">Contact</Link>
                        <button
                            onClick={handleOpen}
                            className="flex cursor-pointer items-center justify-center rounded-2xl h-12 w-32 px-5 bg-[#1172d4] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                        >
                            <span className="truncate">Get a Quote</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default MobileMenu
