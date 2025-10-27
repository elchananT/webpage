import {ArrowRight} from "lucide-react";
import React from "react";

type FAQItemProps = {
    question: string,
    answer: string,
    isOpen: boolean,
    onClick: () => void
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className="rounded-2xl overflow-hidden">
            <button
                onClick={onClick}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
            >
                <span className="text-gray-700 font-medium">{question}</span>
                <div className={`text-gray-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                }`}>
                    <ArrowRight size={20} />
                </div>
            </button>
            <div className={`px-6 overflow-hidden transition-all duration-300 ${
                isOpen ? 'pb-4 max-h-96' : 'max-h-0'
            }`}>
                <p className="text-[#98A0B3] leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

export default FAQItem
