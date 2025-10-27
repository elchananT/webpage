import React from "react";
import TestmonailsCard, {TestmonailsCardProps} from "@/components/TestmonailsCard";
import Link from "next/link";
import {Faq} from "@/components/FAQ";
import Button from "@/components/Button";
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import type {Metadata} from "next";

const testmonails: TestmonailsCardProps[] = [
    {
        image: "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        name: "John Doe",
        rating: 4.5,
        description: "We hired them to remodel our kitchen, and the result was stunning! The team was super professional, stayed on schedule, and helped us pick beautiful materials that fit our budget. I absolutely love how open and bright the space feels now."
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
        name: "Shara Smith",
        rating: 5,
        description: "Excellent experience from start to finish. Communication was clear, the work was precise, and they cleaned up every day before leaving. Our bathroom remodel looks like it came straight out of a design magazine!"
    },
    {
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
        name: "David Cohen",
        rating: 4.9,
        description: "We did a full living room renovation, and everything turned out great. The crew was friendly and paid attention to detail. The only small issue was a slight delay with a shipment, but they handled it very professionally."
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
        name: "Jason Miller",
        rating: 5,
        description: "I’m beyond happy with our home remodel! They completely transformed our old basement into a modern family space. I appreciated how they walked us through every step — honest, skilled, and reliable team!"
    }
]

const projects: { image: string, title: string, description: string }[] = [
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
    title: "Home | rcbcarpentry",
    description: "Remodeling, Decking, siding, interior and exterior finish,🥇Experienced Pro 🏡Residential ",
};

export default function Home() {
  return (
    <div className="px-10 md:px-24 flex flex-1 justify-center py-5 mt-20">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
                <div className="@[480px]:p-4">
                    <div
                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 rounded-2xl"
                        style={{ backgroundImage: `url('/hero.png')`}}
                    >
                                <div className="flex flex-col gap-2 text-center w-full">
                                <h1
                                    className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                                >
                                    Transforming Spaces,<br/> Building Dreams
                                </h1>
                                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                    Crafting exceptional home renovations with a focus on quality, design,
                                    and client satisfaction.
                                </h2>
                            </div>
                            <div className="flex-wrap gap-3 flex items-center justify-center w-full mt-12">
                                <Link href="/contact"
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1172d4] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                                >
                                    <span className="truncate">Contact Us</span>
                                </Link>
                                <Button className="min-w-[84px] max-w-[480px] h-10 px-4 @[480px]:h-12 @[480px]:px-5" type='secondary'>
                                    Get a Quote
                                </Button>
                            </div>
                    </div>
                </div>

            </div>

            {/*About*/}
            <div>
                <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About
                    Us</h2>
                <p className="text-[#0d141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Renovate is a premier remodeling company dedicated to transforming homes with innovative
                    design and superior craftsmanship. With years of experience, we specialize in
                    creating spaces that reflect our clients unique styles and needs. Our team of skilled
                    professionals ensures every project, from concept to completion, exceeds
                    expectations.
                </p>
                <Link href="/about">
                    <button className="flex items-center ml-4 gap-2 text-[#4c739a] hover:translate-x-1 transition-all duration-200 cursor-pointer mt-6 mb-12">
                        <span>Learn More</span>
                        <ArrowRight className="hover:rotate-45 transition-all duration-200" />
                    </button>
                </Link>
            </div>


            {/*Projects*/}
            <div>

                <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our
                    Projects</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    {projects.map(({image, title, description}, index) => (
                        <div key={index} className="flex flex-col gap-3 pb-3">
                            <Image src={image} alt="project" width={300} height={300} className="rounded-lg"/>

                            <div>
                                <p className="text-[#0d141b] text-base font-medium leading-normal">{title}</p>
                                <p className="text-[#4c739a] text-sm font-normal leading-normal">{description}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <Link href="/projects">
                    <button className="flex items-center ml-4 gap-2 text-[#4c739a] hover:translate-x-1 transition-all duration-200 cursor-pointer  mt-6 mb-12">
                        <span>Learn More</span>
                        <ArrowRight className="hover:rotate-45 transition-all duration-200" />
                    </button>
                </Link>
            </div>


            {/*<h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mt-20">Testimonials</h2>*/}
            <div className="flex flex-col gap-8 overflow-x-hidden bg-slate-50 p-4 mb-20">
                {testmonails.map(({ image, name, description, rating }, index) => (
                    <div key={index}>
                        <TestmonailsCard image={image} name={name} description={description} rating={rating}    />
                    </div>
                ))}
            </div>

            <Faq/>

            <div className="@container">
                <div
                    className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                    <div className="flex flex-col gap-2 text-center">
                        <h1
                            className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                        >
                            Ready to Start Your Project?
                        </h1>
                    </div>
                    <div className="flex flex-1 justify-center">
                        <div className="flex justify-center">
                            <Link href="/contact"
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1172d4] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                            >
                                <span className="truncate">Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
