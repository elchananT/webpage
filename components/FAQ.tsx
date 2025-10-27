'use client'

import React, {useState} from 'react'
import FAQItem from "@/components/FAQItem";

type FAQProps = {
    question: string,
    answer: string,
}

const FAQ: FAQProps[] = [
    {
        question: "What services does RCB Carpentry, Inc. provide?",
        answer: "RCB Carpentry, Inc. provides the following services: Attic Conversion, Attic Restoration, Baseboard Installation, Basement Remodeling, Bathroom Remodeling, Crown Molding Installation, Custom Home Bars, Deck Building, Deck Repair, Electric Fireplace Installation, Home Remodeling, Home Restoration, Kitchen Remodeling, Laminate Flooring Installation, Lighting Installation, Porch Design & Construction, Shed Design & Construction, Shower Installation, Tile Cutting, Trim Work, Wainscoting, Water Heater Installation, Workshop Design & Construction"
    },
    {
        question: "Where does RCB Carpentry, Inc. provide services?",
        answer: "RCB Carpentry, Inc. provides services in the following areas: Algonquin, Barrington, Bartlett, Carol Stream, Carpentersville, Dundee, East Dundee, Elgin, Gilberts, Hanover Park, Hoffman Estates, Inverness, Kaneville, Lafox, Lily Lake, Pingree Grove, Plato Center, Saint Charles, Sleepy Hollow, South Barrington, South Elgin, Streamwood, Village of Campton Hills, Wasco, Wayne, West Dundee, Geneva, Batavia"
    },
    {
        question: "Woodworkers & Carpenters near Elgin",
        answer: "Algonquin Woodworkers & Carpenters · Batavia Woodworkers & Carpenters · Bloomingdale Woodworkers & Carpenters · Glen Ellyn Woodworkers & Carpenters · Huntley Woodworkers & Carpenters · Lake in the Hills Woodworkers & Carpenters · Roselle Woodworkers & Carpenters · South Elgin Woodworkers & Carpenters · Wasco Woodworkers & Carpenters · West Chicago Woodworkers & Carpenters"
    }
]

export const Faq = () => {
    const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);

    return (
        <div>
            {FAQ.map(( {question, answer}, index) => (
                <div key={index}>
                    <FAQItem question={question} answer={answer} onClick={() => {
                        if (isOpenIndex !== index) {
                            setIsOpenIndex(index)
                            return;
                        }
                        setIsOpenIndex(null)
                    }} isOpen={isOpenIndex === index} />
                </div>
            ))}
        </div>
    )
}

