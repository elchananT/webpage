import React from 'react'
import type {Metadata} from "next";

const teamMembers: {image: string, name: string, position: string}[] = [
    {
        image: "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        name: "John Doe",
        position: "Product Menager"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
        name: "Shara Smith",
        position: "Product Menager"
    },
    {
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
        name: "David Cohen",
        position: "Product Menager"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
        name: "Jason Miller",
        position: "Product Menager"
    }
]

export const metadata: Metadata = {
    title: "About Us | rcbcarpentry",
    description: "Get to meet us and our team.",
};


const Page = () => {
    return (
        <div className="px-10 md:px-24 flex flex-1 justify-center py-5 mt-20">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight">About
                            Us</p>
                        <p className="text-[#4c739a] text-sm font-normal leading-normal">
                            Renovate is a premier remodeling company dedicated to transforming spaces and
                            enhancing lives. With a focus on quality craftsmanship, innovative design, and
                            exceptional customer service, we bring your vision to life.
                        </p>
                    </div>
                </div>
                <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our
                    Story</h2>
                <p className="text-[#0d141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Founded in 2010 by Sarah Johnson, Renovate began as a small team with a big dream: to
                    redefine the remodeling experience. From our humble beginnings,
                    we&#39;ve grown into
                    a trusted name in the industry, known for our commitment to excellence and our passion
                    for creating beautiful, functional spaces. Our journey has been marked by
                    continuous learning, adaptation, and a relentless pursuit of perfection. We&#39;ve embraced
                    new technologies, honed our skills, and built lasting relationships with
                    clients and partners alike. Today, Renovate stands as a testament to our unwavering
                    dedication to quality and our belief in the power of collaboration.
                </p>
                <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our
                    Mission</h2>
                <p className="text-[#0d141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    At Renovate, our mission is to exceed expectations by delivering exceptional remodeling
                    services that transform houses into homes. We strive to create spaces that
                    reflect our clients&#39; unique styles and needs, while ensuring a seamless and stress-free
                    process from start to finish. Our commitment to quality, integrity, and
                    innovation drives everything we do, as we aim to build lasting relationships with our
                    clients based on trust and mutual respect.
                </p>
                <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our
                    Values</h2>
                <p className="text-[#0d141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Our core values guide our every decision and action at Renovate. We believe in: -
                    **Quality:** We are committed to using the finest materials and employing skilled
                    craftsmen to ensure superior results. - **Integrity:** We operate with honesty,
                    transparency, and ethical conduct in all our interactions. - **Innovation:** We
                    embrace creativity and new ideas to deliver cutting-edge designs and solutions. -
                    **Customer Focus:** We prioritize our clients&#39; needs and strive to provide
                    personalized service and exceptional communication. - **Collaboration:** We foster a
                    collaborative environment, working closely with clients, designers, and
                    contractors to achieve shared goals.
                </p>
                <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet
                    Our Team</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">

                    {teamMembers.map(({image, name, position}, index) => (
                        <div key={index} className="flex flex-col gap-3 pb-3">
                            <img src={image} alt="project" className="rounded-lg h-64 w-64 object-cover" />
                            <div>
                                <p className="text-[#0d141b] text-base font-medium leading-normal">{name}</p>
                                <p className="text-[#4c739a] text-sm font-normal leading-normal">{position}</p>
                            </div>
                        </div>
                    ))}



                </div>
                <div className="@container">
                    <div
                        className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                        <div className="flex flex-col gap-2 text-center">
                            <h1
                                className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                            >
                                Ready to Transform Your Space?
                            </h1>
                            <p className="text-[#0d141b] text-base font-normal leading-normal max-w-[720px">
                                Contact us today to discuss your remodeling project and discover how
                                Renovate can bring your vision to life.
                            </p>
                        </div>
                        <div className="flex flex-1 justify-center">
                            <div className="flex justify-center">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1172d4] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                                >
                                    <span className="truncate">Get a Quote</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
