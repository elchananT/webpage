import React from 'react'

const Button = ({ type = 'primary', children, className }: { type?: 'primary' | 'secondary', children: React.ReactNode, className?: string }) => {
    switch (type) {
        case 'primary':
            return (
                <button
                    className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-[#d4a56c] border border-[#d4a56c] hover:bg-[#d4a56c] hover:text-slate-50 transition-all duration-150 text-sm font-bold leading-normal tracking-[0.015em] ${className}`}
                >
                    <span className="truncate">{children}</span>
                </button>
            )
        case 'secondary':
            return (
                <button
                    className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 text-slate-50 border border-slate-50 hover:bg-slate-50 hover:text-[#d4a56c] transition-all duration-150 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] ${className}`}
                >
                    <span className="truncate">{children}</span>
                </button>
            )
    }




}
export default Button
