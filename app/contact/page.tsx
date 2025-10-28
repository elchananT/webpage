import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact | ALI DESIGN CHICAGO",
    description: "Contact to us via contact page",
};

import React from 'react'
import Contact from "@/app/contact/Contact";

const Page = () => {
    return (
        <div>
            <Contact/>
        </div>
    )
}
export default Page

