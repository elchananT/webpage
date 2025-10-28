import React from 'react'
import Image from "next/image";
import type {Metadata} from "next";

type Projects = {
    image: string,
    title: string,
    description: string,
}

const projects: Projects[] = [
    {
        image: "/deck.png",
        title: "Deck Work",
        description: "deck framing and finishing."
    },
    {
        image: "/frenchdoor.png",
        title: "French Door",
        description: "French door replacement! removal, floor leveling, wall widening and framing."
    },
    {
        image: "/remodeling.png",
        title: "Remodeling",
        description: "remodeling, wall opening and finishing."
    }
]

export const metadata: Metadata = {
    title: "Projects | ALI DESIGN CHICAGO",
    description: "Watch projects framing and finishing.",
};

const Page = () => {
    return (
        <div className="px-10 md:px-24 flex flex-1 justify-center py-5 mt-20">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight">Our
                            Projects</p>
                        <p className="text-[#d4a56c] text-sm font-normal leading-normal">
                            Explore our portfolio of completed remodeling projects, showcasing our commitment to
                            quality and design excellence.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    {projects.map(({image, title, description}, index) => (
                        <div key={index} className="flex flex-col gap-3 pb-3">
                            <Image src={image} alt="project" width={300} height={300} className="rounded-lg"/>
                            <div>
                                <p className="text-[#0d141b] text-base font-medium leading-normal">{title}</p>
                                <p className="text-[#d4a56c] text-sm font-normal leading-normal">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Page
