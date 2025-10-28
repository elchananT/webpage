'use client'

import React, {useState} from 'react'
import {Menu, X} from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="md:hidden">
            <div className="flex items-center gap-8 justify-between px-10 py-3">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={60} height={60} />
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
                        <button onClick={handleOpen}>
                            <Button>
                                <span className="truncate">Get a Quote</span>
                            </Button>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default MobileMenu
