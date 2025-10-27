import React from 'react'
import {Star} from "lucide-react";

export type TestmonailsCardProps = {
    image: string;
    name: string;
    rating: number;
    description: string;
}

const TestmonailsCards = ({ image, name, rating, description }: TestmonailsCardProps) => {
    return (
        <div className="flex flex-col gap-3 bg-slate-50 border-1 border-gray-300 px-4 py-2 rounded-xl">
                <div className="flex items-center gap-3">
                        <img src={image} alt="profile" className="rounded-full h-10 w-10 object-cover" />
                        <div className="flex-1 flex flex-col">
                            <p className="text-[#0d141b] text-base font-medium leading-normal">{name}</p>
                            <div className="flex items-center gap-3 ml-4">
                                <p className="text-[#0d141b] text-base font-medium leading-normal">
                                    {rating}
                                </p>
                                <div className="flex gap-0.5">
                                    <div className="text-[#1172d4]" data-icon="Star" data-size="20px"
                                         data-weight="fill">
                                        <Star size={12} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            <p className="text-[#0d141b] text-base font-normal leading-normal">
                {description}
                </p>
            </div>
    )
}
export default TestmonailsCards
