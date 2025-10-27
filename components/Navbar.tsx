import React from 'react'
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import Button from "@/components/Button";

const Navbar = () => {
    return (
            <header
                className="fixed bg-slate-50 w-screen">
                <div className="hidden w-screen md:flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#0d141b]">

                        <Link href="/">
                            <h2 className="text-[#0d141b] text-lg font-bold leading-tight tracking-[-0.015em]">rcbcarpentry</h2>
                        </Link>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <div className="flex items-center gap-9">
                            <Link className="text-[#0d141b] text-sm font-medium leading-normal hover:text-gray-500" href="/">Home</Link>
                            <Link className="text-[#0d141b] text-sm font-medium leading-normal hover:text-gray-500" href="/about">About</Link>
                            <Link className="text-[#0d141b] text-sm font-medium leading-normal hover:text-gray-500" href="/projects">Projects</Link>
                            <Link className="text-[#0d141b] text-sm font-medium leading-normal hover:text-gray-500" href="/contact">Contact</Link>
                        </div>
                        <Button>
                            Get a Quote
                        </Button>
                    </div>
                </div>

                <MobileMenu />
            </header>
    )
}
export default Navbar
